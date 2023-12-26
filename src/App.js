import { useContext } from 'react';
import './App.css';
import { MathContext } from './context/MathContext';

function App() {
 const {numButtonHandler, operatorButtonHandler, clear, amount, onScreen} = useContext(MathContext)
  return (
    <div className="App">
      <div className='InputView'>
        <span className='AmountView'>
          {amount}
        </span>
        <span className='DigitView'>
          {onScreen}
        </span >
      </div>
      <div className='Keyboard'>
        <button className='ButtonNum' onClick={(e)=>{numButtonHandler(e)}} value={'1'} >1</button>
        <button className='ButtonNum' onClick={(e)=>{numButtonHandler(e)}} value={'2'} >2</button>
        <button className='ButtonNum' onClick={(e)=>{numButtonHandler(e)}} value={'3'} >3</button>
        <button className='ButtonOperator' onClick={(e)=>{operatorButtonHandler(e)}} value={'*'} >x</button>
        <button className='ButtonNum' onClick={(e)=>{numButtonHandler(e)}} value={'4'} >4</button>
        <button className='ButtonNum' onClick={(e)=>{numButtonHandler(e)}} value={'5'} >5</button>
        <button className='ButtonNum' onClick={(e)=>{numButtonHandler(e)}} value={'6'} >6</button>
        <button className='ButtonOperator' onClick={(e)=>{operatorButtonHandler(e)}} value={'/'} >/</button>
        <button className='ButtonNum' onClick={(e)=>{numButtonHandler(e)}} value={'7'} >7</button>
        <button className='ButtonNum' onClick={(e)=>{numButtonHandler(e)}} value={'8'} >8</button>
        <button className='ButtonNum' onClick={(e)=>{numButtonHandler(e)}} value={'9'} >9</button>
        <button className='ButtonOperator' onClick={(e)=>{operatorButtonHandler(e)}} value={'-'} >-</button>
        <button className='ButtonBottom' onClick={(e)=>{numButtonHandler(e)}} value={'.'} >,</button>
        <button className='ButtonNum' onClick={(e)=>{numButtonHandler(e)}} value={'0'} >0</button>
        <button className='ButtonBottom' onClick={clear} value={'C'} >C</button>
        <button className='ButtonEqual ButtonBottom' onClick={(e)=>{operatorButtonHandler(e)}} value={'='} >=</button>
        <button className='ButtonSum ButtonOperator' onClick={(e)=>{operatorButtonHandler(e)}} value={'+'} >+</button>
      </div>
    </div>
  );
}

export default App;
