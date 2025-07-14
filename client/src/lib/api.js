import axios from 'axios';
import { useAuth } from '@clerk/clerk-react';

export const useApi = () => {
  const { getToken } = useAuth();

  const fetchWithAuth = async (url, options = {}) => {
    const token = await getToken();

    try {
      const response = await axios({
        url: `http://localhost:5000/api${url}`,
        method: options.method || 'GET',
        data: options.body ? JSON.parse(options.body) : undefined,
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          ...(options.headers || {}),
        },
      });

      console.log('✅ Axios response:', response.status);
      return response;
    } catch (err) {
      console.error('❌ Axios error:', err.response?.data || err.message);
      throw err;
    }
  };

  return { fetchWithAuth };
};
