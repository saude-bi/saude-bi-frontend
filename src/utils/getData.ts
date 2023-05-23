import axios from 'axios';

async function getData(url: string) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const token = localStorage.getItem('access_token');

  const options = token
    ? {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    : {};

  try {
    const response = await axios.get(apiUrl + url, options);
    return response.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export default getData;
