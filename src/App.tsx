import Counter from "./Counter/Counter";
import CounterHOC from "./CounterHOC/CounterHOC";

const PinkCounter = CounterHOC(<Counter />, "pink");
const YellowCounter = CounterHOC(<Counter />, "yellow");

function App() {
  return (
    <>
      <PinkCounter />
      <YellowCounter />
    </>
  );
}

export default App;
