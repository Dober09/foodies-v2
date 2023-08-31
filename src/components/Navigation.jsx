import logo from '../assets/images/dish.png'
import menu from '../assets/images/menu.png'

export default function Navigation(){
    return (
        <div className='flex justify-between items-center mx-1  mb-2 py-3 bg-darkpink rounded-b-md'>
            <div className='ml-2 w-16 ms:w-20'>
                <img src={logo} alt="logos" />
            </div>
            <div className='bg-red-100 '>
                <button className='w-14 h-14 p-4 bg-zinc-700 shadow-md shadow-slate-500 rounded-md mt:hidden'><img src={menu} alt="menu" /></button>
            </div>
            <nav className=' mr-7  mt:basis-2/3  font-ubuntu font-semibold text-slate-100 shadow-lg shadow-slate-500 rounded-md hidden p-4 capitalize mt:block '>
                <ul  className='flex justify-between text-somepink' >
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