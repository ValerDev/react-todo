export const required = value => value ? undefined : 'Field is required';
export const maxLength = max => str => str.length <= max ? undefined : `Field must contain a maximum of ${max} characters`
export const minLength = min => str => str.length >= min ? undefined : `Field must contain a minimum of ${min} characters`
export const rangeLength = (min, max) => str => str.length >= min && str.length <= max ? undefined : `The field must contain between ${min} and ${max} characters.`
export const email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined