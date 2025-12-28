
// import './App.css'

import Userproducts from "./Product"
import Users from "./User"

function App() {


  return (
    <>
     <Users name="Istar" isPermitted={true} />
      <Users name="Ali" isPermitted={false} />

      {/* <Userproducts name="Laptop" price={1500} /> */}
      <Userproducts name="Phone" price={800} isdescription={true} />
     
     
    </>
  )
}

export default App
