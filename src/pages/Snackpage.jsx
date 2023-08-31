import Header from "../components/Header"
import Section from "../components/Section"
import banner  from "../assets/images/pexels-photo-6697295.jpeg"
export default function Snackpage(){
    return (
        <main>
            <Header url={banner} title="snacks"/>
            <Section menuHead="beef"/>
            <Section menuHead="chicken"/>
            <Section menuHead="mutton"/>
            <Section menuHead="fish"/>
        </main>
    )
}