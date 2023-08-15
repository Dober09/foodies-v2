import {nav} from "../data.js"
export default function MenuOption(){
    const info = nav.map(item => 
        <div>
            <div>
                <img src={item.image} alt=""   />
            </div>
        </div>
        );
    return(
        <div>
            {info}
        </div>
    )

}