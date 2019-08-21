import * as React from "react"
import { View, TextInput } from "react-native"
import { Text } from "../text"

import { mergeAll, flatten } from "ramda"
import { viewPresets, textPresets } from "./form-error-message.presets"
import { FormErrorMessageProps } from "./form-error-message.props"
import { color } from "app/theme/color"

// currently we have no presets, but that changes quickly when you build your app.
const enhance = (style, styleOverride) => {
  return mergeAll(flatten([style, styleOverride]))
}

/**
 * A component which has a label and an input together.
 */
export class FormErrorMessage extends React.Component<FormErrorMessageProps, {}> {
  render() {
    const {
      errorTx,
      errorText,
      preset = "primary",
      style: styleOverride,
      textStyle: textStyleOverride,
    } = this.props
    const viewStyle = enhance(viewPresets[preset], styleOverride)
    const textStyle = enhance(textPresets[preset], textStyleOverride)

    return (
      <View style={viewStyle}>
        <View></View>
          <Text
            style={textStyle}
            preset="fieldLabel"
            tx={errorTx}
            text={errorText}
          />
      </View>
    )
  }
}
