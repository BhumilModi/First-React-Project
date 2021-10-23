/* global React ReactDOM */

const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("h3", {}, props.animal),
    React.createElement("h3", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("hi", {}, "Adopt-Me!!"),
    React.createElement(Pet, { 
        name: "Rocky", 
        animal: "dog", 
        breed: "husky" 
    }),
    React.createElement(Pet, {
      name: "Billu",
      animal: "Bird",
      breed: "Parrot",
    }),
    React.createElement(Pet, {
      name: "Mau",
      animal: "Cat",
      breed: "Bengal Cat",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
