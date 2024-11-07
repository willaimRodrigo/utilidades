import { RouterMain } from "../routes/RouterMain";
import style from "./style.module.scss";

export const Pages = () => {
    return (
        <section className={style.body}> 
           <RouterMain /> 
        </section>
  
    )
}