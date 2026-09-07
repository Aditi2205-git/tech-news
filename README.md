# Tech News Dashboard

A simple web-based Tech News Dashboard that displays technology-related news by topic. Users can switch between different topics and browse articles through an infinite-scrolling interface.

## Features

- Topic-based news browsing
- AI news
- JavaScript news
- Startup news
- Programming news
- Article title, author, and points display
- Read links for individual articles
- Infinite scrolling for loading additional news
- Automatic news loading on page refresh
- Responsive layout for smaller screens
- Basic handling of API response errors

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Hacker News Algolia API

## How It Works

The dashboard fetches news articles from the Hacker News Algolia API based on the selected topic.

Users can select:

- AI
- JavaScript
- Startup
- Programming

When a topic is selected, the current news list is cleared and new articles are loaded for that topic.

Additional articles are automatically loaded when the user scrolls near the bottom of the page.

## API

This project uses the Hacker News Algolia Search API to retrieve news data.

API endpoint pattern:

`https://hn.algolia.com/api/v1/search?query={topic}&page={page}`

## Project Structure

```text
tech-news/
│
├── index.html
├── style.css
├── script.js
└── README.md
