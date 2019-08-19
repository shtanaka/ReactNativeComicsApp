import { createStackNavigator } from "react-navigation"
import { WelcomeScreen } from "../screens/welcome-screen"
import { DemoScreen } from "../screens/demo-screen"
import { HeroNameScreen } from "../screens/hero-name-screen"

export const PrimaryNavigator = createStackNavigator(
  {
    welcome: { screen: WelcomeScreen },
    demo: { screen: DemoScreen },
    heroName: { screen: HeroNameScreen },
  },
  {
    headerMode: "none",
  },
)
