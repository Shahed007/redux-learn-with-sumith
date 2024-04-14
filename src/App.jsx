import { useSelector } from "react-redux";
import Counter from "./components/Counter";
import State from "./components/State";

function App() {
  const counters = useSelector((state) => state.counters);

  return (
    <div className="max-w-sm mx-auto py-16 space-y-10">
      {counters.map((item) => (
        <Counter id={item.id} count={item.value} key={item.id} />
      ))}
      <State />
    </div>
  );
}

export default App;
