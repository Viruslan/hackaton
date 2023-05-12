import { Menu } from "./core/menu";
import { getRandomColor } from "./utils";
export class ContextMenu extends Menu {

    open(){
        
        document.body.style.backgroundColor = getRandomColor();
    }
}
