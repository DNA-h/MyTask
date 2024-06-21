import {StyleSheet, View} from 'react-native';

import TextC from '../TextC/TextC';

const InfoItem = ({title, children}) => {
  return (
    <View style={styles.item}>
      <TextC
        color="secondary"
        style={{
          width: 105,
        }}>
        {title}
      </TextC>
      <TextC style={styles.description}>{children}</TextC>
    </View>
  );
};

export default InfoItem;

const styles = StyleSheet.create({
  item: {
    fontSize: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
});
