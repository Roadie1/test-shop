import React, { useState, useRef } from 'react';
import clsx from 'clsx';
import { CatalogIcon, SearchIcon } from '../../../public/icons';

import { MenuProps } from './menu.props';
import styles from './menu.module.scss';

const Menu: React.FC<MenuProps> = ({ itemTypes, showCategory, showSearch }) => {
    const [showCatalog, setShowCatalog] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const openCatalog = () => {
        setShowCatalog(true);
    };

    const login = () => {
        console.log("login");
    };

    const register = () => {
        console.log("register");
    };

    const onCatalogClick = (type: string) => {
        setShowCatalog(false);
        showCategory(type)
    };

    const onSearch = () => {
        showSearch(inputRef.current.value);
    };

    const onEnter = (event) => {
        if (event.key === "Enter") {
            showSearch(inputRef.current.value);
        }
    }

    const renderCatalog = () => {
        return itemTypes.map(type => {
            return (
                <div className={styles.CatalogOption} key={`type-${type}`} onClick={() => onCatalogClick(type)}>{type}</div>
            )
        });
    };

    const renderUserSection = () => {
        const user = { cart: [{ id: '1' }, { id: '2' }], id: '1239', name: "TestUser" };
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
    };

    return (
        <div className={styles.Container}>
            <div className={styles.CatalogContainer}>
                <div className={styles.CatalogButton} onClick={openCatalog}>
                    <CatalogIcon className={styles.Icon} />
                    Catalog
                </div>
                {showCatalog && (
                    <div className={styles.Catalog} onMouseLeave={() => setShowCatalog(false)}>
                        {renderCatalog()}
                    </div>
                )}
            </div>
            <div className={styles.Search}>
                <input className={styles.Input} ref={inputRef}onKeyPress={onEnter}/>
                <div className={styles.SearchButton}onClick={onSearch}>
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