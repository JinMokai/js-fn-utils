

export const isBoolean = (value: any): value is boolean => typeof value === 'boolean'

export const isNumber = (value: any): value is number => typeof value === 'number'

export const isString = (value: any): value is string => typeof value === 'string'

export const isUndefined = (value: any): value is undefined => value === undefined

export const isArray = (value: any): value is any[] => Array.isArray(value)

export const isObject = (value: any): value is object => {
    if (!value) 
        return false
    if (isArray(value)) 
        return false
  return value !== null && typeof value === 'object'
}