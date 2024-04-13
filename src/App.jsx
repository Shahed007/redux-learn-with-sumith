import Counter from "./components/Counter";
import Decrement from "./components/Decrement";
import Increment from "./components/Increment";

function App() {
  return (
    <>
      <div className="flex flex-col gap-10 max-w-sm mx-auto py-16">
        <div className="bg-white shadow-md border p-10 rounded-md flex justify-center flex-col items-center gap-10">
          <Counter />
          <div className="flex gap-6 justify-center items-center">
            <Increment />
            <Decrement />
          </div>
        </div>
        <div className="bg-white shadow-md border p-10 rounded-md flex justify-center flex-col items-center gap-10">
          <Counter />
          <div className="flex gap-6 justify-center items-center">
            <Increment />
            <Decrement />
          </div>
        </div>
        <div className="bg-white shadow-md border p-5 rounded-md flex justify-center flex-col items-center gap-10">
          <p className="text-xl">Total Count: <span className="font-bold">0</span></p>
        </div>
      </div>
    </>
  );
}

export default App;
