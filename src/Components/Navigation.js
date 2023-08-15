import menu from "../img/menu.png";
import recipe from  "../img/3003655.svg"
export default function Navigation(){
    return (
        <div>
            <nav>
                <ul>
                    <li><a href="">
                        <img src={recipe} alt="" />
                        <p></p>
                    </a>
                    </li>
                </ul>
            </nav>
            <img src={menu} alt="menu" />
        </div>
    )
}