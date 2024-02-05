import Image from "next/image"

const greetMe = "Hello Everyone"


export default function Main() {
    
  return (
    <div className="grid grid-cols-3 mt-10">
        <div>
            <Image src='/sea.jpg' alt="Breakfast" width={600} height={700}/>
        </div>

        <div className="text-3xl bg-slate-950 text-white flex flex-col justify-center items-center">
        <h2>Home page {greetMe}</h2>
        <h1>Fundametals of Reactjs</h1>
        </div>

        <div>
            <Image src='/skate.jpg' alt="Breakfast" width={600} height={500}/>
        </div>
        
    </div>
  )
}
