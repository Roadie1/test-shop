import * as React from 'react';
import styles from './header.module.scss';

const Header: React.FC<{}> = ({}) => {
    return (
        <div className={styles.Container}>
            <div className={styles.Title}>TEST SHOP</div>
        </div>
    );
}

export default Header;