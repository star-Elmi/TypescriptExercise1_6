

// import AgeForm from "./AgeForm";
// import ContactForm from "./ContactForm";

// import EmailForm from "./EmailForm";
import useState from  'react'
interface User{
  name : string,
  email : string,
  phone : string
}

function App() {

  const [user ,setUser] = useState([])

  useEffect(()=>{
    async function fetchUser()
    const res =  await fetch('https://jsonplaceholder.typicode.com/users')
    const data : User[]= await res.json()
  })
  // const handlesubmit = (data: any) => {
  //   console.log(data);
  // };

  // const handleAgeSubmit = (ageData: number) => {
  //   ageData > 18 ? console.log("You are an adult") : console.log("You are a minor");
  //   console.log(ageData);
  // }

  // const handleContactformSubmit = (data: { name: string; email: string }) => {
  //   console.log("Name:", data.name);
  //   console.log("Email:", data.email);
  // };


  return (
    <>

    {User[0].name}
    {/* <h1>Hello Macaanee😘💋</h1> */}
     {/* <span>Subax Wanaagsan Istar Qurux😍✌️</span>
    <EmailForm  onSubmit={handlesubmit} />
   <AgeForm onsubmit={handleAgeSubmit} />
   <ContactForm onSubmit={handleContactformSubmit } /> */}
  

      
    </>
  )
}

export default App
