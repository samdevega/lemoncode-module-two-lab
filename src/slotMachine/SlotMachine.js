const MachineMessage = {
  LOSE: `Good luck next time!!`,
  WIN: `Congratulations!!!. You won <coins_number> coins!!`,
}

const SlotMachine = (aConsole, someCoins) => {
  const console = aConsole
  let coins = someCoins

  const winningRoulette = () => Math.random() >= 0.5

  const isPrized = () => winningRoulette() && winningRoulette() && winningRoulette()

  const lose = () => {
    console.log(MachineMessage.LOSE)
    coins++
  }

  const win = () => {
    console.log(MachineMessage.WIN.replace('<coins_number>', coins))
    coins = 0
  }

  const play = () => isPrized() ? win() : lose()

  const prize = () => coins

  return {
    play,
    prize,
  }
}

module.exports = { MachineMessage, SlotMachine }
