import React from "react";
import Container from "./component/container/container.component";
import { Footer } from "./footer/footer.component";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Number Guesser!</h1>
      <Container />
      <Footer />
    </div>
  );
}
