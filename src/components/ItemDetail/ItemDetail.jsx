

const ItemDetail = ({ producto }) => {
    return (
        <div className="row">
            <div className="col">
                
            </div>
            <div className="col">
                <h1>{producto.name}</h1>
                <h2>{producto.category}</h2>
                <p>{producto.price}</p>
            </div>
        </div>
    // <Item prod={producto} />
);
};

export default ItemDetail;
