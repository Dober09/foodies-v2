
import Menubtn from "./Menubtn";

export default function Header({head}){
    
    return (
        <header className="mb-3 flex justify-center">
            <div className="relative bg-red">
                <img src={head.banner} alt="banner" className="w-80 h-60 object-cover"/>
            <div className="absolute top-6 left-3 text-3xl">
                <h1 className="w-20 font-bold font-ubuntu">{head.text}</h1>
            </div>
            <nav className="absolute top-3  right-4 cursor-pointer">
                <Menubtn/>
            </nav>
            {/* <MenuOption/> */}
            </div>
        </header>
    )
}