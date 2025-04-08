import iconStar from "./assets/icon-star.svg"
import ilustracionThankYou from "./assets/illustration-thank-you.svg"
import { useState } from "react"

export function App() {
  const [submited, setSubmited] = useState(false)
  const [rateNote, setRateNote] = useState(0)

  function handleSubmit() {
    if (rateNote !== 0) {
      setSubmited(true)
      return
    }
    
    alert("Please, choose a rate button")
  }


  function handleChangeRateNote(value){
    setRateNote(value)
  }

  return(
    submited === false ?(
      <div className="bg-radial-gradient text-white rounded-2xl p-6 max-w-103 font-overpass">
      <div className="bg-dark-blue w-fit p-4 rounded-full mb-4">
        <img src={iconStar} alt="icon star" /> 
      </div>

      <h1 className="text-2xl font-bold mb-2.5">How did we do?</h1>
        
        <p className="text-sm text-light-grey leading-1 mb-6">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>

        <div className="flex justify-between mb-6">
          <button className="bg-dark-blue w-10.5 h-10.5 rounded-full text-sm text-medium-grey focus:bg-medium-grey focus:text-white font-bold" onClick={() => handleChangeRateNote(1)}>1</button>
          <button className="bg-dark-blue w-10.5 h-10.5 rounded-full text-sm text-medium-grey focus:bg-medium-grey focus:text-white font-bold" onClick={() => handleChangeRateNote(2)}>2</button>
          <button className="bg-dark-blue w-10.5 h-10.5 rounded-full text-sm text-medium-grey focus:bg-medium-grey focus:text-white font-bold" onClick={() => handleChangeRateNote(3)}>3</button>
          <button className="bg-dark-blue w-10.5 h-10.5 rounded-full text-sm text-medium-grey focus:bg-medium-grey focus:text-white font-bold" onClick={() => handleChangeRateNote(4)}>4</button>
          <button className="bg-dark-blue w-10.5 h-10.5 rounded-full text-sm text-medium-grey focus:bg-medium-grey focus:text-white font-bold" onClick={() => handleChangeRateNote(5)}>5</button>
        </div>

        <button onClick={handleSubmit} className="bg-orange w-full py-3 rounded-3xl uppercase font-bold tracking-1">Submit</button>
      </div>
    ) : (
      <div className="bg-radial-gradient text-white rounded-2xl p-6 max-w-103 font-overpass text-center">
       <img className="mx-auto mb-6" src="[ilustrationThankYou]" alt="ilustration Thank You" />

       <p className="bg-dark-blue text-orange w-fit mx-auto py-1.25 px-3 rounded-3xl mb-6">You selected 4 out of 5</p>

       <h1 className="text-2xl font-bold mb-2.5">Thank You!</h1>

       <p className="text-sm text-light-grey leading-1">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
      </div>
    )

    
  )
}