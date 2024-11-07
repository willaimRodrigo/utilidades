import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import style from "./style.module.scss";

export const Calculadora = () => {
    const [firstValue, setFirstValue] = useState();
    const [secondValue, setSecondValue] = useState();
    const [total, setTotal] = useState();

    const valueFisrtInput = (e) => {
        setFirstValue(e.target.value);
    }

    const valueSecondInput = (e) => {
        setSecondValue(e.target.value);
    }

    const sum = () => {
        setTotal(Number(firstValue) + Number(secondValue));
    }

    const sub = () => {
        setTotal(Number(firstValue) - Number(secondValue));
    }

    const multi = () => {
        setTotal(firstValue * Number(secondValue));
    }

    const divi = () => {
        setTotal(firstValue / Number(secondValue));
    }

    const clear = () => {
        setFirstValue('');
        setSecondValue('');
        setTotal('');
    }

    useEffect(() => {
        if (total === 13) {
            console.log("oi")
        }
    }, [total]);

    return (
        <section className={style.section}>
            <div className={style.divtitle}>
                <h1>Calculadora</h1>
                <Link to="/" className={style.link}>X</Link>
            </div>
            <input type="number" value={firstValue || ''} onChange={valueFisrtInput} placeholder='Digite um valor!'/>
            <input type="number" value={secondValue || ''} onChange={valueSecondInput} placeholder='Digite um valor!'/>

            <div className={style.button}>
                <button onClick={sum}>+</button>
                <button onClick={sub}>-</button>
                <button onClick={multi}>X</button>
                <button onClick={divi}>/</button>
                <button className={style.clear} onClick={clear}>C</button>
            </div>
            <h2 className={style.result}>{total}</h2>
        </section>
    )
}