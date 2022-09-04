import React from "react";
import styles from './styles.module.css'
import { NextPage } from "next";

const Dashboard: NextPage = () =>{
    return (
        <div className={styles.container}>
            <h1 className={styles.titleDashboard} >Dashboard</h1>
        </div>
    )
}

export default Dashboard;