const { Console } = require('./Console')
const { MachineMessage, SlotMachine } = require('./SlotMachine')

describe('SlotMachine', () => {
  describe('with an initial ammount', () => {
    const console = Console()
    const spyConsole = jest.spyOn(console, 'log')
    const coins = 10
    
    describe('when player wins', () => {      
      beforeEach(() => {
        jest.spyOn(global.Math, 'random').mockReturnValue(0.5)
      })
      
      it('is congratulated', () => {
        const slotMachine = SlotMachine(console, coins)
        
        slotMachine.play()
        
        expect(spyConsole).toHaveBeenCalledWith(MachineMessage.WIN.replace('<coins_number>', coins))
      })
      
      it('machine spits out the coins', () => {
        const slotMachine = SlotMachine(console, coins)

        slotMachine.play()
        
        expect(slotMachine.prize()).toBe(0)
      })
      
      afterEach(() => {
        global.Math.random.mockRestore()
      })
    })
    
    describe('when player loses', () => {
      beforeEach(() => {
        jest.spyOn(global.Math, 'random').mockReturnValue(0.4)
      })
      
      it('is sympathized', () => {
        const slotMachine = SlotMachine(console, coins)
        
        slotMachine.play()
        
        expect(spyConsole).toHaveBeenCalledWith(MachineMessage.LOSE)
      })
      
      it('machine increases its prize', () => {
        const slotMachine = SlotMachine(console, coins)

        slotMachine.play()

        expect(slotMachine.prize()).toBe(11)
      })

      afterEach(() => {
        global.Math.random.mockRestore()
      })
    })
  })
})
