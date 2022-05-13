import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import { getFetch } from '../../helpers/getFetch'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const { detalleId } = useParams()

    useEffect(() => {
        getFetch(detalleId)  
        .then(res=> setProduct(res))
        .catch((err)=> console.log(err))
    }, [])
    
    return (
        <div>
            <ItemDetail producto={product}  />
        </div>
    )
}

export default ItemDetailContainer
