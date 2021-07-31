/*
* Validates an email address using the regex from here
* https://www.regular-expressions.info/email.html. The regex is almost compatible with RFC 5322 and
* matches 99.9% of all emails in use.
*/
function validateEmail(email: string) {
  const emailRegex =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  return emailRegex.test(email);
}

export { validateEmail };
