import React from 'react';
import Toast from 'react-native-toast-message';
import {I18nManager, StatusBar} from 'react-native';
import {Provider} from 'react-redux';

import Container from './src/containers';
import {store} from './src/redux/store';
import {toastConfig} from './src/utils/toastMessage/toastMessage';
import {useDoubleBackPressExit} from './src/utils/hooks';
import {global_color} from './src/assets/styles/style';

I18nManager.forceRTL(false);

const App = () => {
  useDoubleBackPressExit();

  return (
    <Provider store={store}>
      <StatusBar backgroundColor={global_color.WHITE} barStyle="dark-content" />

      <Container />

      {/* React Native Toast Message */}
      <Toast position="bottom" config={toastConfig} />
    </Provider>
  );
};

export default App;
