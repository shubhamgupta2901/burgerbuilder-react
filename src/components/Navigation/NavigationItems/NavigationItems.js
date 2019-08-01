import React from 'react';
import styles from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
import * as Utils from '../../../utils/Utils';

const navigationItems =(props) => (
    <ul className={styles.NavigationItems}>
        <NavigationItem key={Utils.generateUniqueId()} link="/" active> Burger Builder </NavigationItem>
        <NavigationItem key={Utils.generateUniqueId()} link="/">Checkout</NavigationItem>
    </ul>
);


export default navigationItems;
