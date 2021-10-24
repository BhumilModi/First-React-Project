import ReactDOM from "react-dom";
//import Pet from "./pet"
import SearchParams from "./SearchParams"

const App = () => {
  return(
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
      {/* <Pet name = "Doggy" animal = "dog" breed = "husky" />
      <Pet name = "Billu" animal = "cat" />
      <Pet name = "Mau" animal = "cat" breed = "Bengal Cat" /> */}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
