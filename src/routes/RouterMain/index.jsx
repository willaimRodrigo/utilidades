import { Routes, Route } from "react-router-dom";
import { Home } from "../../components/Home";
import { Calculadora } from "../../components/Calculadora";
import { Imc } from "../../components/Imc";

export const RouterMain = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calculadora" element={<Calculadora /> } />
            <Route path="/imc" element={<Imc /> } />
        </Routes>
    )
}