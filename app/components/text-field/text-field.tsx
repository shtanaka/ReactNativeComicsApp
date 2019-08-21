import * as React from "react"
import { View, TextInput } from "react-native"
import { color } from "../../theme"
import { translate } from "../../i18n"
import { Text } from "../text"
import { TextFieldProps } from "./text-field.props"
import { mergeAll, flatten } from "ramda"
import { viewPresets, textPresets } from "./text-field.presets"

// currently we have no presets, but that changes quickly when you build your app.
const enhance = (style, styleOverride) => {
  return mergeAll(flatten([style, styleOverride]))
}

/**
 * A component which has a label and an input together.
 */
export class TextField extends React.Component<TextFieldProps, {}> {
  render() {
    const {
      label,
      labelTx,
      placeholder,
      forwardedRef,
      placeholderTx,
      preset = "primary",
      style: styleOverride,
      inputStyle: inputStyleOverride,
      ...props
    } = this.props
    const viewStyle = enhance(viewPresets[preset], styleOverride)
    const inputStyle = enhance(textPresets[preset], inputStyleOverride)
    const actualPlaceholder = placeholderTx ? translate(placeholderTx) : placeholder

    return (
      <View style={viewStyle}>
        <Text preset="fieldLabel" tx={labelTx} text={label} />
        <TextInput
          style={inputStyle}
          ref={forwardedRef}
          placeholder={actualPlaceholder}
          underlineColorAndroid={color.transparent}
          placeholderTextColor={color.palette.lighterGrey}
          {...props}
        />
      </View>
    )
  }
}
