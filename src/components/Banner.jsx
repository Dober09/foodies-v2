import bannerImg from '../assets/images/pexels-photo-434283.jpeg'
export default function Banner(){
    return(
        <section className="bg-slate-100 flex flex-col items-center mt-3 sm:flex-row sm:justify-around">
            <div className='my-3'>
                <h1 className="font-ubuntu  uppercase text-xl  font-bold">different kind of foods</h1>
            </div>
            <div className=' w-80 h-40 sm:w-96'>
                <img src={bannerImg} alt="banner" className='rounded-md shadow-lg shadow-slate-100' />
            </div>
        </section>
    )
}