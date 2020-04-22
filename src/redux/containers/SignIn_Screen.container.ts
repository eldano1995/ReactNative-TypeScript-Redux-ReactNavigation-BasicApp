import { connect, ConnectedProps } from "react-redux"
import { RootState } from "../reducers/root.reducer"
import { SignIn, SignOut } from "../actions/user.actions"


const mapStateToProps = (state: RootState) => {
    const { isAuthenticated, userToken } = state.user
    const { loading, errorMessage } = state.appUI.SignIn_Screen
    
    return { 
        isAuthenticated, userToken, loading, errorMessage
    }
}

const mapDispatchToProps = {
    signIn: SignIn,
    signOut: SignOut,
}


const withReduxConnector = connect(mapStateToProps, mapDispatchToProps)

export type PropsFromRedux = ConnectedProps<typeof withReduxConnector>

export default withReduxConnector