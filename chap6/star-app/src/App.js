import StarRating from "./components/StarRating";

function App() {
  return (
    <StarRating
        style={{backgroundColor: "lightblue"}}
        onDubleClick={e => alert("double click")}
    />
  );
}

export default App;
