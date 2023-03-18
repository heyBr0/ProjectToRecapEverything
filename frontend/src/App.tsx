import "./App.css";
import { Routes, Route } from "react-router-dom";
import Calculator from "./components/Calculator";
import UsersPage from "./components/UsersPage";
import Counter from "./features/counter/Counter";
import Home from "./components/Home";
import Header from "./components/Header";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </div>
  );
}

export default App;
