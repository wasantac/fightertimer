import React from "react";
import logo from "./assets/GoGo.png";
import logo2 from "./assets/GGyellow.png";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Timer from "./components/Timer";
import Outro from "./components/Outro";
import Shinelogo from "./components/Shinelogo";
function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={<Timer logo={logo} seconds={60 * 5}></Timer>}
                    />

                    <Route
                        path="/outro"
                        element={<Outro logo={logo2}></Outro>}
                    />

                    <Route
                        path="/logo"
                        element={<Shinelogo logo={logo}></Shinelogo>}
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
