export const getKeysFromRecord = <T extends string, K extends Record<T, any>>(record: K): T[] => {
  return Object.keys(record) as T[]
}
