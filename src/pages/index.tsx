import * as React from "react";
import { Header, Menu } from "../components";
import styles from './front-page.module.scss';

const FrontPage: React.FC<{}> = ({}) => {
    return (
        <div className={styles.FrontPage}>
            <Header />
            <Menu />
        </div>
    );
}

export default FrontPage;