/**
 * Checks if given value is empty (=== '', === null, === undefined).
 */
export const isEmpty = (value: any): boolean => {
  return value === '' || value === null || value === undefined
}
/**
 * Filter out undefined, if equal to undefined, assign an initial value to the corresponding type
 * (number: 0, string: '', boolean: false, array: [], object: {}).
 */
export const filterUndefined = <T extends number | string | boolean | object>(
  value: T | undefined,
  objectType?: 'array' | 'object'
): T => {
  if (value === undefined) {
    const valueType = typeof value
    let newValue: any
    switch (valueType) {
      case 'number':
        newValue = 0
        break
      case 'string':
        newValue = ''
        break
      case 'boolean':
        newValue = false
        break
      case 'object':
        if (objectType === 'array') {
          newValue = []
        } else {
          newValue = {}
        }
        break
    }
    return newValue
  } else {
    return value
  }
}
