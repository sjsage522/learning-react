import {useEffect, useLayoutEffect} from "react";
import WordCount from "./components/WordCount"

function App() {
    useEffect(() => console.log("useEffect"));
    useLayoutEffect(() => console.log("useLayoutEffect")); //먼저 발생

    return (
    <>
      <WordCount children="hi junseok"/>
    </>
  );
}

export default App;
