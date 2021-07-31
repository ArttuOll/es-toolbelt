/*
 * Validates an URL using JavaScript's built-in URL constructor, which validates the URL-strings it
 * is given. The validation is based on the URL Standard. More info here
 * https://developer.mozilla.org/en-US/docs/Web/API/URL/URL
 */
function validateUrl(url: string) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}
