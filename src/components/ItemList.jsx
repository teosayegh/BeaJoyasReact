import Item from "./Item";
import "./styles/ItemList.css"

export default function ItemList({items}) {

    return (
        <div className="itemList">
            {items.map(el => <Item key={el.id} category={el.category} name={el.name} price={el.price} img={el.img}/>)}
        </div>
    );
}