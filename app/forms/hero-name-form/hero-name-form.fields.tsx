import * as React from "react"
import { FormikProps } from "formik"
import { View } from "react-native"

import { TextField } from "app/components/text-field"

import { spacing } from "app/theme"
import { Button } from "app/components/button"


import { HeroNameFormFields } from "./hero-name-form.props"
import { FormErrorMessage } from "app/components/form-error-message";

export const heroNameFormFields = (
  { handleChange, handleSubmit, errors }: FormikProps<HeroNameFormFields>,
  submitButton,
) => {
  const { heroName: heroNameError } = errors

  return (
    <View>
      <TextField
        onChangeText={handleChange("heroName")}
        returnKeyType="done"
        onSubmitEditing={handleSubmit as any}
      />
      <FormErrorMessage errorText={heroNameError} />
      {submitButton && (
        <Button style={{ marginTop: spacing[4] }} onPress={handleSubmit as any} text="SUBMIT" />
      )}
    </View>
  )
}
