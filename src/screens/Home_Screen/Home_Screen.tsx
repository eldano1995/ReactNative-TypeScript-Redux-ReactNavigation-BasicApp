import React from "react"
import { Text, Button } from "react-native";

// import project components
import CenterView from "../../components/CenterView/CenterView"

// import navigation actions
import { GT_About, GT_SignIn } from "../../utils/rootNavigation"

// import ReduxConnector and ReduxPropsTypes
// import withReduxConnector, { PropsFromRedux } from "../../redux/containers/SignIn_Screen.container"


const Home_Screen = () => {
	return (
		<CenterView>
			<Text>Home Screen</Text>			
			<Button title="Go to About" onPress={GT_About}/>
			<Button title="Go to SignIn" onPress={GT_SignIn}/>

			{/* 
			Cleaner code: now we don't need to create the same functions
			over and over again to navigate between screens. We just import
			them. This result also in better performance.

			<Button title="Go to About"
				onPress={() => navigation.navigate('About')}
      		/>
			<Button title="Go to SignIn"
				onPress={() => navigation.navigate('SignIn')}
			/> */}
			
		</CenterView>
	);
}

// export default withReduxConnector(Home_Screen)
export default Home_Screen