import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Modal, StyleSheet, Text, View} from 'react-native';

import {global_color, global_font} from '../../assets/styles/style';
import TextC from './../TextC/TextC';

const ModalC = ({
  show,
  onHide,
  title,
  isHeader = true,
  children,
  ...otherProps
}) => {
  return (
    <Modal
      visible={show}
      onRequestClose={onHide}
      animationType="slide"
      {...otherProps}>
      {isHeader && (
        <View style={styles.header}>
          {title && (
            <TextC bold size={2}>
              {title}
            </TextC>
          )}
          <FontAwesome5
            name="times"
            onPress={onHide}
            color={global_color.BLACK}
            size={20}
          />
        </View>
      )}
      <View style={styles.container}>{children}</View>
    </Modal>
  );
};

export default ModalC;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginHorizontal: 16,
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomColor: global_color.LIGHT_GRAY,
    borderBottomWidth: 3,
  },
});
