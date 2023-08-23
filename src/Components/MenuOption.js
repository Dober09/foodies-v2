import {nav} from "../data.js"

export default function MenuOption(){
    const info = nav.map(item => 
        <div key={item.id} className="">
            <div className="m-2 py-1 flex flex-col items-center">
                <img src={item.image} alt={item.name}  className="w-16 h-16 bg-white p-2 rounded-sm"/>
                <p className="text-cyan-600 font-ubuntu text-sm font-semibold">{item.name.toUpperCase()}</p>
            </div>
        </div>
        );
    return(
        <div className="bg-lightblack border-y-2 border-r-2 border-y-white rounded-r-md absolute top-2">
            {info}
        </div>
    )

}