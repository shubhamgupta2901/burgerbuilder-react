import React from 'react';
import styles from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
import * as Utils from '../../../utils/Utils';

const navigationItems =(props) => (
    <ul className={styles.NavigationItems}>
        <NavigationItem key={Utils.generateUniqueId()} link="/"> Burger Builder </NavigationItem>
        <NavigationItem key={Utils.generateUniqueId()} link="/orders">Orders</NavigationItem>
    </ul>
);


export default navigationItems;
