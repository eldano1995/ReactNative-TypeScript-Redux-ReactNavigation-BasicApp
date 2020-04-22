import React from "react"
import { Text, Button, View } from "react-native";

// import project components
import CenterView from "../../components/CenterView/CenterView"

// import navigation actions
import { GT_Home, GT_SignIn, GoBack } from "../../utils/rootNavigation"

const About_Screen = () => {

    return (
        <CenterView>
            <Text>About Screen</Text>            
            <Button title="Go to Home" onPress={GT_Home} />
            <Button title="Sign In" onPress={GT_SignIn} />
            <Button title="Go back" onPress={GoBack} />
        </CenterView>
    );
}

export default About_Screen