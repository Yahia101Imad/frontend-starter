export function isEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

export function isEmpty(value) {
  return value.trim() === "";
}