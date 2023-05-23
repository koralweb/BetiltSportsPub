import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faBars} from '@fortawesome/free-solid-svg-icons/faBars';
import {faShoppingBasket} from '@fortawesome/free-solid-svg-icons/faShoppingBasket';
import {faClose} from '@fortawesome/free-solid-svg-icons/faClose';
import BookingScreen from './src/screens/BookingScreen';
import CartScreen from './src/screens/CartScreen';
import ContactsScreen from './src/screens/ContactsScreen';
import MatchesScreen from './src/screens/MatchesScreen';
import ShopScreen from './src/screens/ShopScreen';

library.add(faBars, faShoppingBasket, faClose);

const Stack = createNativeStackNavigator();

const options = {
  headerShown: false,
  contentStyle: {backgroundColor: '#fff'},
};

const screens = [
  {name: 'Home', component: HomeScreen},
  {name: 'Booking', component: BookingScreen},
  {name: 'Cart', component: CartScreen},
  {name: 'Contacts', component: ContactsScreen},
  {name: 'Matches', component: MatchesScreen},
  {name: 'Shop', component: ShopScreen},
];

function App() {
  const renderScreens = () => {
    return screens.map(sc => (
      <Stack.Screen
        key={sc.name}
        name={sc.name}
        component={sc.component}
        options={options}
      />
    ));
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>{renderScreens()}</Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
