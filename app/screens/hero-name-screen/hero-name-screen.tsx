import * as React from "react"
import { View, ViewStyle, TextStyle, SafeAreaView } from "react-native"
import { NavigationScreenProps } from "react-navigation"

import { color, spacing } from "app/theme"
import { Text } from "app/components/text"
import { Header } from "app/components/header"
import { Screen } from "app/components/screen"
import { HeroNameForm } from "app/forms/hero-name-form/hero-name-form";

const mainViewStyle: ViewStyle = { flex: 1 }

const screenStyle: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[6],
}

const titleWrapperStyle: TextStyle = {
  marginTop: spacing[8],
  textAlign: "center",
}

const titleStyle: TextStyle = {
  fontSize: 16,
  lineHeight: 38,
  fontWeight: "bold",
  textAlign: "center",
}

const headerStyle: ViewStyle = {
  backgroundColor: color.secondaryBackground,
}

const headerTitleStyle: TextStyle = {
  fontWeight: "bold",
  color: color.palette.lighterGrey,
}

const headerContentStyle: ViewStyle = {
  paddingVertical: spacing[0],
  paddingHorizontal: spacing[0],
}

export interface HeroNameScreenProps extends NavigationScreenProps<{}> {}

export interface HeroNameScreenState {
  loading: boolean
}

export class HeroNameScreen extends React.Component<HeroNameScreenProps, HeroNameScreenState> {
  state = { loading: false }

  goBack = () => this.props.navigation.goBack(null)

  render() {
    return (
      <View style={mainViewStyle}>
        <SafeAreaView style={headerStyle}>
          <View style={headerContentStyle}>
            <Header
              headerTx="heroNameScreen.title"
              leftIcon="back"
              titleStyle={headerTitleStyle}
              onLeftPress={this.goBack}
            />
          </View>
        </SafeAreaView>
        <Screen style={screenStyle} preset="scroll">
          <Text style={titleWrapperStyle}>
            <Text tx="heroNameScreen.contentTitle" style={titleStyle} />
          </Text>
          <View>
            <HeroNameForm />
          </View>
        </Screen>
      </View>
    )
  }
}
