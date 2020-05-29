const Console = () => {
  const log = (message) => console.log(message)

  return {
    log,
  }
}

module.exports = { Console }
