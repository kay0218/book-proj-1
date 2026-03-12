'use client';

import { useState } from "react";
import runQuery from "../components/runQuery";
import findCover from "@/components/findCover";

export default function Home() {
  let coverValue = ""
  const [bookList, setBookList] = useState([]);

  const handleClick = async () => {
    const dateValue = document.getElementById("dateInput").value;
    const splitValue = dateValue.split("-");
    const yearValue = splitValue[0];

    try {
      const results = await runQuery(yearValue);
      setBookList(results);
    } catch (e) {
      console.error(e);
    }

    setOnPage(bookList)
  };
  
  async function setOnPage(results){
    let randomTitle = ""
    let randomAuthor = ""
    const randomBook = results[Math.floor(Math.random() * results.length)];

    let titleInputValue = document.getElementById("book-title")
    let authorInputValue = document.getElementById("book-author")
    let coverInputValue = document.getElementById("book-cover")

    randomTitle = randomBook.title
    randomAuthor = randomBook.author

    let cover = await findCover(randomTitle, randomAuthor)

    titleInputValue.innerText = randomTitle
    authorInputValue.innerText = randomAuthor
    coverInputValue.src = cover
  }

  

  return (
    <div>
      <div className="container">
        <label htmlFor="dateInput" id="dateInputValue"> Please enter your birth year! </label>
      </div>
      <div className="container">
          <input type="text" id="dateInput" />
          <button onClick={handleClick} className="button"> Give me a book! </button>
      </div>
      <div className="parentC">
      <div className="childC">
          <img id="book-cover" height="200px"/>
        </div>
        <div className="childC">
          <p id="book-title"></p>
        </div>
        <div className="childC">
          <p id="book-author"></p>
        </div>
      </div>
    </div>
  );
}
