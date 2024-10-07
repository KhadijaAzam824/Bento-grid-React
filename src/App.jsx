import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (

    <div className="h-screen w-full flex items-center justify-center bg-pink-400">
    

     <div className="grid 
                    h-full
                    w-full
                    grid-cols-4
                    grid-rows-3
                    gap-3
                    p-20
                    xl:m-64
                    lg:m-32
                    md:m-16">
 {/* ......................... */}
    <div className="col-span-1
                    row-span-1
                    rounded-xl
                    bg-gradient-to-r
                    from-green-500
                    to-green-700
                    ">
    </div>  

    <div className="col-span-1
                    row-span-1
                    rounded-xl
                    bg-gradient-to-r
                    from-rose-300
                    via-fuchsia-400
                    to-indigo-600">
    </div>  

    <div className="col-span-2 
                    row-span-2
                    rounded-xl
                    bg-gradient-to-r
                    from-green-300
                    via-blue-500
                    to-purple-600">
    </div>  

    <div className="col-span-2
                    row-span-1
                    rounded-xl
                    bg-gradient-to-r
                    from-pink-500
                    via-red-500
                    to-yellow-500">
      
    </div>
{/*........................................... */}
    <div className="col-span-1
                    row-span-1
                    rounded-xl
                    bg-gradient-to-r
                    from-pink-500
                    via-red-500
                    to-yellow-500">
    </div>
    
    <div className="col-span-2
                    row-span-1
                    rounded-xl
                    bg-gradient-to-r
                    from-rose-300
                    to-red-500">
    </div>  

     <div className="col-span-1
                    row-span-1
                    rounded-xl
                    bg-gradient-to-r
                    from-fuchsia-500
                    to-pink-600">
    </div>            
{/* ................................................... */}
     <div className="col-span-2
                    row-span-1
                    rounded-xl
                    bg-gradient-to-r
                    from-fuchsia-600
                    via-blue-500
                    to-rose-200">
    </div>   

     <div className="col-span-1
                    row-span-1
                    rounded-xl
                    bg-gradient-to-r
                    from-fuchsia-600
                    via-orange-500
                    to-rose-200">
    </div>   

     <div className="col-span-1
                    row-span-1
                    rounded-xl
                    bg-gradient-to-r
                    from-fuchsia-200
                    via-orange-500
                    to-rose-700">
    </div>                        
      
    </div>                  

      
      
       
    </div>
  )
}

export default App
