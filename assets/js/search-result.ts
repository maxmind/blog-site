import GoogleSearch from './google-search';

const handleFormSubmit = (event: any) => {
  event.preventDefault();
  console.log('hello');

  const searchQuery = (document.querySelector('#search') as HTMLInputElement).value;
  console.log(searchQuery);

  const searchResults = GoogleSearch(searchQuery, 1);
  console.log(searchResults);
}

window.addEventListener('DOMContentLoaded', () => {
  const searchForm = document.querySelector('#search__form');
  searchForm?.addEventListener('submit', handleFormSubmit);
});

