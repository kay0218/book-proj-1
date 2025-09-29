'use client';

import { useState } from "react";
import runQuery from "../components/runQuery";

export default function Home() {
  const [bookList, setBookList] = useState([]);
  let randomTitle = ""
  let randomAuthor = ""


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
    const randomBook = results[Math.floor(Math.random() * results.length)];

    let titleInputValue = document.getElementById("book-title")
    let authorInputValue = document.getElementById("book-author")

    let randomTitle = randomBook.title
    let randomAuthor = randomBook.author
    
    console.log(randomTitle)
    console.log(randomAuthor)

    titleInputValue.innerText = randomTitle
    authorInputValue.innerText = randomAuthor
  }

  

  return (
    <div>
      <div className="container">
        <label htmlFor="dateInput" id="dateInputValue"> Please enter your birth year! </label>
      </div>
      <div className="container">
        <input type="text" id="dateInput" />
        <button onClick={handleClick}> Give me a book! </button>
      </div>
      <div className="parentC">
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
