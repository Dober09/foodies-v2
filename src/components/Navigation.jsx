import logo from '../assets/images/dish.png'
import menu from '../assets/images/menu.png'

export default function Navigation(){
    return (
        <div className='flex justify-between items-center m-2 mx-10'>
            <div className='w-16 sm:w-20'>
                <img src={logo} alt="logos" />
            </div>
            <div className='bg-red-100 '>
                <button className='w-14 h-14 p-4 bg-zinc-700 shadow-md shadow-slate-500 rounded-md sm:hidden'><img src={menu} alt="menu" /></button>
            </div>
            <nav className=' mr-7 bg-black sm:basis-2/3  font-ubuntu font-semibold text-slate-100 shadow-sm shadow-slate-500 rounded-md hidden p-3 capitalize sm:block '>
                <ul  className='flex justify-between' >
                    <li >menu</li>
                    <li>catering</li>
                    <li>press</li>
                    <li>rewards</li>
                    <li>
                <button className='capitalize'>order online</button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}