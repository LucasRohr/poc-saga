import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import {Provider as ReduxProvider} from 'react-redux';

import {Home, Details} from './screens';
import initializeStore from './store';
import {ROUTES} from './constants';

import styles from './styles';

const Stack = createNativeStackNavigator();

const DARK_MODE = 'dark';

const App = () => {
  const {store} = initializeStore();

  const isDarkMode = useColorScheme() === DARK_MODE;
  const barStyle = isDarkMode ? 'light-content' : 'dark-content';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <ReduxProvider store={store}>
      <SafeAreaView style={[backgroundStyle, styles.container]}>
        <StatusBar barStyle={barStyle} />
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name={ROUTES.HOME}
              component={Home}
              options={{headerShown: false}}
            />

            <Stack.Screen
              name={ROUTES.DETAILS}
              component={Details}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </ReduxProvider>
  );
};

export default App;
