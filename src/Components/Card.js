import pic from "../images/pexels-photo-2280545.jpeg";
export default function Card(){
    return (
        <div className="text-black flex flex-col  py-3 px-4">
            <div>
                <img src={pic} alt="pancake" className="w-24"/>
            </div>
            <div className="self-center mt-1">
                <p>Pancake</p>
            </div>
            <div className="self-end my-1">
                <p>R <span>140.00</span> </p>
            </div>
            <button className="bg-blue-500 w-20 capitalize font-semibold text-white rounded-sm shadow-md self-end">order</button>
        </div>
    )
}