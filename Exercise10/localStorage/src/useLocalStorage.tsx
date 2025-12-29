import { useEffect, useState } from "react"

function useLocalStorage <T>(key: string , initialValue : T) :[T, (value :T) => void]{

    const [value ,setVaue]= useState<T>(()=>{
        const stored = localStorage.getItem(key)
        return stored ? JSON.parse(stored) as T : initialValue
    })

    useEffect (()=>{
        localStorage.setItem(key, JSON.stringify(value) )
    }, [key, value] )

    return [value, setVaue]
}

export default useLocalStorage

