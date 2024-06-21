import _ from 'lodash';
import Octicons from 'react-native-vector-icons/Octicons';
import {useEffect, useState, useContext} from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import Tab from '../../../components/Tabs/Tab/Tab';
import Tabs from '../../../components/Tabs/Tabs';
import HorizontalRule from '../../../components/HorizontalRule/HorizontalRule';
import DotsLoading from '../../../components/DotsLoading/DotsLoading';
import RateStars from '../../../components/RateStars/RateStars';
import TextC from '../../../components/TextC/TextC';
import ButtonC from './../../../components/ButtonC/ButtonC';
import InfoItem from './../../../components/InfoItem/InfoItem';
import {global_color, global_font} from '../../../assets/styles/style';
import {productPublicContext} from '../../../contexts/Public/ProductPublicContext/ProductPublicContext';
import {numberSeparate, share} from '../../../utils';

const ProductPublic = () => {
  const navigation = useNavigation();

  const loading = useSelector(state => state.loading);

  const {product, setProduct, handleGetProduct} =
    useContext(productPublicContext);

  const [activeTab, setActiveTab] = useState('description');

  useEffect(() => {
    return navigation.addListener('focus', () => {
      handleGetProduct();
    });
  }, []);

  useEffect(() => {
    return () => {
      setProduct({});
    };
  }, []);

  return (
    <>
      {loading ? (
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <DotsLoading />
        </View>
      ) : (
        <View
          style={{
            flexDirection: 'column',
            flex: 1,
          }}>
          <ScrollView style={styles.container}>
            <View style={styles.section}>
              {/* Start Operation */}
              <View style={styles.operation}>
                <View>
                  <Octicons
                    name="share-android"
                    onPress={() =>
                      share(`https://www.digikala.com/product/${product.id}`)
                    }
                    size={RFValue(20)}
                    color={global_color.GRAY}
                  />
                </View>
              </View>
              {/* End Operation */}
              {/* Start Photo */}
              <View>
                <Image
                  key={product.image}
                  source={{
                    uri: product.image,
                  }}
                  style={styles.image}
                />
              </View>
              {/* End Photo */}
            </View>

            <View style={styles.section}>
              <TextC bold size={2} style={styles.title}>
                {product?.title}
              </TextC>
              <HorizontalRule />
              <InfoItem title="Category">{product?.category}</InfoItem>
              <InfoItem title="Rate">
                <RateStars stars={~~product?.rating?.rate} /> (
                {product.rating?.count})
              </InfoItem>
            </View>

            <HorizontalRule width={10} />

            {/* Start product details */}
            <View style={styles.section}>
              <Tabs activeKey={activeTab} onSelect={k => setActiveTab(k)}>
                <Tab eventKey="description" title="Description" />
                <Tab eventKey="details" title="Details" />
              </Tabs>
              <ScrollView style={{marginVertical: 10, paddingHorizontal: 10}}>
                {activeTab === 'description' ? (
                  <TextC align="justify" style={{lineHeight: 30}}>
                    {product?.description}
                  </TextC>
                ) : activeTab === 'details' ? (
                  <View style={styles.section}>
                    <InfoItem title="Rate">{product?.rating?.rate}</InfoItem>

                    <InfoItem title="Rate count">
                      {numberSeparate(product?.rating?.count)}
                    </InfoItem>
                  </View>
                ) : null}
              </ScrollView>
            </View>
            {/* End product details */}
          </ScrollView>

          <View style={styles.operationContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={{flex: 1}}>
                <TextC bold size={2.1} align="center">
                  {numberSeparate(product.price)} $
                </TextC>
              </View>
              <View style={{flex: 1}}>
                <ButtonC
                  onPress={() => navigation.goBack()}
                  variant="primary"
                  size="lg">
                  Add to cart
                </ButtonC>
              </View>
            </View>
          </View>
        </View>
      )}
    </>
  );
};

export default ProductPublic;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  operation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
  },
  image: {
    height: 330,
    width: '100%',
    borderRadius: 4,
  },
  fontFamily: {fontFamily: global_font.PRIMARY},
  section: {
    paddingHorizontal: 10,
  },
  title: {
    marginTop: 10,
  },
  operationContainer: {
    backgroundColor: global_color.WHITE,
    padding: 10,
    marginTop: 2,
  },
  price: {
    marginRight: 4,
    fontFamily: global_font.PRIMARY_BOLD,
    fontSize: RFValue(12),
    color: global_color.BLACK,
    textAlign: 'right',
  },
});
