function isValidJSVariableName(name) {
  const isValidPattern = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(name);

  if (!isValidPattern) {
    return false;
  }

  try {
    new Function(`var ${name};`);
  } catch (e) {
    return false;
  }

  return true;
}

function extractWordsInsideBraces(text) {
  const regex = /\{\{([^}]+)\}\}/g;
  let matches;
  const results = [];

  while ((matches = regex.exec(text)) !== null) {
    results.push(matches[1].trim());
  }

  return results;
}

export const HandlerUtils = {
  isValidJSVariableName,
  extractWordsInsideBraces,
};

