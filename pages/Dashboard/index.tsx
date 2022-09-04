import React, { useState } from "react";
import styles from './styles.module.css'
import { NextPage } from "next";
import Header from "../../src/components/Header";
import Startup from "../../src/components/Startup";
import Ict from "../../src/components/Ict";
import Iesp from "../../src/components/Iesp";
import Company from "../../src/components/Company";


const Dashboard: NextPage = () =>{
    const [selectFundation, setSelectFundation] = useState({value: '', label: ''})

    const options = [
        {value: 'startup', label:'Startup'},
        {value: 'company', label:'Empresa'},
        {value: 'IESP', label:'Instituição de Ensino Superior e/ou Pesquisa'},
        {value: 'ICT', label:'Instituição Científica, Tecnológica e de Inovação (ICT)'}
    ]

    const states = [
        {value: 'RJ', label:'Rio de Janeiro'},
        {value: 'SP', label:'São Paulo'},
        {value: 'MG', label:'Minas Gerais'},
        {value: 'ES', label:'Espírito Santo'}
    ]

    const acting = [
        {value: 'oilGas', label:'Óleo e gás'},
        {value: 'kid', label:'Setor infantil'},
        {value: 'energy', label:'Energia'},
        {value: 'metaverse', label:'Metaverso'}
    ]

    const resetOptions = [
        {value: '1', label:'Até R$4.800.000,00'},
        {value: '2', label: 'De R$4.800.000,01 a R$16.000.000,00' },
        {value: '3', label: 'De R$16.000.000,01 a R$90.000.000,00'},
        {value: '4', label: 'De R$90.000.000,01 a R$300.000.000,00'}, 
        {value: '5', label: 'Acima de R$300.000.000,01'}
    ]

    const handleSubmit = () => {

    }

    const handleFrame = () => {
        if(selectFundation?.value === 'startup'){
            return <Startup statesOptions={states} actingOptions={acting}/>
        }
        else if(selectFundation?.value === 'company'){
            return <Company onHandleSubmit={handleSubmit } resetOptions={resetOptions} statesOptions={states}/>
        }
        else if(selectFundation?.value === 'IESP'){
            return <Iesp/>
        }
        else if(selectFundation?.value === 'ICT'){
            return <Ict/>
        }
        else {
            return (<div style={{fontSize: '2rem', textAlign: 'center', marginTop: '2rem'}}>Selecione uma opção</div>)
        }
    }

    return (
        <div className={styles.container}>
            <Header options={options} onHandleChange={setSelectFundation} selectFundation={selectFundation}/>
            {handleFrame()}
        </div>
    )
}

export default Dashboard;