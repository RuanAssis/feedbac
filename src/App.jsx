
import { useState } from "react"
import { CardInicial } from "./components/Cardinicial"
import { CardFinal} from "./components/Cardinicial"

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