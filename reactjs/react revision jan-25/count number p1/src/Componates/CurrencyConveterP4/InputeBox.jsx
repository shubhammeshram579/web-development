
// In React, the useId hook is a function that generates unique IDs for elements within your components. It's particularly useful for:
import React , {useId} from 'react'


// custum input create
function InputeBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = [],
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {

    const amountInputId = useId();



  return (
    <div className='flex items-center justify-between flex-col gap-4'>
        <div className="card flex items-start justify-between flex-col gap-4 ">
            <label htmlFor={amountInputId}>{label}</label>
            <input type="number" id={amountInputId} placeholder='number' disabled={amountDisable}  value={amount} onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}/>
        </div>
        <div className="card2 flex items-center justify-between flex-col gap-4">
            <p>Currency type</p>
            <select value={selectCurrency} onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)} disabled={currencyDisable}>
                {currencyOptions.map((currency) => (
                    <option value={currency} key={currency}>{currency}</option>
                ))}
            </select>
        </div>
    </div>
  )
}

export default InputeBox