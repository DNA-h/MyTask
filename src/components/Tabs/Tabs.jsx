import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';

import {global_color} from '../../assets/styles/style';

const Tabs = ({
  children,
  activeKey,
  onSelect,
  isPaper = false,
  isWidthAuto = false,
  isScroll = false,
  otherStyles = {},
  contentOffset = {},
  onContentSizeChange,
}) => {
  const childrenWithProps = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        activeKey,
        isWidthAuto,
        isPaper,
        onSelect: key => onSelect(key),
      });
    }
    return child;
  });

  if (isScroll)
    return (
      <View>
        <ScrollView
          horizontal
          contentOffset={contentOffset}
          onContentSizeChange={onContentSizeChange}
          style={[styles.container, otherStyles]}>
          {childrenWithProps}
        </ScrollView>
      </View>
    );

  return (
    <View style={[styles.container, {flexDirection: 'row'}, otherStyles]}>
      {childrenWithProps}
    </View>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  container: {
    borderBottomColor: global_color.BORDER,
    borderBottomWidth: 2,
    paddingTop: 10,
    paddingHorizontal: 10,
  },
});
