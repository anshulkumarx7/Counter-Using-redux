import "./App.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch({ type: "INC" });
  };
  const decrement = () => {
    dispatch({ type: "DEC" });
  };
  const reset = () => {
    dispatch({ type: "RESET" });
  };
  const addBy10 = () => {
    dispatch({ type: "ADD" ,payload:10});
  };
  return (
    <div className="container">
      <div className="counter">
        <h1>Counter</h1>
        <h2>{counter}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        <button onClick={addBy10}>Add By 10</button>
      </div>
    </div>
  );
}

export default App;
