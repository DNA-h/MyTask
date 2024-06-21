export const hostname =
  process.env.NODE_ENV === 'development'
    ? 'https://fakestoreapi.com' // development "hostname"
    : 'https://fakestoreapi.com'; // production "hostname"

export const base_url = `${hostname}`;
