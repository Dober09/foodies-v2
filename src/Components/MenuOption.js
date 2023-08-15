import {nav} from "../data.js"

export default function MenuOption(){
    const info = nav.map(item => 
        <div key={item.id} className="hidden">
            <div className="bg-red-400 ">
                <p>{item.name}</p>
                <img src={item.image} alt={item.name} />
            </div>
        </div>
        );
    return(
        <div>
            {info}
        </div>
    )

}