import React, { useState } from 'react'


interface ContactFormProps {
 onSubmit: (value: string) => void;
}
const EmailForm=({onSubmit}: ContactFormProps) => {
    const[input, setInput] = useState("")


    const handlesubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
       
        onSubmit(input);
    }
  return (
  <>

  <form onSubmit={handlesubmit}>
    <input type="text"  value={input} onChange={(e) => setInput(e.target.value)} />
    <button type="submit">Submit</button>
  </form>
  
  </>
  )
}

export default EmailForm