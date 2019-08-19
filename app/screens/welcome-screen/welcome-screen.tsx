import * as React from "react"
import { View, Image, ViewStyle, TextStyle, ImageStyle, SafeAreaView } from "react-native"
import { NavigationScreenProps } from "react-navigation"
import { Text } from "../../components/text"
import { Button } from "../../components/button"
import { Screen } from "../../components/screen"
import { color, spacing } from "../../theme"
import { marvelLogo } from "./"

const mainViewStyle: ViewStyle = { flex: 1 }

const screenStyle: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[4],
}
const boldStyle: TextStyle = { fontWeight: "bold" }

const titleWrapperStyle: TextStyle = {
  marginTop: spacing[8] + spacing[8],
  textAlign: "center",
}

const titleStyle: TextStyle = {
  ...boldStyle,
  fontSize: 28,
  lineHeight: 38,
  textAlign: "center",
}

const descriptionStyle: TextStyle = {
  textAlign: "center",
}

const logoStyle: ImageStyle = {
  alignSelf: "center",
  marginVertical: spacing[5],
  height: 130,
  width: '100%',
}

const footerStyle: ViewStyle = { backgroundColor: color.secondaryBackground }

const footerContentStyle: ViewStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
}

export interface WelcomeScreenProps extends NavigationScreenProps<{}> {}

export class WelcomeScreen extends React.Component<WelcomeScreenProps, {}> {
  goToNextScreen = () => this.props.navigation.navigate("demo")
  
  goToHeroNameScreen = () => this.props.navigation.navigate("heroName")

  render() {
    return (
      <View style={mainViewStyle}>
        {/* <Header headerTx="welcomeScreen.poweredBy" style={headerStyle} titleStyle={headerTitleStyle} /> */}
        <Screen style={screenStyle} statusBar="dark-content" preset="scroll">
          <Text style={titleWrapperStyle}>
            <Text style={titleStyle} text="All your favorite hero comics in one place" />
          </Text>
          <Image source={marvelLogo} style={logoStyle} />
          <Text style={descriptionStyle}>
            This is a Marvel comics listing App. Hope you can find your comics here.
          </Text>
        </Screen>
        <SafeAreaView style={footerStyle}>
          <View style={footerContentStyle}>
            <Button tx="welcomeScreen.goToHeroName" onPress={this.goToHeroNameScreen} />
          </View>
        </SafeAreaView>
      </View>
    )
  }
}
