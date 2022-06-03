import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import RequireAuth from "./Pages/Login/RequireAuth";
import Header from "./Shared/Header/Header";

function App() {
    return (
        <div className="">
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/home" element={<Home></Home>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route
                    path="/dashboard"
                    element={
                        <RequireAuth>
                            <Dashboard></Dashboard>
                        </RequireAuth>
                    }
                ></Route>
            </Routes>
        </div>
    );
}

export default App;
