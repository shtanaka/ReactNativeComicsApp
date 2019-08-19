import * as React from "react"
import { View, Image, ViewStyle, TextStyle, ImageStyle, SafeAreaView } from "react-native"
import { NavigationScreenProps } from "react-navigation"
import { Text } from "app/components/text"
import { Button } from "app/components/button"
import { Screen } from "app/components/screen"
import { color, spacing } from "app/theme"
import { marvelLogo } from "./"

const mainViewStyle: ViewStyle = { flex: 1 }

const screenStyle: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[4],
}

const titleWrapperStyle: TextStyle = {
  marginTop: spacing[8] + spacing[8],
  textAlign: "center",
}

const titleStyle: TextStyle = {
  fontWeight: "bold",
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
        <Screen style={screenStyle} statusBar="dark-content" preset="scroll">
          <Text style={titleWrapperStyle}>
            <Text tx="welcomeScreen.title" style={titleStyle} />
          </Text>
          <Image source={marvelLogo} style={logoStyle} />
          <Text tx="welcomeScreen.description" style={descriptionStyle} />
        </Screen>
        <SafeAreaView style={footerStyle}>
          <View style={footerContentStyle}>
            <Button tx="welcomeScreen.continue" onPress={this.goToHeroNameScreen} />
          </View>
        </SafeAreaView>
      </View>
    )
  }
}
