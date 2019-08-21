import { ViewStyle, TextStyle } from "react-native"
import { spacing, color, typography } from "app/theme";

// the base styling for the container
const BASE_VIEW: ViewStyle = {
  paddingVertical: spacing[3],
}

// the base styling for the TextInput
const BASE_TEXT: TextStyle = {
  height: 40,
  fontSize: 18,
  color: color.palette.angryRed,
  paddingHorizontal: spacing[4],
  fontFamily: typography.primary,
}

export const viewPresets = {
  primary: {
    ...BASE_VIEW,
  } as ViewStyle,
}

export const textPresets = {
  primary: {
    ...BASE_TEXT,
  } as TextStyle,
}

export type TextFieldPresetNames = keyof typeof viewPresets
