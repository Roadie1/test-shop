import React, { useState } from 'react';

import styles from './item-list.module.scss';
import { Item } from './item.model';

const ItemList: React.FC<{ items: Item[] }> = ({ items }) => {
    const [sortValue, setSortValue] = useState('A-z');
    const [showSortOptions, setShowSortOptions] = useState(false);

    const getSorting = () => {
        return (
            <div className={styles.SortValue}>
                <div onClick={() => setShowSortOptions(true)}>{sortValue}</div>
                {showSortOptions && (
                    <div className={styles.SortOptions} onMouseLeave={() => setShowSortOptions(false)}>
                        {renderSortOptions()}
                    </div>
                )}
            </div>
        )
    }

    const sortItems = (option: { name: string, sortFunction: (a: Item, b: Item) => number }) => {
        setShowSortOptions(false);
        setSortValue(option.name);
        items.sort(option.sortFunction);
    }

    const renderSortOptions = () => {
        const sortOptions = [
            { name: 'A-z', sortFunction: (a: Item, b: Item) => { return a.name < b.name ? -1 : 0 } },
            { name: 'Z-a', sortFunction: (a: Item, b: Item) => { return a.name > b.name ? -1 : 0 } },
            { name: 'Price ascending', sortFunction: (a: Item, b: Item) => { return a.price > b.price ? -1 : 0 } },
            { name: 'Price descending', sortFunction: (a: Item, b: Item) => { return a.price < b.price ? -1 : 0 } }
        ];

        return sortOptions.map(option => {
            return (
                <div className={styles.SortOption} key={option.name} onClick={() => sortItems(option)}>
                    {option.name}
                </div>
            );
        });
    }

    const renderItems = () => {
        return items.map(item => {
            return (
                <div className={styles.ItemContainer} key={'item-' + item.id}>
                    <div className={styles.ItemImage} />
                    <div className={styles.Name}>{item.name}</div>
                    <div className={styles.Price}>{item.price}</div>
                </div>
            )
        });
    }

    return (
        <div className={styles.Container}>
            <div className={styles.Sorting}>
                Sort by&nbsp;{getSorting()}
            </div>
            <div className={styles.List}>
                {renderItems()}
            </div>
        </div>
    );
}

export default ItemList;