import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {RFValue} from 'react-native-responsive-fontsize';

import SplashScreen from '../components/SplashScreen/SplashScreen';
import ProductPublicContext from '../contexts/Public/ProductPublicContext/ProductPublicContext';
import ProductsPublic from '../screens/Public/ProductsPublic/ProductsPublic';
import ProductPublic from './../screens/Public/ProductPublic/ProductPublic';
import {global_font} from '../assets/styles/style';

const Stack = createStackNavigator();

const Container = () => {
  return (
    <>
      <SplashScreen>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Products"
            screenOptions={{
              headerShown: false,
              headerTitleStyle: {
                fontFamily: global_font.PRIMARY_BOLD,
                fontSize: RFValue(13),
              },
            }}>
            <Stack.Screen name="Products" initialParams={{productId: ''}}>
              {({route}) => (
                <ProductPublicContext route={route}>
                  <ProductsPublic route={route} />
                </ProductPublicContext>
              )}
            </Stack.Screen>
            <Stack.Screen
              options={{
                headerShown: true,
              }}
              name="Product"
              initialParams={{productId: ''}}>
              {({route}) => (
                <ProductPublicContext route={route}>
                  <ProductPublic route={route} />
                </ProductPublicContext>
              )}
            </Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </SplashScreen>
    </>
  );
};

export default Container;
