import ScreenRoutes from "../utils/screenRoutes"
import { FC, ComponentType} from "react"

// ========================== SCREENS ==================================
import About_Screen from "./About_Screen/About_Screen"
import Home_Screen from "./Home_Screen/Home_Screen"
import SignIn_Screen from "./SignIn_Screen/SignIn_Screen"


type ScreenStackProps = {
    name: string; 
    options?: any;
    component: FC | ComponentType;
}

const screens: Array<ScreenStackProps> = [
    { name: ScreenRoutes.Home, component: Home_Screen },
    { name: ScreenRoutes.About, component: About_Screen },
    { name: ScreenRoutes.SignIn, component: SignIn_Screen },
]

export default screens