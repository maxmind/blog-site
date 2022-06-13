import GoogleSearch from './google-search';

const searchForm = document.querySelector('#search__form');

const handleFormSubmit = (event: any) => {
  event.preventDefault();
  console.log('hello');

  const searchQuery = (document.querySelector('#search') as HTMLInputElement).value;
  console.log(searchQuery);

  const searchResults = GoogleSearch(searchQuery, 1);
  console.log(searchResults);
}

searchForm?.addEventListener('submit', handleFormSubmit);

