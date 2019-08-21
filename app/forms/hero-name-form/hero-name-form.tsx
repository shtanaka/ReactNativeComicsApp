import * as React from "react"
import { Formik } from "formik"
import validate from 'validate.js';
import { HeroNameFormFields, HeroNameFormProps } from "./hero-name-form.props"

import { heroNameFormFields } from "./hero-name-form.fields";
import { heroNameRules } from "./hero-name-form.rules";
const defaultInitialValues: HeroNameFormFields = {
  heroName: "",
}

export const HeroNameForm = ({ initialValues, submitButton = false }: HeroNameFormProps) => (
  <Formik
    initialValues={initialValues || defaultInitialValues}
    onSubmit={(values, actions) => console.log("submit: ", values, actions)}
    render={props => heroNameFormFields(props, submitButton)}
    validate={(values) => validate(values, heroNameRules)}
  />
)
