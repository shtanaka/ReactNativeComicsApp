import { HeroNameFormValidation } from "./hero-name-form.props";

export const heroNameRules: HeroNameFormValidation = {
  heroName: {
    presence: {
      allowEmpty: false,
    },
  }
}