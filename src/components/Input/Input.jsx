import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useState} from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

import TextC from '../TextC/TextC';
import {
  global_color,
  global_font,
  primaryStyles,
} from '../../assets/styles/style';

const Input = ({
  label,
  isVerification = false,
  readOnly = false,
  inValid = false,
  containerStyle = {},
  labelStyle = {},
  inputStyle = {},
  onPress,
  secureTextEntry,
  placeholderTextColor = global_color.MUTE,
  ...otherProps
}) => {
  const [isHiddenPassword, setIsHiddenPassword] = useState(true);

  return (
    <View style={[styles.containerStyle]}>
      {label && <TextC style={[styles.label, labelStyle]}>{label}</TextC>}
      <Pressable onPress={onPress && onPress}>
        <TextInput
          {...otherProps}
          editable={!readOnly}
          placeholderTextColor={placeholderTextColor}
          secureTextEntry={secureTextEntry && isHiddenPassword}
          style={[
            primaryStyles.inputContainer,
            isVerification && styles.verification,
            inValid && styles.inValid,
            readOnly && styles.readOnly,
            inputStyle,
          ]}
        />
        {secureTextEntry && (
          <FontAwesome5
            name={isHiddenPassword ? 'eye' : 'eye-slash'}
            style={styles.eye}
            onPress={() => setIsHiddenPassword(!isHiddenPassword)}
          />
        )}
      </Pressable>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  label: {
    color: global_color.LABEL,
    marginBottom: 3,
  },
  verification: {letterSpacing: 15, textAlign: 'center'},
  inValid: {borderColor: global_color.DANGER, borderWidth: 1},
  readOnly: {
    backgroundColor: global_color.LIGHT_GRAY,
    color: global_color.LABEL,
  },
  eye: {
    position: 'absolute',
    right: 5,
    top: 10,
    color: global_color.BLACK,
  },
});
