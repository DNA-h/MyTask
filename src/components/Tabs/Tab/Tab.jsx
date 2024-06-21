import {Pressable, StyleSheet} from 'react-native';

import TextC from './../../TextC/TextC';
import {global_color} from '../../../assets/styles/style';

const Tab = ({
  title,
  eventKey,
  activeKey,
  onSelect,
  isPaper = false,
  isWidthAuto = false,
  isAlert = false,
  disabled = false,
  otherStyles = {},
}) => {
  const isActive = eventKey === activeKey;

  return (
    <Pressable
      onPress={() => !disabled && onSelect(eventKey)}
      style={[
        styles.container,
        isPaper && styles.paperContainer,
        isWidthAuto && styles.widthAuto,
        isActive && (isPaper ? styles.paperTabActive : styles.tabActive),
        otherStyles,
      ]}>
      <TextC
        color="gray"
        align="center"
        size={2}
        style={[
          isPaper && styles.paperTitle,
          isActive && !isPaper && styles.textActive,
          disabled && styles.disabledTitle,
        ]}>
        {title}
      </TextC>
    </Pressable>
  );
};

export default Tab;

const styles = StyleSheet.create({
  container: {flex: 1, paddingVertical: 5, marginHorizontal: 2},
  paperContainer: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: global_color.LIGHT_GRAY,
    borderColor: global_color.LIGHT_GRAY,
    borderWidth: 2,
  },
  paperTitle: {
    color: global_color.PRIMARY,
  },
  disabledTitle: {
    color: global_color.LIGHT,
  },
  widthAuto: {
    flex: 0,
    paddingHorizontal: 20,
  },
  tabActive: {
    borderBottomColor: global_color.PRIMARY,
    borderBottomWidth: 3,
  },
  textActive: {
    color: global_color.PRIMARY,
  },
  paperTabActive: {
    borderColor: global_color.PRIMARY,
    borderWidth: 2,
    borderBottomColor: global_color.LIGHT_GRAY,
    marginBottom: -2,
  },
});
