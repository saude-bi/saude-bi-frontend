import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000', // URL base da sua API
    headers: {
      // Cabeçalhos padrão para todas as requisições
      'Content-Type': 'application/json',
    },
  });
  
  export default axiosInstance;
