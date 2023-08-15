import menu from "../img/menu.png";
export default function Menubtn(){
    return (
        <div className=" bg-blue-700  w-10 p-3 rounded-md shadow-sm">
            <img src={menu} alt="menu" className="w-6"/>
        </div>
    )
}