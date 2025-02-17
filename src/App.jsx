import { useState } from "react";
import "./App.css";
import Header from "@component/semantic/Header";
import Footer from "@component/semantic/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header></Header>
      <Footer></Footer>
    </>
  );
}

export default App;
