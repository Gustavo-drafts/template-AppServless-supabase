import React from "react";
import styles from './styles.module.css'
import { Formik } from "formik";
import * as yup from "yup"
import Campo from "../Campo/Campo";
import Select from 'react-select'

const Ict = ({
    onHandleSubmit,
    statesOptions,
    onNatureValue,
    onEditalValue,
}: any) => {

    const schema = yup.object({
        name: yup.string() 
        .required('O Nome é um campo obrigsatório'),
        email: yup.string()
        .required('O email é um campo obrigsatório')
        .email('Insira um email valido'),
        site: yup.string(),
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
                    id="resp" 
                    name="resp" 
                    type="resp" 
                    label={"Responsável"}
                    />
                </div>
                <div className={styles.actingOptionsBox}>
                    <p>Natureza:</p>
                    <div>
                        <label htmlFor="public">Pública</label>
                        <input id="public" type='radio' name="opcaoNature" onChange={(e) => onNatureValue(e.target.value)} value={'public'}></input>
                        <label htmlFor="private">Privada</label>
                        <input id="private" type='radio' name="opcaoNature" onChange={(e) => onNatureValue(e.target.value)} value={'não'}></input>
                    </div>
                </div>
                <Campo 
                    id="edit" 
                    name="edit" 
                    type="edit" 
                    label={"Já participou de outros editais que não os da Petrobrás? Se sim, qual?"}
                    />
                <Campo 
                    id="hub" 
                    name="hub" 
                    type="hub" 
                    label={"Faz parte de algum hub de inovação? Se sim, qual?"}
                    />
                <button className={styles.button} type="submit">Enviar</button>
            </form>
        )}
        </Formik>
    </div>
    )
}

export default Ict;