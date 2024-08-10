import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Details() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`/api/products/${id}`)
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, [id]);

    if (!product) return <div>Loading...</div>;

    return (
        <div className="product-details">
            <img src={product.imageUrl} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
        </div>
    );
}

export default Details;
