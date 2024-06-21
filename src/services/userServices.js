import http from './configServices/httpService';
import {base_url} from './configServices/config';

// Start Product
export const getProductsService = () => {
  return http.get(`${base_url}/products`);
};

export const getProductService = id => {
  return http.get(`${base_url}/products/${id}`);
};
// End Product
