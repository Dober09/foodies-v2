import Navigation from "./Navigation";
import banner from  "../assets/images/pexels-photo-704569.jpeg"

export default function Header(){
    return (
        <header className="mx-5">
            <div className=" bg-slate-50 ">
                <Navigation/>
            </div>
            <div className=" ">
                <img src={banner} alt="banner" className=" rounded-md" />
                <h2 className="">foodies</h2>
            </div>
        </header>
    )
}