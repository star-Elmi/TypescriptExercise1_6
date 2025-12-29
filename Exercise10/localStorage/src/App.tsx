
import React from 'react'
import useLocalStorage from './useLocalStorage.tsx'
import useSettingStorage from './useSettingStorage.tsx'
import useNumberLocalstorage from './useNumberLocalstorage.tsx'

interface user{
  name : string ,
  email : string
}

interface useSettingStorage{
  languange : string ,
  notifocation : boolean
}

interface useNumberLocalstorage{
  age : number

}

function App() {

  // const [name ,setname ] = useLocalStorage <string> ("name" , "istar")
  // const[age ,setage] = useLocalStorage<number>("age" , 21)
  // const [user, setUser] = useLocalStorage<user>("user", {name : "Istarliin", email : "Istar@gmail.com"})
 const [age , setAge]=  useNumberLocalstorage<useNumberLocalstorage>("age" , 21)

  const [settings , setSettings] = useSettingStorage<useSettingStorage>("settings" , {languange : "Somali" , notifocation : true})

  return (
    <>
     {/* <h1>Hello Macaanee 😘💋</h1>
     <button onClick={()=> setname(name)}>change name</button>
     <button onClick={()=> setUser({name : "istar", email: "istar@gmail.com"})}>change user</button>
      <p>name : {name} </p>
      <p>age : {age} </p>
      <p>user name : {user.name} </p>
      <p>user email : {user.email} </p> */}


      <p>age {age}</p>
      <p>language {settings.languange}</p>
      <p>notification {settings.notifocation.toString()}</p>

     {/* { setUser({name : "istar", email: "istar@gmail.com"})} */}
    </>
  )
}

export default App
