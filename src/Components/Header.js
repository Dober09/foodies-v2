import banner from "../img/pexels-photo-704569.jpeg"
export default function Header(){
    return (
        <header className="mb-3 flex justify-center">
            <div className="relative bg-red">
                <img src={banner} alt="banner" className="w-80 h-60 object-cover"/>
            <div className="absolute top-6 left-3 text-3xl">
                <h1 className="w-20 font-bold">Different kind of food</h1>
            </div>
            </div>
        </header>
    )
}