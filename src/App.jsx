import { useState } from "react"
import Die from "./components/Die"

const App = () => {

  const [dice, setDice] = useState(generateAllNewDice())

  function generateAllNewDice() {
    return new Array(10)
      .fill(0)
      .map(() => Math.ceil(Math.random() * 6))
  }
  
  const diceElements = dice.map(num => <Die value={num} />)

  return (
    <main className="max-w-80 flex flex-col bg-[#F5F5F5] p-9 rounded-[10px]">
      <div className="text-center mb-7">
        <h1 className="font-bold text-[1.6rem] tracking-tight">Tenzies</h1>
        <p className="text-[#4A4E74] font-['Inter']">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      </div>
      <div className="grid grid-cols-5 grid-rows-2 gap-4.5">
        {diceElements}
      </div>
    </main>
  )
}

export default App