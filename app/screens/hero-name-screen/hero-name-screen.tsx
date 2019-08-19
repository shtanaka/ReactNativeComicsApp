import * as React from "react"
import { ScrollView, View, Text } from "react-native"
import { NavigationScreenProps } from "react-navigation"
import { Wallpaper } from "../../components/wallpaper"

export interface HeroNameScreenProps extends NavigationScreenProps<{}> {}
export interface HeroNameScreenState {
  loading: boolean;
}

export class HeroNameScreen extends React.Component<HeroNameScreenProps, HeroNameScreenState> {
  goBack = () => this.props.navigation.goBack(null)

  render() {
    return (
      <ScrollView>
        <View>
          <Wallpaper />
          <Text>
            Hello my page
          </Text>
        </View>
      </ScrollView>
    )
  }
}
