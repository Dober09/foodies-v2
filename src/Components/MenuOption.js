import {nav} from "../data.js"

export default function MenuOption(){
    const info = nav.map(item => 
        <div key={item.id} className="">
            <div className="m-2 py-1">
                <p>{item.name.toUpperCase()}</p>
                <img src={item.image} alt={item.name}  className="w-4 h-4"/>
            </div>
        </div>
        );
    return(
        <div className="bg-slate-700 absolute top-2">
            {info}
        </div>
    )

}