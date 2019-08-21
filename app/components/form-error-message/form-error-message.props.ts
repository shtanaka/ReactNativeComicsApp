import { TextInputProps, TextStyle, ViewStyle } from "react-native"

export interface FormErrorMessageProps extends TextInputProps {
  /**
   * The label i18n key.
   */
  errorTx?: string

  /**
   * The label text if no labelTx is provided.
   */
  errorText?: string

  /**
   * Optional container style overrides useful for margins & padding.
   */
  style?: ViewStyle | ViewStyle[]

  /**
   * Optional style overrides for the input.
   */
  textStyle?: TextStyle | TextStyle[]

  /**
   * Various look & feels.
   */
  preset?: "default"

  forwardedRef?: any
}
