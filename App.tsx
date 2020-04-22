import React from 'react';
import { StatusBar } from "react-native";

// import redux related
import { Provider } from 'react-redux';
import store from "./src/redux/store/store";

// import screens and navigation related
import screens from "./src/screens/screens"
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef, isMountedRef } from './src/utils/rootNavigation';

const { Navigator, Screen } = createStackNavigator();


const App = () => {
	React.useEffect(() => {
		(isMountedRef as React.MutableRefObject<boolean>).current = true;
		// An Effect_Callback function may return a cleanup function, that must be of type () => void
		return () => { (isMountedRef as React.MutableRefObject<boolean>).current = false }
	}, []);

	return (
		<Provider store={store}>
			<StatusBar barStyle="dark-content" />
			<NavigationContainer ref={navigationRef}>
				<Navigator>
					{screens.map((screenProps, index) => <Screen key={index} {...screenProps} />)}
				</Navigator>
			</NavigationContainer>
		</Provider>
	);
};

export default App;