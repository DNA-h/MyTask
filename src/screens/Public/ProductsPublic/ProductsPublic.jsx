import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useState} from 'react';
import _, {isEmpty} from 'lodash';
import {useContext, useEffect} from 'react';
import {StyleSheet, View, ScrollView, RefreshControl} from 'react-native';

import ProductCard from '../../../components/ProductCard/ProductCard';
import HorizontalRule from '../../../components/HorizontalRule/HorizontalRule';
import EmptyData from './../../../components/EmptyData/EmptyData';
import Input from './../../../components/Input/Input';
import {productPublicContext} from '../../../contexts/Public/ProductPublicContext/ProductPublicContext';
import {global_color} from '../../../assets/styles/style';

const ProductsPublic = () => {
  const {products, setProducts, handleGetProducts} =
    useContext(productPublicContext);

  const [search, setSearch] = useState('');

  useEffect(() => {
    handleGetProducts();
  }, []);

  useEffect(() => {
    return () => {
      setProducts([]);
    };
  }, []);

  const filteredProducts = isEmpty(products)
    ? []
    : products?.filter(s =>
        s?.title?.toLowerCase()?.match(search?.toLowerCase()),
      );

  return (
    <View style={styles.container}>
      <View style={navbarStyles.container}>
        <View style={navbarStyles.innerContainer}>
          <View style={navbarStyles.buttonContainer}>
            <FontAwesome name="search" color={global_color.PRIMARY} size={20} />
          </View>
          <View style={navbarStyles.inputContainer}>
            <Input
              value={search}
              onChangeText={setSearch}
              placeholder="Search"
              inputStyle={{borderWidth: 0}}
              placeholderTextColor={global_color.GRAY}
            />
          </View>
        </View>
      </View>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={() => {
              handleGetProducts();
            }}
          />
        }>
        <HorizontalRule width={5} />
        {isEmpty(filteredProducts) ? (
          <View style={{paddingHorizontal: 10}}>
            <EmptyData title="There are currently no products" />
          </View>
        ) : (
          filteredProducts?.map(item => (
            <ProductCard key={item.id} product={item} />
          ))
        )}
      </ScrollView>
    </View>
  );
};

export default ProductsPublic;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 8,
    paddingTop: 5,
  },
});

const navbarStyles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomColor: global_color.BORDER,
    borderBottomWidth: 1,
    backgroundColor: global_color.WHITE,
    marginTop: 25,
  },
  innerContainer: {
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: global_color.LIGHT,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: global_color.LIGHT,
  },
  inputContainer: {
    flex: 1,
  },
  buttonContainer: {
    marginHorizontal: 10,
  },
});
