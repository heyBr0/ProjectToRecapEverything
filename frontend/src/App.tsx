import "./App.css";
import { Routes, Route } from "react-router-dom";
import Calculator from "./components/Calculator";
import UsersPage from "./components/UsersPage";
import Counter from "./features/counter/Counter";
import Home from "./components/Home";
import Header from "./components/Header";
import Reducer from "./components/Reducer";
import { PostsList } from "./features/posts/PostsList";
import { FetchQuery } from "./components/FetchQuery";
import { FetchImages } from "./components/FetchImages";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/reducer" element={<Reducer />} />
        <Route path="/posts" element={<PostsList />} />      
        <Route path="/images" element={<FetchImages />} />
        <Route path="/fetchquery" element={<FetchQuery />} />
      </Routes>
    </div>
  );
}

export default App;
