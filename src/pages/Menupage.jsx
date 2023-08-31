import Header from "../components/Header"
import Section from "../components/Section"
import banner from  "../assets/images/pexels-photo-704569.jpeg"
export default function Menupage(){
    return (
        <main>
            <Header url={banner} title="foodies"/>
            <Section menuHead="breakfast"/>
            <Section menuHead="launch"/>
            <Section menuHead="dinner"/>
            <Section menuHead="supper"/>
            <Section menuHead="Dessert"/>
        </main>
    )
}