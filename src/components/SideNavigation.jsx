import { sidemenu } from "../sidemenu"
export default function SideNavigation(){
    const menu = sidemenu.map((item)=>
        <div className=" mx-auto py-4" key={item.id}>
    
            <a href="">
                <img src={item.image} alt={item.name} width={45}/>
            <p className="font-ubuntu font-semibold">{item.name}</p>
            </a>
        </div>
    )
    return (
        <div className="bg-slate-100 sh mt-6 w-40 rounded-r-lg shadow-2xl shadow-zinc-100 flex flex-col ">
            {menu}
        </div>
    )
}