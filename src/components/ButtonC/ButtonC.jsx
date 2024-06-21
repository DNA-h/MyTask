import {Pressable, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';

import DotsLoading from '../DotsLoading/DotsLoading';
import TextC from '../TextC/TextC';
import {global_color} from '../../assets/styles/style';
import {convertColorText} from '../../utils';

const ButtonC = ({
  onPress,
  children,
  icon,
  variant = 'primary',
  size = 'md',
  outline = false,
  disabled = false,
  otherStyles = {},
  otherTextStyles = {},
  textSize = 1.8,
}) => {
  const loading = useSelector(state => state.loading);

  const primaryColor =
    variant === 'link' ? global_color.TRANSPARENT : convertColorText(variant);
  const secondaryColor =
    variant === 'primary'
      ? 'white'
      : variant === 'danger'
      ? 'white'
      : variant === 'light'
      ? 'black'
      : variant === 'success'
      ? 'white'
      : variant === 'secondary'
      ? 'white'
      : variant === 'link'
      ? 'blue'
      : 'white';
  const paddingVertical =
    size === 'sm' ? 4 : size === 'md' ? 6 : size === 'lg' ? 8 : size;

  const color = outline ? primaryColor : secondaryColor;

  const isDisabled = disabled || loading;

  return (
    <Pressable
      onPress={onPress}
      disabled={isDisabled}
      style={[
        styles.button,
        {
          borderColor: primaryColor,
          borderWidth: 1,
          backgroundColor: outline ? global_color.TRANSPARENT : primaryColor,
          paddingVertical,
        },
        otherStyles,
        isDisabled && {opacity: 0.6},
      ]}>
      <View style={styles.textContainer}>
        {loading && variant !== 'link' ? (
          <DotsLoading color={color} />
        ) : (
          <>
            {icon && <View style={styles.iconContainer}>{icon({color})}</View>}
            <TextC
              align="center"
              bold
              color={color}
              style={otherTextStyles}
              size={textSize}>
              {children}
            </TextC>
          </>
        )}
      </View>
    </Pressable>
  );
};

export default ButtonC;

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingHorizontal: 16,
  },
  iconContainer: {
    marginEnd: 5,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
