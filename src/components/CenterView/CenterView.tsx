import React from "react"
import { View } from "react-native"

type Props = React.PropsWithChildren<{}>

const CenterView: React.FC = (props: Props) => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        { props.children }
    </View>
)

export default CenterView