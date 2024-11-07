import { useState } from "react";
import { Link } from "react-router-dom";

import style from "./style.module.scss";

export const Imc = () => {
    const [peso, setPeso] = useState();
    const [altura, setAltura] = useState();
    const [imc, setImc] = useState();
    const [message, setMessage] = useState();

    const valuePeso = (e) => {
        setPeso(e.target.value);
    }

    const valueAltura = (e) => {
        setAltura(e.target.value);
    }

    const CalcularImc = () => {
        if (peso && altura) {

            const alturaEmMetros = altura / 100;
            const imcResult = (Number(peso) / (Number(alturaEmMetros) * Number(alturaEmMetros)));
            setImc(imcResult.toFixed(2));
            resultMensage(imcResult); 
        }
    }

    const resultMensage = (imc) => {
        let category;

        switch (true) {
            case imc < 18.5:
                category = "Abaixo do peso";
                break;
            case imc >= 18.5 && imc < 24.9:
                category = "Peso normal";
                break;
            case imc >= 25 && imc < 29.9:
                category = "Sobrepeso";
                break;
            case imc >= 30 && imc < 34.9:
                category = "Obesidade grau I";
                break;
            case imc >= 35 && imc < 39.9:
                category = "Obesidade grau II";
                break;
            case imc >= 40:
                category = "Obesidade grau III";
                break;
            default:
                category = "IMC inválido";
        }

        setMessage(category);
    }

    return (
        <section className={style.section}>
            
            <div className={style.divtitle}>
                <h1>Calcule o seu Imc!</h1>
                <Link to="/" className={style.link}>X</Link>
            </div>
            
            <input type="number" value={peso || ''} onChange={valuePeso} placeholder="Digite seu peso!" />
            <input type="number" value={altura || ''} onChange={valueAltura} placeholder="Digite sua altura!"/>
            <div className={style.result}>
                <button onClick={CalcularImc} className={style.calc}>Calcular</button>
                <h3 className={style.valor}>{imc}</h3>
                <p>{message}</p>
            </div>
            
        </section>
    )
}