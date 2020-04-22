import React from "react"
import { Text, Button } from "react-native";

// import project components
import CenterView from "../../components/CenterView/CenterView"

// import ReduxConnector and ReduxPropsTypes
import withReduxConnector, { PropsFromRedux } from "../../redux/containers/SignIn_Screen.container"


type PropsFromParent = {}
type Props = PropsFromRedux & PropsFromParent


const SignIn_Screen = (props: Props) => {
	// Redux props
	const { isAuthenticated, userToken, loading, errorMessage, signIn, signOut } = props

	const blueStyle = { color: "blue"}	

	return (
		<CenterView>
			<Text>SignIn Screen</Text>

			<Text style={blueStyle}> isAuthenticated: { isAuthenticated ? "true": "false" } </Text>
			
			<Text style={blueStyle}> userToken: { userToken ? 
				<Text style={{color: "green"}}>{ userToken }</Text>: "no token" } 
			</Text>
			
			<Text style={blueStyle}> loading: { loading ? "true": "false"} </Text>

			<Text style={blueStyle}> errorMessage: { errorMessage ? 
				<Text style={{color: "red"}}>{ errorMessage }</Text> : "No error Message"} 
			</Text>

			{
				isAuthenticated ? (
					<Button title="Logout" onPress={signOut}/>
				) : (
					<Button title="Login" onPress={() => signIn("email", "password")}/>
				)
			}
		</CenterView>
	);
}

export default withReduxConnector(SignIn_Screen)