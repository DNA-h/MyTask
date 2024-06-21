import {createContext, useState} from 'react';
import {useDispatch} from 'react-redux';

import {
  setLoadingTrueAction,
  setLoadingFalseAction,
} from './../../../redux/actions/loadingActions/loadingActions';
import {
  getProductService,
  getProductsService,
} from '../../../services/userServices';
import {toastErrorMessage} from '../../../utils/toastMessage/toastMessage';

export const productPublicContext = createContext({
  products: [],
  setProducts: () => {},
  product: {},
  setProduct: () => {},
  handleGetProducts: () => {},
  handleGetProduct: () => {},
});

const ProductPublicContext = ({route, children}) => {
  // Redux Dispatch
  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});

  const {productId} = route.params;

  // Handle Get Products
  const handleGetProducts = async () => {
    try {
      dispatch(setLoadingTrueAction());
      const {status, data} = await getProductsService();
      if (status === 200) {
        setProducts(data);
      }
    } catch ({response}) {
      if (response?.status) {
        toastErrorMessage(`Error: ${response?.status}`);
      }
    } finally {
      dispatch(setLoadingFalseAction());
    }
  };

  // Handle Get Product
  const handleGetProduct = async () => {
    try {
      dispatch(setLoadingTrueAction());
      const {status, data} = await getProductService(productId);
      if (status === 200) {
        setProduct(data);
      }
    } catch ({response}) {
      if (response?.status) {
        toastErrorMessage(`Error: ${response?.status}`);
      }
    } finally {
      dispatch(setLoadingFalseAction());
    }
  };

  return (
    <productPublicContext.Provider
      value={{
        products,
        setProducts,
        product,
        setProduct,
        handleGetProducts,
        handleGetProduct,
      }}>
      {children}
    </productPublicContext.Provider>
  );
};

export default ProductPublicContext;
