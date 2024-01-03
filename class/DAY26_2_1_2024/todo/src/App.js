import { Route, Routes } from "react-router-dom";
import './App.css';
import { Login } from "./Components/Login";
import { Register } from "./Components/Register";
import { Main } from "./Components/Main";
import { Passwordrec } from "./Components/Passwordrec";

function App() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>To Do List</h1>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Main" element={<Main />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Passwordrec" element={<Passwordrec />} />
      </Routes>

    </>
  );
}

export default App;
