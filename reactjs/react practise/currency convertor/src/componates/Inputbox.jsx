import React ,{useId} from 'react'


// inpute cards
function Inputbox({
    // data lables
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = [],
    amountDisable = false,
    currencyDisable = false,
    className = "",
}
) {
    // useId hooks
    const amountInputId = useId()


  return (
    // input card
    <div className='flex items-center justify-center gap-10'>
        <div className='flex items-start justify-center flex-col'>
            <label className='font-bold  text-2xl uppercase py-3' htmlFor={amountInputId}> {label} </label>
            <input
            className='px-10 py-3 text-[20px]'
            id={amountInputId}
            type="number"
            placeholder='amount'
            disabled={amountDisable}
            value={amount}
            onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}/>

        </div>
        {/* select card */}
        <div>
            <p className='font-bold text-1xl uppercase py-3'>currency type</p>
            <select
            className='px-10 py-3 text-1xl uppercase'
            value={selectCurrency}
            onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
            >
                {currencyOptions.map((currency)=>(
                    <option key={currency} value={currency}>{currency}</option>
                ))}
            </select>
        </div>
    </div>
  )
}

export default Inputbox