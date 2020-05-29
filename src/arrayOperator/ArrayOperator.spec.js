const { ArrayOperator } = require('./ArrayOperator')

describe('ArrayOperator', () => {
  const arrayOperator = ArrayOperator()

  describe('head', () => {
    describe('should throw an exception', () => {
      it('when receives a null object', () => {
        const result = () => arrayOperator.head(null)
        expect(result).toThrow('Invalid object')
      })
      
      it('when receives an undefined object', () => {
        const invalid = undefined
        const result = () => arrayOperator.head(invalid)
        expect(result).toThrow('Invalid object')
      })
      
      it('when receives an empty array', () => {
        const result = () => arrayOperator.head([])
        expect(result).toThrow('Empty array')
      })
    })
  
    describe('should give the first element', () => {
      it('when receives a non empty array', () => {
        expect(arrayOperator.head(['foo', 'bar'])).toEqual('foo')
      })
    })
  })

  describe('tail', () => {
    describe('should throw an exception', () => {
      it('when receives a null object', () => {
        const result = () => arrayOperator.tail(null)
        expect(result).toThrow('Invalid object')
      })
      
      it('when receives an undefined object', () => {
        const invalid = undefined
        const result = () => arrayOperator.tail(invalid)
        expect(result).toThrow('Invalid object')
      })
      
      it('when receives an empty array', () => {
        const result = () => arrayOperator.tail([])
        expect(result).toThrow('Empty array')
      })
    })
  
    describe('should give all the elements except the first one', () => {
      it('when receives a non empty array', () => {
        expect(arrayOperator.tail(['foo', 'bar', 'foobar'])).toEqual(['bar', 'foobar'])
      })
    })
  })

  describe('init', () => {
    describe('should throw an exception', () => {
      it('when receives a null object', () => {
        const result = () => arrayOperator.init(null)
        expect(result).toThrow('Invalid object')
      })
      
      it('when receives an undefined object', () => {
        const invalid = undefined
        const result = () => arrayOperator.init(invalid)
        expect(result).toThrow('Invalid object')
      })
      
      it('when receives an empty array', () => {
        const result = () => arrayOperator.init([])
        expect(result).toThrow('Empty array')
      })
    })
  
    describe('should give all elements except the last', () => {
      it('when receives a non empty array', () => {
        expect(arrayOperator.init(['foo', 'bar', 'foobar'])).toEqual(['foo', 'bar'])
      })
    })
  })

  describe('last', () => {
    describe('should throw an exception', () => {
      it('when receives a null object', () => {
        const result = () => arrayOperator.last(null)
        expect(result).toThrow('Invalid object')
      })
      
      it('when receives an undefined object', () => {
        const invalid = undefined
        const result = () => arrayOperator.last(invalid)
        expect(result).toThrow('Invalid object')
      })
      
      it('when receives an empty array', () => {
        const result = () => arrayOperator.last([])
        expect(result).toThrow('Empty array')
      })
    })
  
    describe('should give the last element', () => {
      it('when receives a non empty array', () => {
        expect(arrayOperator.last(['foo', 'bar', 'foobar'])).toEqual('foobar')
      })
    })
  })

  describe('concat', () => {
    it('should join two arrays', () => {
      expect(arrayOperator.concat(['foo', 'bar'], ['foobar'])).toEqual(['foo', 'bar', 'foobar'])
    })
  })

  describe('dynamicConcat', () => {
    it('should join a dynamic number of arrays', () => {
      expect(arrayOperator.dynamicConcat(['foo', 'bar'], ['foobar'], ['fizz', 'buzz'])).toEqual(['foo', 'bar', 'foobar', 'fizz', 'buzz'])
    })
  })
})
