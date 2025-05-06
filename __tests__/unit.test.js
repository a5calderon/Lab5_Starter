// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

/**
 * Test for valid phone numbers:
 * 
 * NEED: 2 true and 2 false
 */
test('valid phone number: (123) 456-7890', () => {
  expect(isPhoneNumber('(123)-456-7890')).toBe(true);
});
test('valid phone number: 456-7890', () => {
  expect(isPhoneNumber('456-7890')).toBe(true);
});
test('invalid phone number: 7890', () => {
  expect(isPhoneNumber('7890')).toBe(false);
});
test('valid phone number: (456)-7890', () => {
  expect(isPhoneNumber('(456)-7890')).toBe(false);
});


/**
 * Test for valid emails:
 * 
 * NEED: 2 true and 2 false
 */
test('valid email: a5calderon@ucsd.edu', () => {
  expect(isEmail('a5calderon@ucsd.edu')).toBe(true);
});
test('valid email: a5calderonucsd.edu', () => {
  expect(isEmail('a5calderonucsd.edu')).toBe(false);
});
test('valid email: a5calderon@ucsdedu', () => {
  expect(isEmail('a5calderon@ucsdedu')).toBe(false);
});
test('valid email: 5@ucsd.Edu', () => {
  expect(isEmail('5@ucsd.Edu')).toBe(true);
});

/**
 * Test for strong passwords:
 * 
 * NEED: 2 true and 2 false
 */
test('strong password: 12345', () => {
  expect(isStrongPassword('12345')).toBe(false);
});

test('strong password: A12345', () => {
  expect(isStrongPassword('A12345')).toBe(true);
});

test('strong password: A12345!', () => {
  expect(isStrongPassword('A12345!')).toBe(false);
});

test('strong password: W_1234567890_', () => {
  expect(isStrongPassword('W_1234567890_')).toBe(true);
});


/**
 * Test for date form:
 * 
 * NEED: 2 true and 2 false
 */
test('valid date: 1/1/01', () => {
  expect(isDate('1/1/01')).toBe(false);
});
test('valid date: 1/1/2001', () => {
  expect(isDate('1/1/2001')).toBe(true);
});
test('valid date: 13/13/1301', () => {
  expect(isDate('13/13/1301')).toBe(true);
});
test('valid date: 13/13/13', () => {
  expect(isDate('13/13/13')).toBe(false);
});

/**
 * Test for valid hex color:
 * 
 * NEED: 2 true and 2 false
 */
test('valid hex code: #123', () => {
  expect(isHexColor('#123')).toBe(true);
});
test('valid hex code: #1234', () => {
  expect(isHexColor('#1234')).toBe(false);
});
test('valid hex code: #A21A22', () => {
  expect(isHexColor('#A21A22')).toBe(true);
});
test('valid hex code: #AAAAAAA', () => {
  expect(isHexColor('#AAAAAAA')).toBe(false);
});
