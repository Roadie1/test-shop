import React, { useState } from "react";
import { Header, Menu, ItemList } from "../components";
import { Item } from "../components/item-list/item.model";
import styles from './front-page.module.scss';

const FrontPage: React.FC<{ items: Item[]}> = ({ items }) => {
    // const [items, setItems] = useState<Item[]>([{ id: '1', name: '', price: '0', image: '', category: '' }]);

    return (
        <div className={styles.FrontPage}>
            <Header />
            <Menu />
            <ItemList items={items} />
        </div>
    );
}

export async function getStaticProps() {
    const items = [
        { id: '1', name: 'TestItem1', price: '$1000', image: '', category: 'Books' },
        { id: '2', name: 'TestItem2', price: '$2000', image: '', category: 'Apparel' },
        { id: '3', name: 'TestItem3', price: '$3000', image: '', category: 'Games' },
        { id: '4', name: 'TestItem4', price: '$100', image: '', category: 'Cosmetics' },
        { id: '5', name: 'TestItem5', price: '$1200', image: '', category: 'Games' },
        { id: '6', name: 'TestItem6', price: '$1200', image: '', category: 'Games' },
        { id: '7', name: 'TestItem7', price: '$1200', image: '', category: 'Games' }
    ];
    return {
        props: {
            items
        }
    }
}

export default FrontPage;