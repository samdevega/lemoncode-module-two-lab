const ArrayOperator = () => {
  const validate = (array) => {
    if (array === null || array === undefined)
      throw('Invalid object')
    if (array.length === 0)
      throw('Empty array')
  }

  const head = array => {
    validate(array)
    const [head, ...tail] = array
    return head
  }

  const tail = array => {
    validate(array)
    const [head, ...tail] = array
    return tail
  }

  const init = array => {
    validate(array)
    return array.slice(0, array.length - 1)
  }

  const last = array => {
    validate(array)
    return array[array.length - 1]
  }

  const concat = (arrayA, arrayB) => [...arrayA, ...arrayB]

  const dynamicConcat = (...arrays) => arrays.reduce((accumulator, current) => accumulator.concat(current))

  return {
    head,
    tail,
    init,
    last,
    concat,
    dynamicConcat,
  }
}

module.exports = { ArrayOperator }
