import ReactDOM from "react-dom";
import { StrictMode, useState } from "react";
import { Link, Route, Switch } from "react-router-dom";
import DetailsWithErrorBoundary from "./Details";
import ThemeContext from "./ThemeContext";
import SearchParams from "./SearchParams";


const App = () => {
  const theme = useState("darkblue");

  return (
    <StrictMode>
      <ThemeContext.Provider value={theme}>
        <div
          style={{
            background: "url(http://pets-images.dev-apis.com/pets/wallpaperA.jpg)",
          }}
        >
          <header
            className="w-full mb-10 text-center p-7 bg-gradient-to-b from-purple-400 via-pink-500 to-red-500"
          >
            <Link
              to="/"
              className="text-6xl text-white hover:text-gray-300"
            >
              <h1>Adopt Me!</h1>
            </Link>
          </header>
          <Switch>
            <Route path="/details/:id">
              <DetailsWithErrorBoundary />
            </Route>
            <Route path="/">
              <SearchParams />
            </Route>
          </Switch>
        </div>
      </ThemeContext.Provider>
    </StrictMode>
  );
};

export default App;
