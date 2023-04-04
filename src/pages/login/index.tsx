import {useState} from 'react'


export const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    
    const handleLogin = () =>{ 
        

    }
    return(
        <div>
            <h2>Página fechada</h2>

            <input 
            type="text" 
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder='Digite seu e-mail'/>

            <input 
            type="text" 
            value={password}
            onChange={e=> setPassword(e.target.value)}
            placeholder='Digite sua senha'/>

            <button onClick={handleLogin}>Fazer Login</button>
        </div>
    )
}