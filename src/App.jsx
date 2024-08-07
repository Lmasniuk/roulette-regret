import { useState } from "react";

import "./App.scss";
import Home from "./pages/Home";
import BettingStrategy from "./pages/BettingStrategy/BettingStrategy";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    const [bettingConfig, setBettingConfig] = useState([
        1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384,
    ]);

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<Home bettingConfig={bettingConfig} />}
                />
                <Route
                    path="strategy"
                    element={
                        <BettingStrategy
                            bettingConfig={bettingConfig}
                            setBettingConfig={setBettingConfig}
                        />
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
