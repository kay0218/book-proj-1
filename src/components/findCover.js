// This file holds the function to find the related book cover using the OpenLibrary's cover API

export default async function findCover(title, author) {
    console.log("find cover function")

    console.log(title)
    const replacedTitle = title.replace(/ /g, "+");
    console.log(replacedTitle)

    for (let authorName in author) {
        console.log(authorName[0].valueOf)
    }

    console.log(author)
    const replacedAuthor = author.replace(/ /g, "+");
    console.log(replacedAuthor)

    const url = "https://bookcover.longitood.com/bookcover?book_title=" + replacedTitle + "&author_name=" + replacedAuthor;
    console.log(url)

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
    //   const json = await response.json();

      console.log(response)
  
    //   // Match results
    //   const matchedBooks = [];
    //   for (let data of json.docs) {
    //     console.log(data);
    //     if (yearValue == data.first_publish_year) {
    //       matchedBooks.push({
    //         title: data.title,
    //         author: data.author_name,
    //         key: data.key,
    //       });
    //     }
    //   }
  
//       return matchedBooks;
    } catch (error) {
      console.error(error);
      throw error;
    }
}