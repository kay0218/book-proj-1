import runQuery from "./runQuery";

export function Dash() {
    console.log("hello")
    
    return (
      <div>
        <label htmlFor="dateInput"> Enter your birthdate! </label>
        <input type="date" id="dateInput"/>
        <button onClick={() => runQuery()}> Get your book now! </button>
      </div>
    );
  }