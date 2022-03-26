import * as React from 'react';
import { CatalogIcon, SearchIcon } from '../../../public/icons';

import styles from './menu.module.scss';

const Menu: React.FC<{}> = ({ }) => {

    const openCatalog = () => {
        console.log("catalog");
    }

    return (
        <div className={styles.Container}>
            <div className={styles.Catalog} onClick={openCatalog}>
                <CatalogIcon className={styles.Icon}/>
                Catalog
            </div>
            <div className={styles.Search}>
                <input className={styles.Input}/>
                <SearchIcon className={styles.Icon}/>
            </div>
        </div>
    )
}

export default Menu;