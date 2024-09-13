function sanitizeInput(input) {
  return DOMPurify.sanitize(input);
}

function isValidSearchInput(mainInput, minLength = 0) {
  const regex = /^[a-zA-Z0-9\s]+$/; // Exemple de validation pour autoriser uniquement les lettres, chiffres et espaces
  return mainInput.length > minLength && regex.test(mainInput);
}
