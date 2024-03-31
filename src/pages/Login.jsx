import React, { useState } from 'react';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const url = 'https://serveless.proximateapps-services.com.mx/proximatetools/dev/webadmin/testproximate/login';
      const payload = {
        user: username,
        password: password
      };
  
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        });
  
        if (response.ok) {
          const data = await response.json();
          const datos = JSON.parse(data.data);
          const token = datos.userToken;
          localStorage.setItem("token",token)
          console.log(token);
          console.log('Inicio de sesión exitoso');
          const toki = localStorage.getItem("token")
          console.log(toki)
        } else {
          console.error('Error al iniciar sesión:', response.status);
        }
      } catch (error) {
        console.error('Error al realizar la solicitud:', error);
      }

    };
    
  
    return (
      <>
      <div class="login-form">
        <form onSubmit={handleSubmit}>
          <div class="content">
            <div class="input-field">
              <input type="text" autocomplete="nope" required placeholder="User" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div class="input-field">
              <input type="password" autocomplete="nope" required placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
          </div>
          <div className='action'>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>

      </>
    );
}

export default Login;