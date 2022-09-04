import React from "react";
import styles from './styles.module.css'
import Select from 'react-select';

const Header = ({
    options, 
    onHandleChange, 
    selectFundation
}: any) => {


    return (
        <div className={styles.headerBox}>
            <label className={styles.labelFoundation}>Sou:</label>
            <Select
            className={styles.basicSingle}
            onChange={onHandleChange}
            defaultValue={selectFundation}
            options={options}
            />
        </div>
    )
}

export default Header;