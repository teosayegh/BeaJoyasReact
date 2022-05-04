import "./styles/ItemListContainer.css"

const ItemListContainer = ( { greeting='saludo' } ) => {

return (
    <div className="centrar-item">
        
        {greeting}
        
    </div>

)
}

export default ItemListContainer
