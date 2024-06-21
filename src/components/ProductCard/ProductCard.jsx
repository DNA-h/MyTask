import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import RateStars from './../RateStars/RateStars';
import {global_color, global_font} from '../../assets/styles/style';
import {numberSeparate} from './../../utils/index';
import TextC from '../TextC/TextC';

const ProductCard = ({product}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => navigation.navigate('Product', {productId: product.id})}>
        <View style={styles.innerContainer}>
          <View style={styles.textContainer}>
            <TextC bold numberOfLines={2}>
              {product.title}
            </TextC>

            <TextC color="mute" numberOfLines={2}>
              {product.description}
            </TextC>
            <TextC>
              <RateStars stars={~~product?.rating?.rate} /> (
              {product.rating?.count})
            </TextC>
          </View>
          <View>
            <Image source={{uri: product?.image}} style={styles.image} />
          </View>
        </View>

        <View style={styles.priceContainer}>
          <View style={styles.priceInnerContainer}>
            <TextC color="secondary">
              Price:
              <TextC bold color="primary">
                {numberSeparate(product.price)} $
              </TextC>
            </TextC>
            <FontAwesome
              name="angle-right"
              size={20}
              color={global_color.PRIMARY}
            />
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 8,
    borderBottomColor: global_color.BORDER,
    borderBottomWidth: 1,
    backgroundColor: global_color.WHITE,
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 4,
  },
  textContainer: {flex: 1, paddingLeft: 4, justifyContent: 'space-between'},
  priceContainer: {
    backgroundColor: global_color.PRIMARY_LIGHT,
    borderRadius: 4,
    padding: 4,
    marginTop: 8,
  },
  priceInnerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
