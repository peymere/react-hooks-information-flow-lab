import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header"

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function onDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }
  const buttonText = isDarkMode ? "Dark Mode" : "Light Mode"
  // console.log(buttonText)

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header onDarkModeClick={onDarkModeClick} buttonText = {buttonText} />
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
