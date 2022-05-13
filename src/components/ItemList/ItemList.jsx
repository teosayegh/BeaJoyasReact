import Item from "../ItemList/ItemList";
import "./ItemList.css"

export default function ItemList({joyas}) {

    return (
        <div className="itemList">
            {joyas.map((prod) =>  <Item key={prod.id} prod={prod} />  )}
        </div>
    );
}