const endpoint =
  'https://www.googleapis.com/customsearch/v1/siterestrict?cx={cx}&key={key}';

const cx = '5204c164979744d30';
const key = 'AIzaSyAI4atAz3I5ujXCjoEXRvdwqcYn3AIsCA8';

const url = endpoint
  .replace('{cx}', cx)
  .replace('{key}', key);

const googleSearch = () =>
  async (query, startIndex) => {
    let requestUrl = `${url}&q=${query}`;

    if (startIndex) {
      requestUrl = requestUrl + `&start=${startIndex}`;
    }

    const response = await fetch(requestUrl);

    if (!response.ok) {
      throw new Error(`There was an error searching for ${query}`);
    }

    return await response.json();
  };

googleSearch();
