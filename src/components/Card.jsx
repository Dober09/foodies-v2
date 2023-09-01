import cake from "../assets/images/pexels-photo-1854652.jpeg"
export default function Card(){
    return (
        <div className="bg-lightpink w-48 rounded-md overflow-auto h-48 shadow-lg shadow-slate-100 mx-auto">
            <div>
                <img src={cake} alt="cake" className="w-full object-cover h-28 "/>
                <div className="flex font-ubuntu items-center justify-around mt-2 text-xl">
                    <div>
                        <p className="uppercase">cake</p>
                    </div>
                    <div>
                        <p>R 200</p>
                    </div>
                </div>
                < div className=" text-center mt-2">
                    <button className="capitalize bg-red-700 w-28 py-1 font-ubuntu rounded-md">add to card</button>
                </div>
            </div>
        </div>
    )
}