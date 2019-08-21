import { ViewStyle, TextStyle } from "react-native"
import { spacing, color, typography } from "app/theme";

// the base styling for the container
const BASE_VIEW: ViewStyle = {
  paddingVertical: spacing[3],
  borderBottomWidth: 1,
  borderBottomColor: color.palette.darkGrey,
}

// the base styling for the TextInput
const BASE_TEXT: TextStyle = {
  height: 40,
  fontSize: 18,
  paddingHorizontal: spacing[4],
  color: color.palette.darkGrey,
  fontFamily: typography.primary,
  backgroundColor: color.palette.white,
}

export const viewPresets = {
  primary: {
    ...BASE_VIEW,
    backgroundColor: color.palette.white,
  } as ViewStyle,
  secondary: {
    ...BASE_VIEW,
    color: color.palette.grey,
  } as TextStyle,
}

export const textPresets = {
  primary: {
    ...BASE_TEXT,
  } as TextStyle,
  secondary: {
    ...BASE_TEXT,
  } as TextStyle,
}

export type TextFieldPresetNames = keyof typeof viewPresets
