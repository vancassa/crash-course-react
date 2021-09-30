import React from "react";
import Counter from "../../components/Counter/Counter";
import Quote from "../../components/Quote/Quote";

const Home = () => {
  return (
    // Empty tag like this is called React "fragment". It will be ignored when React renders the component.
    <>
      <header>
        <h1>React Example</h1>
      </header>
      <main>
        <h2>Counter</h2>
        <Counter />

        <h2>Random Quote Generator</h2>
        <Quote />
      </main>
    </>
  );
};

export default Home;
