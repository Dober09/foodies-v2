import Navigation from "./Navigation";

export default function Header({url,title}){
    return (
        <header className="mx-5">
            <div className=" bg-slate-50 ">
                <Navigation/>
            </div>
            <div className=" relative flex justify-center">
                <img src={url} alt="banner" className=" rounded-md h-80 w-80  object-cover  mt:h-96 mt:w-full" />
                <div className="text-center absolute top-0 h-full w-full flex justify-center items-center">
                    <h2 className="font-unbuntu font-bold uppercase text-xl mt:text-6xl mt:text-red-400">{title}</h2>
                </div>
            </div>
        </header>
    )
}