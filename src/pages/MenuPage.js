
import banner from "../images/pexels-photo-704569.jpeg";
import Header from "../Components/Header"
import Box from "../Components/Box"

function MenuPage(){
    return (
        <div className="flex flex-col bg-gradient-to-r from-primary to-secondary">
            
        <Header head={{image:banner,text:"Different kind of food"}}/>
      
        <Box title={{name:'Breakfast'}}/>
        <Box title={{name:"Lunch"}}/>
        <Box title={{name:"Dinner"}}/>
        <Box title={{name:"Supper"}}/>
        <Box title={{name:"Dessert"}}/>
        </div>
    )
}

export default MenuPage