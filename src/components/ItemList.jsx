import Item from "./Item";
import "./styles/ItemList.css"

export default function ItemList({items}) {

    return (
        <div className="itemList">
            {items.map(el => <Item key={el.id} categoria={el.type} name={el.name} price={el.price} img={el.img}/>)}
        </div>
    );
}