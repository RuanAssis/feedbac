import iconStar from "./assets/icon-star.svg"

export function App() {
  return(
    <div className="bg-radial-gradient text-white rounded-2xl p-6 max-w-103 font-overpass">
     <div className="bg-dark-blue w-fit p-4 rounded-full mb-4">
      <img src={iconStar} alt="icon star" /> 
     </div>

     <h1 className="text-2xl font-bold mb-2.5">How did we do?</h1>
      
      <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>

      <div>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
      </div>

      <button>Submit</button>
    </div>
  )
}