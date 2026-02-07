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
 * @param zeroText - Text to display when count is 0 (e.g., "No items") [optional]
 * @param plural - Custom plural form of the word (defaults to singular + 's') [optional]
 * @param hideCount - Whether to omit the count in the output string [optional]
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
 * // Returns "No apples" when count is 0
 * pluraliseWithCount(0, "apple", "No apples")
 *
 * @example
 * // Returns "2 children" with custom plural
 * pluraliseWithCount(2, "child", undefined, "children")
 *
 * @example
 * // Returns "apples" (count hidden)
 * pluraliseWithCount(2, "apple", undefined, undefined, true)
 */
export function pluraliseWithCount(
  count: number,
  singular: string,
  zeroText?: string, // Optional: Text to use for zero count
  plural?: string, // Optional: Custom plural form of the word
  hideCount?: boolean // Optional: Whether to hide the count in the output
) {
  // Default plural form is singular + 's' if not provided
  if (!plural) {
    plural = `${singular}s`;
  }

  // Special case for zero count
  if (count === 0) {
    if (zeroText) {
      return zeroText;
    }
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
