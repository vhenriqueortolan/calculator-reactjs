import { createContext } from "react";
import { useState } from "react";

export const MathContext = createContext('')

export const MathContextProvider = ({children})=>{
const [onScreen, setOnScreen] = useState('0')
const [isResult, setIsResult] = useState(false)
const [amount, setAmount] = useState('')
const [isOperated, setIsOperated] = useState(false)

function numButtonHandler(e){
    const d = e.target.value
        if (isResult && !isOperated){
          let provOnScreen = d
          setOnScreen(provOnScreen)
          setIsResult(false)
          return
        }
        if(d === "."){
          let checkOnScreen = onScreen.split('').includes('.')
          if (checkOnScreen){
            return
          } else {
            let provOnScreen = `${onScreen}${d}`
            setOnScreen(provOnScreen)
            return
          }
        }
        if (onScreen === '0'){
          let provOnScreen = d
          setOnScreen(provOnScreen)
          return
        }
        if (onScreen.split('').length <= 8){
          let provOnScreen = `${onScreen}${d}`
          setOnScreen(provOnScreen)
        }
  }

function operatorButtonHandler(e){
    const d = e.target.value
      if (!isOperated && !isResult){
        let provAmount = `${onScreen}${d}`
        setAmount(provAmount)
        setOnScreen('0')
        setIsOperated(true)
      }
      if (isOperated && !isResult && d !== "="){
        if (onScreen === '0'){
          let arrAmount = amount.split('')
          let arrAmountPop = arrAmount.pop()
          let strAmount = arrAmount.join('')
          let provAmount = `${strAmount}${d}`
          setAmount(provAmount)
          return
        }
        let provAmount = `${amount}${onScreen}`
        let calculate = Function("return " + provAmount)()
        let calculated = `${calculate}${d}`
        setAmount(calculated)
        setOnScreen('0')
      }

      if (isOperated && !isResult && d === "="){
        let provAmount = `${amount}${onScreen}`
        let calculate = Function("return " + provAmount)()
        setAmount('')
        setOnScreen(calculate)
        setIsResult(true)
        setIsOperated(false)
      }

      if (!isOperated && isResult && d !== "=" && onScreen !== '0'){
        let provAmount = `${onScreen}${d}`
        setAmount(provAmount)
        setOnScreen('0')
        setIsOperated(true)
        setIsResult(false)
      }

      if (!isOperated && isResult && d !== "=" && onScreen === '0'){
        let provAmount = `${amount}${d}`
        setAmount(provAmount)
        setOnScreen('0')
        setIsOperated(true)
        setIsResult(false)
      }
  }

function clear() {
    setIsOperated(false)
    setIsResult(false)
    setOnScreen('0')
    setAmount('')
  }

return <MathContext.Provider value={{numButtonHandler, operatorButtonHandler, clear, amount, onScreen}} >
    {children}
  </MathContext.Provider>
}