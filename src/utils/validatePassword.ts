/**
 * Validate Password Function
 *
 * Validates a password based on specific criteria.
 * @param input - The password string to validate.
 * @returns True if the password meets the criteria, false otherwise.
 *
 * TODO:
 * - Possibly break up the regex to provide more descriptive error messages.
 * - Refactor to disallow username usage when creating a new password.
 * - Strengthen the validation to require at least one uppercase character.
 */

export function validatePassword(input: string): boolean {
  // Regular expression pattern to match criteria,
  // min 8 characters and have 2 or more special characters and have 1 or more digits and must not contain any spaces
  const regex: RegExp = /^(?=.*[!@#$%^&*()_+~`\-={}\[\]|:;"'<>,./?].*[!@#$%^&*()_+~`\-={}\[\]|:;"'<>,./?])(?=.*\d)[^\s]{8,}$/;

  // Test if the input matches the pattern
  return regex.test(input);
}
