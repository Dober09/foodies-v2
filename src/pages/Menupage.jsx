import Header from "../components/Header"
import Section from "../components/Section"
import banner from  "../assets/images/pexels-photo-704569.jpeg"
import SideNavigation from "../components/SideNavigation"
export default function Menupage(){
    return (
        <main className="bg-somepink">
            <Header url={banner} title="foodies"/>
            <div className="flex  ">
            <SideNavigation/>
            <div className="basis-full">
            <Section menuHead="breakfast"/>
            <Section menuHead="launch"/>
            <Section menuHead="dinner"/>
            <Section menuHead="supper"/>
            <Section menuHead="Dessert"/>
            </div>
            </div>
        </main>
    )
}