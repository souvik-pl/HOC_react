import { ReactElement } from "react";
import styles from "./CounterHOC.module.css";

function CounterHOC(Component: ReactElement, bgColor: string) {
    return function () {
        return (
            <div className={styles.container} style={{ backgroundColor: bgColor }}>
                {Component}
            </div>
        );
    };
}

export default CounterHOC;
