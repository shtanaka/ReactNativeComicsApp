import * as React from "react"
import { View, ViewStyle, TextStyle } from "react-native"
import { NavigationScreenProps } from "react-navigation"

import { color, spacing } from "app/theme"
import { Text } from "app/components/text"
import { Screen } from "app/components/screen"

const mainViewStyle: ViewStyle = { flex: 1 }

const screenStyle: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[6],
}

const titleWrapperStyle: TextStyle = {
  textAlign: "center",
}

const titleStyle: TextStyle = {
  fontSize: 28,
  lineHeight: 38,
  fontWeight: "bold",
  textAlign: "center",
}

export interface HeroNameScreenProps extends NavigationScreenProps<{}> {}

export interface HeroNameScreenState {
  loading: boolean;
}

export class HeroNameScreen extends React.Component<HeroNameScreenProps, HeroNameScreenState> {
  goBack = () => this.props.navigation.goBack(null)

  render() {
    return (
      <View style={mainViewStyle}>
        <Screen style={screenStyle} statusBar="dark-content" preset="scroll">
          <Text style={titleWrapperStyle}>
            <Text style={titleStyle}>
              Hello World
            </Text>
          </Text>
        </Screen>
      </View>
    )
  }
}
