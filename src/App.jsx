import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Para from './components/Para'

function App() {


  const [data,setData] = useState("");


  return (
    <div>
      <Para data ={data} setData={setData}/>
      {/* <Data data = {data}/> */}
    </div>
  )
}

// function Data({data})
// {
//    return <div>
//     {data!="" ? <div>

//       {data}

//       </div> : null}
//    </div>
// }

export default App
