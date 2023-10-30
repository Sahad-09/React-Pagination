import { useEffect, useState } from "react";
import "./App.css";
import Images from "./components/Images";

function App() {
  const [image, setImage] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
      .then((response) => response.json())
      .then((data) => setImage(data));
  });

  return (
    <>
      <Images data={image} />
    </>
  );
}

export default App;
