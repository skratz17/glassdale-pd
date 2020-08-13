import { Validator } from '../utilities/Validator.js';

const validator = new Validator();

const valueIsNotZero = value => parseInt(value) !== 0;

validator.addValidatorToProperty(valueIsNotZero, 'You must select a value.', 'criminalId');

export default validator;