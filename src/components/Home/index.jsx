import { Link } from "react-router-dom";

import style from "./style.module.scss";

export const Home = () => {
    return (
        <main>
            <nav>
                <ul>
                    <li>
                        <Link to="/"></Link>
                    </li>
                    <li>
                        <Link to="/Calculadora" className={style.link}>Calculadora</Link>
                    </li>
                    <li>
                        <Link to="/Imc" className={style.link}>Imc</Link>
                    </li>
                </ul>
            </nav>
        </main>
    )
}