import { BrowserRouter, Routes, Route } from "react-router-dom";
import Coins from "./Routes/Coins";
import Coin from "./Routes/Coin";
import Price from "./Routes/Price";
import Chart from "./Routes/Chart";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Coins/>} />
                <Route path="/:coinId" element={<Coin/>}>
                    <Route path="/:coinId/price" element={<Price/>} />
                    <Route path="/:coinId/chart" element={<Chart/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;