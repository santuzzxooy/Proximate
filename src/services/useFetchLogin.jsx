import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function useFetchLogin() {
  const [accessToken, setAccessToken] = useState('');
  const history = useHistory();

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const response = await axios.post('https://serveless.proximateapps-services.com.mx/proximatetools/dev/webadmin/testproximate/login', {
          user: '1075258635',
          password: 'testProximate'
        });
        const token = response.data.access_token;
        setAccessToken(token);
        // se redirige
        history.push('/services');
      } catch (error) {
        console.error('Error al obtener el token:', error);
      }
    };

    fetchToken();
  }, [history]);

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

export default useFetchLogin;