// This file holds the function to find the related book cover using the https://bookcover.longitood.com/ API

export default async function findCover(title, author) {
    let authorName = ""
    let coverUrl = ""

    const replacedTitle = title.replace(/ /g, "+");

    for (let [key, value] of Object.entries(author)) {
        authorName = value
    }
    const replacedAuthor = authorName.replace(/ /g, "+");

    const url = "https://bookcover.longitood.com/bookcover?book_title=" + replacedTitle + "&author_name=" + replacedAuthor;
    try {
      const response = await fetch(url)
      
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const responseUrl = await response.json()
      for (let [key, value] of Object.entries(responseUrl)) {
        coverUrl = value
    }
      return coverUrl
    } catch (error) {
      console.error(error);
      throw error;
    }
}