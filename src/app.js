import React from "react";
import ReactDOM from "react-dom";
import Pet from "./pet"


const App = () => {
  return React.createElement("div", {}, [
    React.createElement("hi", {}, "Adopt-Me!!"),
    React.createElement(Pet, { 
        name: "Doggy", 
        animal: "dog", 
        breed: "husky" 
    }),
    React.createElement(Pet, {
      name: "Billu",
      animal: "Cat",
      breed: null,
    }),
    React.createElement(Pet, {
      name: "Mau",
      animal: "Cat",
      breed: "Bengal Cat",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
