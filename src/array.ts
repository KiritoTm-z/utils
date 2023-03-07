import type { Nullable, Arrayable } from './types'

/**
 * Convert `Arrayable<T>` to `Array<T>`
 *
 * @category Array
 */
export function convert2Array<T>(array?: Nullable<Arrayable<T>>): Array<T> {
  array = array ?? []
  return Array.isArray(array) ? array : [array]
}

/**
 * Unique an Array according to the conditional function
 *
 * @category Array
 */
export function uniqueArrayByFn<T>(array: readonly T[], conditFn: (a: any, b: any) => boolean): T[] {
  return array.reduce((prev: T[], curr: any) => {
    const index = prev.findIndex((item: any) => conditFn(curr, item))
    if (index === -1) prev.push(curr)
    return prev
  }, [])
}