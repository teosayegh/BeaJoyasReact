import Item from "../Item/Item";
import "./ItemList.css"

export default function ItemList({items, id}) {

    return (
        <div className="itemList">
            {items.map((el) => <Item key={el.id} el={el}/>)
            }
        </div>
    );
}