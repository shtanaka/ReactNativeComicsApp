export interface HeroNameFormValidation {
  /**
   * Hero Name rules
   */
  heroName: any
}

export interface HeroNameFormFields {
  /**
   * Hero Name
   */
  heroName: string
}

export interface HeroNameFormProps {
  /**
   * Form initial values
   */
  initialValues?: HeroNameFormFields,
  /**
   * Wether we should display a submit button or not
   */
  submitButton?: boolean
}
