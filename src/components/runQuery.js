export default async function runQuery(yearValue) {
  const url = "https://openlibrary.org/search.json?q=" + yearValue;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();

    // Match results
    const matchedBooks = [];
    for (let data of json.docs) {
      if (yearValue == data.first_publish_year) {
        matchedBooks.push({
          title: data.title,
          author: data.author_name,
        });
      }
    }

    return matchedBooks;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
