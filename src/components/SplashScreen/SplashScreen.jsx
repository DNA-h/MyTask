import NetInfo from '@react-native-community/netinfo';
import AnimatedSplash from 'react-native-animated-splash-screen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useEffect, useState} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';

import DotsLoading from '../DotsLoading/DotsLoading';
import ButtonC from '../ButtonC/ButtonC';
import TextC from '../TextC/TextC';
import {global_color} from '../../assets/styles/style';

const SplashScreen = ({children}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isConnectedInternet, setIsConnectedInternet] = useState(true);

  const handleCheckInternetConnection = async () => {
    const state = await NetInfo.fetch();
    if (state.isConnected) {
      setIsLoading(true);
      setIsConnectedInternet(true);
    } else {
      setIsLoading(false);
      setIsConnectedInternet(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      handleCheckInternetConnection();
    }, 1000);
  }, []);

  const isLoaded = isLoading && isConnectedInternet;

  return (
    <AnimatedSplash
      translucent={true}
      isLoaded={isLoaded}
      customComponent={
        <View style={styles.container}>
          <TextC color="white" bold size={10}>
            Digikala
          </TextC>
          <View style={styles.bottomContaner}>
            {isConnectedInternet ? (
              <DotsLoading color={global_color.WHITE} />
            ) : (
              <>
                <TextC color="white">Internet connection error...</TextC>
                <ButtonC
                  onPress={handleCheckInternetConnection}
                  variant="link"
                  otherTextStyles={styles.text}>
                  try again <FontAwesome5 name="redo" />
                </ButtonC>
              </>
            )}
          </View>
        </View>
      }
      backgroundColor={isLoaded ? global_color.WHITE : global_color.PRIMARY}
      logoWidth={Dimensions.get('window').width}
      logoHeight={Dimensions.get('window').height}>
      {children}
    </AnimatedSplash>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContaner: {
    position: 'absolute',
    bottom: 50,
  },
});
