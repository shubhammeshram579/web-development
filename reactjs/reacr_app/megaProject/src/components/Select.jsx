import React ,{useId} from 'react'

function Select({
    options,
    label,
    classname,
    ...props
},ref) {
    const id = useId();

  return (
    <div className='w-full'
    >{label && <label htmlFor={id} className=''></label>}
    <select {...props} id={id} ref={ref} className={`py-3 rounded-lg bg-white
     text-black outline-none focus:bg-gray-50 
     duration-200 border border-gray-200 w-full 
     ${classname}`}>
        {options?.map((Option) => (
            <option key={Option} value={Option}>

            </option>
        ))}

    </select>
    
    </div>
  )
}

export default React.forwardRef(Select)