import iconStar from "../assets/icon-star.svg"

export function CardInicial({setSubmited, rateNote}){
    function handleSubmit() {
        if (rateNote !== 0) {
          setSubmited(true)
          return
        }
        
        alert("Please, choose a rate button")
      }

    return(
        <div className="bg-radial-gradient text-white rounded-2xl p-6 max-w-103 font-overpass">
            <div className="bg-dark-blue w-fit p-4 rounded-full mb-4">
            <img src={iconStar} alt="icon star" /> 
            </div>

            <h1 className="text-2xl font-bold mb-2.5">How did we do?</h1>
            
            <p className="text-sm text-light-grey leading-1 mb-6">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>

            <div className="flex justify-between mb-6">
               <Button value={1}/>
               <Button value={2}/>
               <Button value={3}/>
               <Button value={4}/>
               <Button value={5}/>
            </div>

            <button onClick={handleSubmit} className="bg-orange w-full py-3 rounded-3xl uppercase font-bold tracking-1 hover:bg-white hover:text-orange duration-400 cursor-pointer">Submit</button>
        </div>
    )
}