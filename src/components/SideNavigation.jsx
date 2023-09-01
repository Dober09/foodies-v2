import { Outlet,Link } from "react-router-dom"
import { sidemenu } from "../sidemenu"
export default function SideNavigation(){
    const menu = sidemenu.map((item)=>
        <div className=" mx-auto py-4" key={item.id}>
    
            <Link to={item.name}>
                <img src={item.image} alt={item.name} width={45}/>
            <p className="font-ubuntu font-semibold">{item.name}</p>
            </Link>
        </div>
    )
    return (
        <div className="bg-darkpink sh mt-14 w-40 rounded-r-lg shadow-2xl shadow-zinc-100 mt:flex mt:flex-col  hidden h-2/3 ">
            {menu}
        </div>
    )
}