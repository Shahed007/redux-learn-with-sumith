import { useDispatch } from "react-redux";
import Button from "./Button";
import Count from "./Count";
import { decrement, increment } from "../features/counters/counters";

const Counter = ({ id, count }) => {
  const dispatch = useDispatch();
  const handleIncrement = (counterId) => {
    dispatch(increment(counterId));
  };
  const handleDecrement = (counterId) => {
    dispatch(decrement(counterId));
  };
  return (
    <div className="p-6 bg-white shadow-md border space-y-7">
      <Count count={count} />
      <div className="flex justify-center items-center gap-6">
        <Button handler={() => handleIncrement(id)}>Increment</Button>
        <Button handler={() => handleDecrement(id)} type="red">
          Decrement
        </Button>
      </div>
    </div>
  );
};

export default Counter;
