const ObjectOperator = () => {
  const clone = source => ({ ...source })

  const merge = (source, target) => ({ ...target, ...source })

  return {
    clone,
    merge,
  }
}

module.exports = { ObjectOperator }
