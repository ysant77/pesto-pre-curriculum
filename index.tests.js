const {
    describe,
    it,
    expect,
    matchers,
    add,
    subtract,
    multiply,
    divide
  } = require('./index')
  
  let executes = 0
  const noop = () => { executes += 1 }
  
  describe('describe', () => {
    it('executes a callback function', () => {
      const actual = describe('', noop)
  
      expect(executes).toBe(1)
    }) 
  })

  describe('expect', () => {
    it('returns an object', () => {
      const actual = expect(true)
  
      expect(typeof actual).toBe('object')
      expect(typeof actual.toBe).toBe('function')
    })
  })

  describe('matchers', () => {
    describe('toBe', () => {
      it('works', () => {
        const actual = matchers('1').toBe('1')
  
        expect(actual).toBe(true)
      })
    })
  })

  describe('add', () => {
    it('adds two numbers', () => {
      const result = add(1, 2)
      expect(result).toBe(3)
    })
  })
  
  describe('subract', () => {
      it('subracts two numbers', () => {
        const result = subtract(10, 2)
        expect(result).toBe(8)
      })
    })
  
    describe('multiply', () => {
      it('multiplies two numbers', () => {
        const result = multiply(5, 6)
        expect(result).toBe(30)
      })
    })
  
    describe('divide', () => {
      it('divides two numbers', () => {
        const result = divide(10, 2)
        expect(result).toBe(5)
      })
    })