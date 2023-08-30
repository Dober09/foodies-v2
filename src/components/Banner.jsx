import bannerImg from '../assets/images/pexels-photo-434283.jpeg'
export default function Banner(){
    return(
        <section className="bg-slate-100 flex flex-col items-center mt-3 sm:flex-row sm:justify-center mx-8 ">
            <div className='my-3 md:mr-40'>
                <h1 className="font-ubuntu  uppercase text-xl  font-bold md:text-5xl md:w-36 ">different kind of foods</h1>
            </div>
            <div className=' sm:base-1/2'>
                <img src={bannerImg} alt="banner" className=' rounded-md shadow-lg shadow-slate-100 w-48 sm:w-80 md:w-96' />
            </div>
        </section>
    )
}