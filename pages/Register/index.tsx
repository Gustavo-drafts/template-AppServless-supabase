import React from "react";
import styles from './styles.module.css'
import { NextPage } from "next";
import Campo from "../../src/components/Campo/Campo"
import { Formik } from 'formik';
import * as yup from 'yup'
import Link from 'next/link'
import supabase from '../../pages/api/supabase'

const Register: NextPage = () =>{

    const handleSubmit = async (values: any) => {
        const { email, password } = values
        // alert(JSON.stringify(values))
        const { data, error, status } = await supabase.from('users').insert([{ email }]);

        console.log(status)
    }
    
    const schema = yup.object({
        name: yup.string() 
        .required('O Nome é um campo obrigsatório'),
        email: yup.string()
        .required('O email é um campo obrigsatório')
        .email('Insira um email valido'),
        password: yup.string()
        .matches(/[a-z]/, 'Pelo menos um caractere minúsculo')
        .matches(/[A-Z]/, 'Pelo menos um caractere maiusculo')
        .matches(/[a-zA-Z]+[^a-zA-Z\s]+/, 'Pelo menos 1 número ou caractere especial (@,!,#, etc)')
        .required('O token é um campo obrigatório')
        .min(8, 'O token dever ter no minimo 8 caracteres'),
        passwordConfirmation: yup.string()
        .oneOf([yup.ref('password'), null], 'A senha não coresponde.')
    })

    return (
        <div className={styles.container}>
            <Formik 
                onSubmit={(val) => handleSubmit(val)} 
                validationSchema={schema}
                initialValues={{ name: '', email: '', password:''}}
                >
                {props => (
                <form className={styles.registerForm} onSubmit={props.handleSubmit} noValidate>
                    <h2 className={styles.titleRegister}>Register</h2>
                    <Campo 
                    id="name" 
                    name="name" 
                    type="name" 
                    label={"Nome"}
                    />
                    <Campo 
                    id="email" 
                    name="email" 
                    type="email" 
                    label={"Email"}
                    />
                    <Campo 
                    id="password" 
                    name="password" 
                    type="password" 
                    label={"Senha"}
                    />
                    <Campo 
                    id="passwordConfirmation" 
                    name="passwordConfirmation" 
                    type="password" 
                    label={"Confirme senha"}
                    />
                    <div className={styles.boxSubmit}>
                        <Link  href="/" ><p className={styles.backToLogin}>Login</p></Link >
                        <button className={styles.button} type="submit">Inscrever</button>
                    </div>
                </form>
            )}
            </Formik>
        </div>
    )
}

export default Register;