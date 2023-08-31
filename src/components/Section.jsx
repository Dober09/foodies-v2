import Title from "./Title"
import Card from "./Card"
export default function Section({menuHead}){
    return(
        <div className="mx-4 mt-7">
            <Title menuHead={menuHead}/>
            <div className="grid gap-5 place-content-center
            ms:grid-cols-2 mt:grid-cols-3 lp:grid-cols-4  ">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            </div>
        </div>
    )
}