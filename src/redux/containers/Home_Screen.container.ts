import { connect, ConnectedProps } from "react-redux"
import { RootState } from "../reducers/root.reducer"

const mapStateToProps = (state: RootState) => {
    return { 

    }
}

const mapDispatchToProps = { 

}

const withReduxConnector = connect(mapStateToProps, mapDispatchToProps)

export type PropsFromRedux = ConnectedProps<typeof withReduxConnector>

export default withReduxConnector

