import React, { useState } from "react";
import { Header, Menu, ItemList } from "../components";
import { Item } from "../components/item-list/item.model";
import styles from './front-page.module.scss';

const FrontPage: React.FC<{}> = ({ }) => {
    
    const [items, setItems] = useState<Item[]>([{ id: '1', name: '', price: '0', image: '', category: '' }]);

    return (
        <div className={styles.FrontPage}>
            <Header />
            <Menu />
            <ItemList items={items} />
        </div>
    );
}

export default FrontPage;