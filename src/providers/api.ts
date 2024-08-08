import wretch from 'wretch';

export const api = wretch(
  import.meta.env.PROD ? 'https://inus.onrender.com' : 'http://localhost:3000',
);
