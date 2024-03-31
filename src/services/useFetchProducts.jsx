import React, { useState, useEffect } from 'react';
import axios from 'axios';

function useFetchProducts() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchDataFromSecondAPI = async () => {
      try {
        const response = await axios.get('https://serveless.proximateapps-services.com.mx/proximatetools/dev/webadmin/testproximate/getproducts', {
          headers: {
            Authorization: `Bearer ${userToken}`
          }
        });
        setData(response.data);
      } catch (error) {
        console.error('Error al obtener los datos de la segunda API:', error);
      }
    };

    fetchDataFromSecondAPI();
  }, []);

  return (
    <div>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default useFetchProducts;