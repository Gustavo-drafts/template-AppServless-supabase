import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs"
import Campo from "../../src/components/Campo/Campo"
import { Formik } from 'formik';
import * as yup from 'yup'
import "./Login.css"

export default function Login(){

    const handleSubmit = (values: any) => {
        alert(JSON.stringify(values))
    }
    
    const schema = yup.object({
        email: yup.string()
        .required('O email é um campo obrigsatório')
        .email('Insira um email valido'),
        password: yup.string()
        .matches(/[a-z]/, 'Pelo menos um caractere minúsculo')
        .matches(/[A-Z]/, 'Pelo menos um caractere maiusculo')
        .matches(/[a-zA-Z]+[^a-zA-Z\s]+/, 'Pelo menos 1 número ou caractere especial (@,!,#, etc)')
        .required('O token é um campo obrigatório')
        .min(8, 'O token dever ter no minimo 8 caracteres'),
    })

    return (
        <div className="container">
            <h1 className="title-register">Game Colaborator</h1>
            <Formik 
                onSubmit={(val) => handleSubmit(val)} 
                validationSchema={schema}
                initialValues={{ email: '', password:''}}
                >
                {props => (
                <form className="login-form" onSubmit={props.handleSubmit} noValidate>
                    <h2 className="title-register">Login</h2>
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
                    <div className="box-submit">
                        <a href="/register" className="back-login-p"><p>Cadastro</p><BsFillArrowRightCircleFill style={{marginLeft: '1rem'}}/></a>
                        <button type="submit">Login</button>
                    </div>
                </form>
            )}
            </Formik>
        </div>
    )
}