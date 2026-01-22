export function detectErrors(text) {
  const errors = [];

  const rules = [
    {
      pattern: /\bi\b/g,
      message: "Pronoun 'I' should be capitalized",
      suggestion: "I"
    },
    {
      pattern: /\bteh\b/g,
      message: "Common spelling mistake",
      suggestion: "the"
    },
    {
      pattern: /\s{2,}/g,
      message: "Extra spaces detected",
      suggestion: "single space"
    }
  ];

  rules.forEach(rule => {
    let match;
    while ((match = rule.pattern.exec(text)) !== null) {
      errors.push({
        index: match.index,
        length: match[0].length,
        message: rule.message,
        suggestion: rule.suggestion
      });
    }
  });

  return errors;
}
