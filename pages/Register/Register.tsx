import React from "react";
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import Campo from "../../src/components/Campo/Campo"
import { Formik } from 'formik';
import * as yup from 'yup'
import "./Register.css"

export default function Register(){

    const handleSubmit = (values: any) => {
        alert(JSON.stringify(values))
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
        <div className="container">
            <h1 className="title-register">Game Colaborator</h1>
            <Formik 
                onSubmit={(val) => handleSubmit(val)} 
                validationSchema={schema}
                initialValues={{ name: '', email: '', password:''}}
                >
                {props => (
                <form className="register-form" onSubmit={props.handleSubmit} noValidate>
                    <h2 className="title-register">Register</h2>
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
                    <div className="box-submit">
                        <a href="/login" className="back-login-p"><BsFillArrowLeftCircleFill style={{marginRight: '1rem'}}/><p>Login</p></a>
                        <button type="submit">Inscrever</button>
                    </div>
                </form>
            )}
            </Formik>
        </div>
    )
}