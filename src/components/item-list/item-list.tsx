import React, { useState } from 'react';

import styles from './item-list.module.scss';
import { Item } from './item.model';

const ItemList: React.FC<{ items: Item[]}> = ({ items }) => {
    const [sortValue, setSortValue] = useState('A-z');

    const getSorting = () => {
        return (
            <div className={styles.SortValue}>
                {sortValue}
            </div>
        )
    }

    const renderItems = () => {
        return items.map(item => {
            return(
                <div className={styles.ItemContainer} id={'item-' + item.id}>
                    <div className={styles.ItemImage} />
                    <div className={styles.Price}>{item.price}</div>
                    <div className={styles.Name}>{item.name}</div>
                </div>
            )
        });
    }

    return (
        <div className={styles.Container}>
            <div className={styles.Sorting}>
                Sort by {getSorting()}
            </div>
            <div className={styles.List}>
                {renderItems()}
            </div>
        </div>
    );
}

export default ItemList;