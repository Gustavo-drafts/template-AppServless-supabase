import React from "react"
import styles from './styles.module.css'
import { useField } from 'formik';
import { AppProps } from "next/app";

const Campo = ({label, ...props}: any) => {
    const [field, meta] = useField(props)
  
    return (
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor={props.id}>{label}</label>
        <input 
          {...field}
          {...props}
          className={ meta.error && meta.touched ? styles.isError : styles.input}
        />
        {meta.error && meta.touched ? (<div className={styles.errorMensage}>{meta.error}</div>) : null}
      </div>
    )
  }
  
export default Campo;