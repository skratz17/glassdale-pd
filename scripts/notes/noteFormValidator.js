import { Validator } from '../utilities/Validator.js';

const validator = new Validator();

// Defining validation functions for note form
const validateValueIsNotZero = value => parseInt(value) !== 0;
const validateValueIsNotEmpty = value => value !== '';
const validateValueDoesNotIncludeBruceWillis = value => !value.toLowerCase().includes('bruce willis');

// Adding validators to the note form validator
validator.addValidatorToProperty(validateValueIsNotZero, 'You must select a criminal.', 'criminalId');
validator.addValidatorToProperty(validateValueIsNotEmpty, 'Field may not be blank.', 'title', 'author', 'text');
validator.addValidatorToProperty(validateValueDoesNotIncludeBruceWillis, 'Don\'t you bring Bruce Willis into this.', 'title');

export default validator;