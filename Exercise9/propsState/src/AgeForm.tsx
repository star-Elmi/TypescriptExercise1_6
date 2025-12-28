import React from 'react'
import { useState } from 'react'

interface AgeFormProps {
    onsubmit: (age: number) => void;
}

const AgeForm = ({onsubmit}: AgeFormProps) => {
    const [age , setAge] = React.useState<number | string>("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onsubmit(Number(age));
    }

 
  return (

 

     

    <form onSubmit={handleSubmit}>
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
        <button type="submit">Submit</button>

    </form>
  )
}

export default AgeForm