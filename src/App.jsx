import { useState } from "react"
import { CardInicial } from "./components/CardInicial"
import { CardFinal} from "./components/CardFinal"

export function App() {
  const [submited, setSubmited] = useState(false)
  const [rateNote, setRateNote] = useState(0)

  

  return(
    submited === false ?(
      <CardInicial setSubmited={setSubmited} rateNote={rateNote} setRateNote={setRateNote}/>
    ) : (
      <CardFinal rateNote={rateNote}/>
    )

    
  )
}