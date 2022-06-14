import GoogleSearch, { ISearchResults } from './google-search';

window.addEventListener('DOMContentLoaded', () => {
  const searchResultsCount = document.querySelector('.search__results-count');
  const searchResultsHeading = document.querySelector('.search__results-heading');
  const searchResultsList = document.querySelector('.search-results-list');

  const searchProperty = window.location.search;
  const urlSearchParams = new URLSearchParams(searchProperty);
  const query = urlSearchParams.get('query');
  const startIndex = urlSearchParams.get('start');

  const fetchResults = async () => {
    const results = await GoogleSearch(query, startIndex);

    const searchPagination = document.querySelector('.search__pagination');
    const searchNext = document.querySelector('.search__next');
    const searchPrev = document.querySelector('.search__previous');

    if (results.items) {
      searchResultsHeading.textContent = `Search results for ${query}`;
      searchResultsCount.textContent = `
        Displaying results ${results.queries.request[0].startIndex} - ${results.queries.request[0].startIndex + results.queries.request[0].count - 1} of ${results.queries.request[0].totalResults}
      `;

      results.items?.map((result) => {
        let article = document.createElement('article');
        article.className = 'search__result-list-item';

        let a = document.createElement('a');
        a.className = 'search__result-title';
        a.href = `${result.link}`
        a.textContent = `${result.title}`;

        let small = document.createElement('small');
        small.className = 'search__result-url';
        small.textContent = `${result.link}`;

        let p = document.createElement('p');
        p.className = 'search__result-description';
        p.textContent = `${result.snippet}`;

        searchResultsList.appendChild(article);
        article.appendChild(a);
        article.appendChild(small);
        article.appendChild(p);
      });

      if (results.queries.nextPage) {
        searchNext.style.display = 'block';
        searchNext.href = `?query=${query}&start=${results.queries.nextPage[0].startIndex}`;
      }

      if (results.queries.previousPage) {
        searchPrev.style.display = 'block';
        searchPrev.href = `?query=${query}&start=${results.queries.previousPage[0].startIndex}`;
      }
    } else {
      searchResultsHeading.textContent = `No results found for ${query}`
    }
  }

  if (searchProperty) {
    if (!query || query.trim() === '') {
      searchResultsHeading.textContent = 'Please enter a search query';
    } else {
        fetchResults();
    }
  }
});

