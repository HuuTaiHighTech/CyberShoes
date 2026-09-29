import axios from 'axios';
import React, { useEffect, useState } from 'react'



const ProductList = () => {
    const [products, setProducts] = useState([
    //     {
    //     sizes: [31, 32, 33, 34, 35],
    //     id: 10,
    //     name: "nike shox tl",
    //     alias: "nike-shox-tl",
    //     price: 280,
    //     description: "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
    //     size: [31, 32, 33, 34, 35],
    //     shortDescription: "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    //     quantity: 100,
    //     deleted: false,
    //     categories: "[{\"id\": \"NIKE\",\"category\":\"NIKE\"}]",
    //     relatedProducts: [9, 10, 11],
    //     feature: true,
    //     image: "https://dummyimage.com/600x400/000/fff",
    //     imgLink: "https://apistore.cybersoft.edu.vn/images/nike-shox-tl.png"
    // },
    ]);
    
const getAllProduct = async () => {
    const axiosObj = axios({
        method: 'GET',
        url: 'https://apistore.cybersoft.edu.vn/api/Product',
    })
    axiosObj.then((result) => {
        console.log(result.data.content);
        setProducts(result.data.content);
    }).catch((error) => {
        console.log(error);
    })
};
    useEffect(() => {
        getAllProduct();
    }, [])
    return (
        <div className='container'>
            <h1 className='text-center mb-3'>Danh sách sản phẩm</h1>
            <div className="row justify-content-between">
                {products.map((product) => {
                    return <div className="col-3" key={product.id}>
                        <div className="card">
                            <img src={product.image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">{product.shortDescription}</p>
                                <a href="#" className="btn btn-primary"
                               >Go somewhere</a>
                            </div>
                        </div>
                    </div>
                }
                )}
            </div>
        </div>
    )
}

export default ProductList
