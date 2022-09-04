import Image from 'next/image'
import styles from './styles.module.css'
import icon from '../../../public/icon.png'
import { FormEvent, useCallback, useState } from 'react'
import supabase from '../../../pages/api/supabase'
import Link from 'next/link'

export function Login() {
  
  
  const [email, setEmail] = useState('')
  const [isSaving, setIsSaving] = useState(false)
  const [password, setPassword] = useState('')

  const signNewData = useCallback(async (e: FormEvent) => {
    e.preventDefault();
    setIsSaving(true)

    const { data, error, status } = await supabase.from('users').insert([{ email }]);

    
    
    if (error) {
      if (status === 409) {
        alert("Email já cadastrado")
        setIsSaving(false)
      } else (email === '')
        alert("Email inválido")
        setIsSaving(false)
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

          <form onSubmit={signNewData}>
          <input type="email"
            placeholder='exemplo@email.com'
            className={styles.emailInput}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <input type="password"
            placeholder='senha'
            className={styles.passwordInput}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <button type='submit' className={styles.signButton} style={{ pointerEvents: isSaving ? 'none' : 'auto' }}>Login</button>
            <Link  href="/Register" ><p className={styles.goToRegister}>Cadastro</p></Link >
          </form>

        <ul>
          <li>{ }</li>
        </ul>
      </div>
    </div>
  )
}