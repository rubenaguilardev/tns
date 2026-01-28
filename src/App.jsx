import { useState } from "react"
import Die from "./components/Die"
import { nanoid } from 'nanoid'

const App = () => {

  const [dice, setDice] = useState(generateAllNewDice())

  function generateAllNewDice() {
    return new Array(10)
      .fill(0)
      .map(() => (
          {
            value: Math.ceil(Math.random() * 6), 
            isHeld: false,
            id: nanoid()
          }
      ))
  }

  function rollDice() {
    setDice(oldDice => oldDice.map(die => die.isHeld ? die : {...die, value: Math.ceil(Math.random() * 6)}))
  }

  function hold(id) {
    setDice(oldDice => oldDice.map(die => die.id === id ? {...die, isHeld: !die.isHeld} : die))
  }
  
  const diceElements = dice.map(dieObj => <Die key={dieObj.id} {...dieObj} hold={hold} />)

  return (
    <main className=" flex justify-center mt-10">
      <div className="max-w-80 flex flex-col bg-[#F5F5F5] p-9 rounded-[10px] shadow-2xl">
        <div className="text-center mb-7">
          <h1 className="font-bold text-[1.6rem] tracking-tight">Tenzies</h1>
          <p className="text-[#4A4E74] font-['Inter']">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        </div>
        <div className="grid grid-cols-5 grid-rows-2 gap-4.5">
          {diceElements}
        </div>
        <div className="flex justify-center mt-6">
          <button 
            onClick={rollDice}
            className="h-9 w-24 text-white font-bold bg-[#5035FF] rounded-sm cursor-pointer shadow-lg"
          >
            Roll
          </button>
        </div>
      </div>
      
    </main>
  )
}

export default App