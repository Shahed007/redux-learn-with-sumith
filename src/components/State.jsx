import { useSelector } from "react-redux";

const State = () => {
  const counters = useSelector((state) => state.counters);

  const totalCount = counters.reduce(
    (prev, current) => prev + current.value,
    0
  );
  return (
    <div className="p-6 text-2xl font-medium text-center shadow-md border">
      <h1>
        Total Count: <span className="font-bold">{totalCount}</span>
      </h1>
    </div>
  );
};

export default State;
