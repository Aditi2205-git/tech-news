let topic = "popular"; // default query
let page = 0;

const newsDiv = document.getElementById("news");

// List of blocked titles to completely remove
const blockedTitles = [
    "Request for Startups: Kill Hollywood.",
    "Thank HN: My bootstrapped startup got acquired today"
];

// Async function to fetch news
async function loadNews() {
    const url = `https://hn.algolia.com/api/v1/search?query=${topic}&page=${page}`;

    try {
        const res = await fetch(url);
        const data = await res.json();

        // Confirm hits is an array
        if (!Array.isArray(data.hits)) {
            console.error("Unexpected API response:", data);
            return;
        }

        // Filter:
        // 1. Must have a valid URL starting with http
        // 2. Must not be in blockedTitles
        const validNews = data.hits.filter(
            item => item.url && item.url.startsWith("http") && !blockedTitles.includes(item.title)
        );

        // Display news
        showNews(validNews);

        // Increment page for infinite scroll
        page++;
    } catch (err) {
        console.error("Error fetching news:", err);
    }
}

function showNews(list) {
    for (let i = 0; i < list.length; i++) {
        const item = list[i];

        const div = document.createElement("div");
        div.className = "article";

        const title = item.title || "No title";
        const link = item.url;

        div.innerHTML = `
            <div class="title">${title}</div>
            <div class="info">
                Author: ${item.author} | Points: ${item.points || 0}
            </div>
            <a class="read" href="${link}" target="_blank">Read</a>
        `;

        newsDiv.appendChild(div);
    }
}

function changeTopic(newTopic) {
    topic = newTopic;
    page = 0;
    newsDiv.innerHTML = "";
    loadNews();
}

window.addEventListener("scroll", function () {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
        loadNews();
    }
});

loadNews();