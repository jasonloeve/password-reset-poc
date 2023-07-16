import { validatePassword } from '../validatePassword';

describe('validatePassword', () => {
  it('returns true for a valid password', () => {
    const validPassword = 'P@ssw0rd!';
    const isValid = validatePassword(validPassword);
    expect(isValid).toBe(true);
  });

  it('returns false for a password with less than 8 characters', () => {
    const shortPassword = 'Pass1!';
    const isValid = validatePassword(shortPassword);
    expect(isValid).toBe(false);
  });

  it('returns false for a password with only 1 special characters', () => {
    const singleSpecialCharPassword = 'P@ssw0rd';
    const isValid = validatePassword(singleSpecialCharPassword);
    expect(isValid).toBe(false);
  });

  it('returns false for a password without any special characters', () => {
    const noSpecialCharPassword = 'Password123';
    const isValid = validatePassword(noSpecialCharPassword);
    expect(isValid).toBe(false);
  });

  it('returns false for a password without any digits', () => {
    const noDigitPassword = 'Password@!';
    const isValid = validatePassword(noDigitPassword);
    expect(isValid).toBe(false);
  });

  it('returns false for a password containing spaces', () => {
    const passwordWithSpaces = 'Pass word1!';
    const isValid = validatePassword(passwordWithSpaces);
    expect(isValid).toBe(false);
  });
});
