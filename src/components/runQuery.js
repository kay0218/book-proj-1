export default async function runQuery(yearValue, genreValue) {
  const url = `https://openlibrary.org/subjects/${genreValue}.json?published_in=${yearValue}-${yearValue}&limit=1000`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();

    const matchedBooks = json.works.map((work) => ({
      title: work.title,
      author: work.authors?.[0]?.name,
    }));

    return matchedBooks;
  } catch (error) {
    console.error(error);
    throw error;
  }
}