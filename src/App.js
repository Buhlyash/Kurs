// import logo from './logo.svg';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import Account from "./components/Account/Account";
import OrderList from "./components/OrderList/OrderList";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./redux/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="App">
      {/* <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div> */}
      <Header text="aboba" />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/my" element={<Account />} />
        <Route path="/my/orderlist" element={<OrderList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
