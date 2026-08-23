export default async function runQuery(yearValue, genreValue) {
  const url = "https://openlibrary.org/search.json?q=" + yearValue + "&fields=title,author_name,first_publish_year,subject&limit=1000";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();

    // Match results
    const matchedBooks = [];
    for (let data of json.docs) {
      console.log(data);
      if (yearValue == data.first_publish_year) {
        const hasGenre = data.subject?.some((subj) =>
          subj.toLowerCase().includes(genreValue)
        );

        if (hasGenre) {
          matchedBooks.push({
            title: data.title,
            author: data.author_name,
          });
        }
      }
    }

    return matchedBooks;
  } catch (error) {
    console.error(error);
    throw error;
  }
}