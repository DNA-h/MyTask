import {View} from 'react-native';
import {global_color} from '../../assets/styles/style';

const HorizontalRule = ({width = 1, otherStyles = {}}) => {
  return (
    <View
      style={{
        borderBottomColor: global_color.LIGHT_GRAY,
        borderBottomWidth: width,
        marginVertical: 10,
        ...otherStyles,
      }}
    />
  );
};

export default HorizontalRule;
