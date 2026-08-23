'use client';

import { useState, useEffect } from "react";
import runQuery from "../components/runQuery";
import findCover from "@/components/findCover";

export default function Home() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  useEffect(() => {
    const initParticles = () => {
      if (window.particlesJS) {
        window.particlesJS.load(
          'particles-js',
          `${basePath}/assets/particles.json`
        );
      } else {
        setTimeout(initParticles, 100);
      }
    };
  
    initParticles();
  }, []);

  let coverValue = ""
  const [loading, setLoading] = useState(false);


  const handleClick = async () => {
    const dateValue = document.getElementById("dateInput").value;
    const splitValue = dateValue.split("-");
    const yearValue = splitValue[0];
    const genreValue = document.getElementById("genreSelect").value;

    setLoading(true);

    try { 
      let results = await runQuery(yearValue, genreValue);
      await setOnPage(results);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false); 
    }
  };
  
  async function setOnPage(results){
    if (!results || results.length === 0) {
      return "No books found"; 
    }

    let randomTitle = ""
    let randomAuthor = ""
    let byWord = ""
    const randomBook = results[Math.floor(Math.random() * results.length)];

    let titleInputValue = document.getElementById("book-title")
    let authorInputValue = document.getElementById("book-author")
    let byInputValue = document.getElementById("book-by")
    // let coverInputValue = document.getElementById("book-cover")

    randomTitle = randomBook.title
    randomAuthor = randomBook.author
    byWord = " by "

    // let cover = await findCover(randomTitle, randomAuthor)

    titleInputValue.innerText = randomTitle
    authorInputValue.innerText = randomAuthor
    byInputValue.innerText = byWord
    // coverInputValue.src = cover
  }

  return (
    <div className="app">
      <div id="particles-js"></div>
  
      <div className="ui">
        <div className="container">
          <label htmlFor="dateInput" id="dateInputValue">
            Don't know what to read? <br/>
            Pick a genre & enter your birth year <br/>
            to get a book recommended
          </label>
        </div>
  
        <div className="container">
        <select name="genres" id="genreSelect">
          <option value="">--Genre Selector--</option>
          <option value="romance">Romance</option>
          <option value="fantasy">Fantasy</option>
          <option value="horror">Horror</option>
          <option value="mystery">Mystery</option>
        </select>
          <input type="text" id="dateInput" placeholder="Enter your year"/>
          <button onClick={handleClick} className="button" disabled={loading}>
            {loading ? "Loading..." : "Give me a book!"}
          </button>
        </div>

        {loading && <p className="childC">Fetching your book...</p>}
  
        <div className="parentC">
          {/* <div className="childC coverContainer">
            <img id="book-cover" height="200px" />
          </div> */}
  
          <div className="childC">
            <p id="book-title"></p>
          </div>
          <div className="childC">
            <p id="book-by"></p>
          </div>
          <div className="childC">
            <p id="book-author"></p>
          </div>
        </div>
      </div>
    </div>
  )
}