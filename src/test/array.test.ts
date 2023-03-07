import { describe, expect, it } from 'vitest'
import { convert2Array, uniqueArrayByFn } from '../array'

describe('convert2Array', () => {
  it.each([
    [undefined, []],
    [null, []],
    [false, [false]],
    [0, [0]],
    ['', ['']],
    [[], []],
    ['foo', ['foo']],
    [['foo'], ['foo']]
  ])('%s => %s', (input, expected) => {
    expect(convert2Array(input)).toEqual(expected)
    // expect(convert2Array(input)).toMatchInlineSnapshot()
    // expect(convert2Array(input)).toMatchSnapshot()
  })
})


describe('uniqueArrayBy', () => {
  const case1 = [
      {
        id: 1,
        name: '中'
      },
      {
        id: 2,
        name: '华'
      },
      {
        id: 3,
        name: '人'
      },
      {
        id: 4,
        name: '民'
      }
  ]
  const case2 = [
    {
      id: 1,
      name: '中'
    },
    {
      id: 2,
      name: '华'
    },
    {
      id: 3,
      name: '人'
    },
    {
      id: 2,
      name: '民'
    }
  ]
  const expected2 = [
    {
      id: 1,
      name: '中'
    },
    {
      id: 2,
      name: '华'
    },
    {
      id: 3,
      name: '人'
    }
  ]

  const conditFn = (a: any, b: any) =>  a.id === b.id

  it.each`
  a            |  expected
  ${case1}     |  ${case1}
  ${case2}     |  ${expected2}
`('', ({ a, expected }) => {
    expect(uniqueArrayByFn(a, conditFn)).toEqual(expected)
  })
})