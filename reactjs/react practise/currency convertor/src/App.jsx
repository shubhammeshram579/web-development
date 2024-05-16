import { useState } from 'react'
import useCurrencyhook from "./hooks/currency" 
import Inputbox from "./componates/Inputbox.jsx"


function App() {
  // defind varible
  const [amount, setAmount] = useState(0)
  const [from , setFrom] = useState("usd")
  const [to , setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)


  // currency data 
  const currencyInfo = useCurrencyhook(from)
  const options = Object.keys(currencyInfo)


  // rotetion currency funcnality
  const swap = () =>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  // currency amount conver 
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
   <>   
   <div className='h-[500px] w-[800px] mt-[10%] rounded-lg'>
   <div className='flex items-center justify-center bg-zinc-400 rounded-lg flex-col'>
   <h1 className='text-center text-4xl uppercase mt-5 pb-10' >currency convertor</h1>

   {/* form */}
    <form onSubmit={(e)=>{
      e.preventDefault();
      convert()
    }}>


      {/* input tag */}
      <div>
        <Inputbox
          label="from"
          amount={amount}
          currencyOptions={options}
          onCurrencyChange={(currency)=> setFrom(currency)}
          selectCurrency={from}
          onAmountChange={(amount)=> setAmount(amount)}
          />
      </div>
      <div>

        {/* swap button */}
        <button className='bg-teal-600 py-2 px-5 mt-5 rounded-lg' type='button' onClick={swap}>
        <i className='text-3xl font-bold' class="fa-solid fa-retweet"></i>
        </button>
      </div>


      {/* select currency tag  */}
      <div>
        <Inputbox
        label="to"
        amount={convertedAmount}
        currencyOptions={options}
        onCurrencyChange={(currency) => setTo(currency)}
        selectCurrency={to}
        amountDisable />
      </div>


      {/* conver currency btn */}
      <button className='bg-teal-600 py-2 px-10 mt-5 rounded-lg mb-10 uppercase' type='submit' >
        convert {from.toLowerCase()} to {to.toLowerCase()}
      </button>
    </form>
   </div>
   </div>
   </>
   
  )
}

export default App
