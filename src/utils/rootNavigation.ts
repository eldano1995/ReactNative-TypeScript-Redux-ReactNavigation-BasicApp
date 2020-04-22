import { createRef } from 'react';
import screenRoutes from "./screenRoutes";
import { NavigationContainerRef } from '@react-navigation/native';

// Read https://reactnavigation.org/docs/navigating-without-navigation-prop to understand this
export const isMountedRef = createRef<boolean>();
export const navigationRef = createRef<NavigationContainerRef>();


// GT stands for: Go To, like the assembly instruction
export const GT_Home = () => { navigate(screenRoutes.Home) }
export const GT_About = () => { navigate(screenRoutes.About) }
export const GT_SignIn = () => { navigate(screenRoutes.SignIn) }


export const GoBack = () => {
    if (isMountedRef.current && navigationRef.current) {
        navigationRef.current.goBack()
    }
}


const navigate = (name: string, params?: any) => {
    if (isMountedRef.current && navigationRef.current) {
        // Perform navigation if the app has mounted
        navigationRef.current.navigate(name, params);
    } else {
        // You can decide what to do if the app hasn't mounted
        // You can ignore this, or add these actions to a queue you can call later
    }
}

const navigationService = { GT_Home, GT_About, GT_SignIn, GoBack }
export default navigationService 