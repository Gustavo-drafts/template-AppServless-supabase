import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import icon from '../public/icon.png'
import { FormEvent, useCallback, useState } from 'react'
import supabase from './api/supabase'

const Home: NextPage = () => {

  const [email, setEmail] = useState('')
  const [isSaving, setIsSaving] = useState(false)

  const signNewsletter = useCallback(async (e: FormEvent) => {
    e.preventDefault();
    setIsSaving(true)

    const { data, error, status } = await supabase.from('users').insert([{ email }]);

    if (error) {
      if (status === 409) {
        alert("Email já cadastrado")
        setIsSaving(false)
      } else {
        alert("Email inválido")
        return;
      }
    }

    alert("Email salvo com sucesso!")
    setIsSaving(false)
    setEmail('')
  }, [email])

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Image
          alt='logomarca'
          src={icon}
          width={64}
          height={50}
        />

        <p className={styles.title}>
          Insira o email a ser registrado da base de dados!
        </p>

        <form onSubmit={signNewsletter}>
          <input type="email"
            placeholder='exemplo@email.com'
            className={styles.emailInput}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type='submit' className={styles.signButton} style={{ pointerEvents: isSaving ? 'none' : 'auto' }}>Inscrever</button>
        </form>
      </div>
    </div>
  )
}

export default Home
