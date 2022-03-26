import * as React from 'react';
import clsx from 'clsx';
import { CatalogIcon, SearchIcon } from '../../../public/icons';

import styles from './menu.module.scss';

const Menu: React.FC<{}> = ({ }) => {

    const openCatalog = () => {
        console.log("catalog");
    }

    const login = () => {
        console.log("login");
    }

    const register = () => {
        console.log("register");
    }

    const renderUserSection = () => {
        const user = { cart: [{ id: '1' }, { id: '2' }], id: '1239', name: "TestUser"};
        if (!user) {
            return (
                <div className={styles.AuthorizationContainer}>
                    <div className={clsx(styles.Login, styles.Button)} onClick={login}>Login</div>
                    <div className={styles.Button} onClick={register}>Register</div>
                </div>
            )
        }
        return (
            <div className={styles.UserInfo}>
                <div className={styles.Cart}>
                    Cart: {user.cart.length}
                </div>
                <div className={styles.UserName}>
                    {user.name}
                </div>
            </div>
        )
    }

    return (
        <div className={styles.Container}>
            <div className={styles.Catalog} onClick={openCatalog}>
                <CatalogIcon className={styles.Icon} />
                Catalog
            </div>
            <div className={styles.Search}>
                <input className={styles.Input} />
                <div className={styles.SearchButton}>
                    <SearchIcon className={styles.Icon} />
                </div>
            </div>
            <div className={styles.User}>
                {renderUserSection()}
            </div>
        </div>
    )
}

export default Menu;