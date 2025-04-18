/**
 * Returns the singular or plural form of a word based on the count
 *
 * @param count - The numeric count to determine which form to use
 * @param singular - The singular form of the word
 * @param plural - The plural form of the word
 * @returns The appropriate form of the word (singular or plural)
 *
 * @example
 * // Returns "apple"
 * pluralise(1, "apple", "apples")
 *
 * @example
 * // Returns "apples"
 * pluralise(2, "apple", "apples")
 */
export function pluralise(count: number, singular: string, plural: string) {
  // Use plural form when count is not 1 (handles 0, 2, 3, etc.)
  return count === 1 ? singular : plural;
}

/**
 * Formats a count with the appropriate singular or plural form of a word
 *
 * @param count - The numeric count to determine which form to use
 * @param singular - The singular form of the word
 * @param hideCount - Whether to omit the count in the output string (defaults to false) [optional]
 * @param plural - The plural form of the word (defaults to singular + 's') [optional]
 * @returns A formatted string with the count and appropriate word form
 *
 * @example
 * // Returns "1 apple"
 * pluraliseWithCount(1, "apple")
 *
 * @example
 * // Returns "2 apples"
 * pluraliseWithCount(2, "apple")
 *
 * @example
 * // Returns "apples" (count hidden)
 * pluraliseWithCount(2, "apple", true)
 *
 * @example
 * // Returns "0 apples"
 * pluraliseWithCount(0, "apple")
 *
 * @example
 * // Returns "2 children"
 * pluraliseWithCount(2, "child", false, "children")
 */
export function pluraliseWithCount(
  count: number,
  singular: string,
  zeroText?: string, // Optional: Text to use for zero count
  plural?: string, // Optional: Custom plural form of the word
  hideCount?: boolean // Optional: Whether to hide the count in the output
) {
  if (zeroText) {
    return `${zeroText}`;
  }

  // Default plural form is singular + 's' if not provided
  if (!plural) {
    plural = `${singular}s`;
  }

  // Special case for zero count
  if (count === 0) {
    return hideCount ? `${plural}` : `${count} ${plural}`;
  }

  // Get the appropriate word form based on count
  const pluralised = pluralise(count, singular, plural);

  // Return with or without the count based on hideCount parameter
  if (hideCount) {
    return pluralised;
  }
  return `${count} ${pluralised}`;
}
