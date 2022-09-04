import React from "react";
import styles from './styles.module.css'
import { Formik } from "formik";
import * as yup from "yup"
import Campo from "../Campo/Campo";
import Select from 'react-select'

const Company = ({
    onHandleSubmit,
    resetOptions,
    statesOptions,
    ...props
}: any) => {

    const schema = yup.object({
        name: yup.string() 
        .required('O Nome é um campo obrigsatório'),
        email: yup.string()
        .required('O email é um campo obrigsatório')
        .email('Insira um email valido'),
        site: yup.string(),
        options: yup.string()
        .required('O options é um campo obrigsatório')
    })


    return (
        <div className={styles.container}>
        <Formik 
            onSubmit={(val) => onHandleSubmit(val)} 
            validationSchema={schema}
            initialValues={{ name: '', email: '', password:''}}
            >
            {props => (
            <form className={styles.startupForm} onSubmit={props.handleSubmit} noValidate>
                <div className={styles.boxComunicated}>
                    <Campo 
                    id="name" 
                    name="name" 
                    type="name" 
                    label={"Nome"}
                    style={{marginRight:'1rem'}}
                    />
                    <Campo 
                    id="email" 
                    name="email" 
                    type="email" 
                    label={"Email"}
                    />
                </div>
                <div className={styles.boxComunicated}>
                    <div>
                        <label>Estado</label>
                        <Select 
                        options={statesOptions}
                        />
                    </div>
                    <Campo 
                    id="site" 
                    name="site" 
                    type="site" 
                    label={"Site"}
                    />
                </div>
                <div className={styles.actingOptionsBox}>
                    <label>Receita operacional bruta no exercício:</label>
                    <Select 
                    options={resetOptions}
                    />
                </div>
                <button className={styles.button} type="submit">Enviar</button>
            </form>
        )}
        </Formik>
    </div>
    )
}

export default Company;