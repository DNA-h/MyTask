import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

import DotsLoading from '../DotsLoading/DotsLoading';
import TextC from './../TextC/TextC';

const EmptyData = ({title = 'No items found.', isCenter, style}) => {
  const loading = useSelector(state => state.loading);

  let content = null;
  if (loading)
    content = (
      <View style={styles.centerContainer}>
        <DotsLoading />
      </View>
    );
  else
    content = (
      <View
        style={[
          isCenter ? styles.centerContainer : styles.textContainer,
          style,
        ]}>
        <TextC color="gray" align="center">
          {title}
        </TextC>
      </View>
    );

  return content;
};

export default EmptyData;

const styles = StyleSheet.create({
  textContainer: {
    padding: 10,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
