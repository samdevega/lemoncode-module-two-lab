const { ObjectOperator } = require('./ObjectOperator')

describe('ObjectOperator', () => {
  const objectOperator = ObjectOperator()

  describe('clone', () => {
    it('should give a copy of an input object', () => {
      const source = { propA: 'A', propB: 'B' }
      expect(objectOperator.clone(source)).not.toBe(source)
      expect(objectOperator.clone(source)).toEqual({ propA: 'A', propB: 'B' })
    })
  })

  describe('merge', () => {
    describe('combine two objects', () => {
      it('retreiving its properties', () => {
        const source = { propA: 'A', propB: 'B' }
        const target = { propC: 'C', propD: 'D' }
        expect(objectOperator.merge(source, target)).toEqual({
          propA: 'A',
          propB: 'B',
          propC: 'C',
          propD: 'D'
        })
      })
  
      it('prevailing properties of the first one in case of collision', () => {
        const source = { propA: 'AA', propB: 'AB' }
        const target = { propB: 'BB', propC: 'BC' }
        expect(objectOperator.merge(source, target)).toEqual({
          propA: 'AA',
          propB: 'AB',
          propC: 'BC',
        })
      })
    })
  })
})
