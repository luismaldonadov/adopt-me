// Desctructuring Props from the object passed from, that will be passed down to components
const Pet = ({ name, animal, breed}) => {
  // We are going to return an array of React components from Pet.
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
}


// Your code is going to go here
const App = () => {
  return React.createElement(
    // "DOM-like" structure in JavaScript
    "div",
     {},
     // we can pass properties in the second parameter passed down to the element
     [ 
      React.createElement("h1", { id: "brand" }, "Adopt me"),
      React.createElement(Pet, { name: "Luna", animal: "Dog", breed: "Havanese"}),
      React.createElement(Pet, { name: "Pepper", animal: "Bird", breed: "Cockatiel"}),
      React.createElement(Pet, { name: "Doink", animal: "Cat", breed: "Mixed"})
    ]
  );
}
// We pass the "stamp" or componennt to ReactDOm to render in the specific DOM node.
ReactDOM.render(React.createElement(App), document.getElementById('root'))