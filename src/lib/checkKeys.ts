function checkkeys(requiredKeys: string[], object: {}): string[] {
  const missingKeys = requiredKeys.filter((key) => !object.hasOwnProperty(key));
  return missingKeys;
}

export default checkkeys