import React from 'react'

const Product = () => {
  return (
    <div>
      products.map((product) => (
                    return (<div className="col-3" key={product.id}>
                        <div className="card">
                            <img src={product.image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">{product.shortDescription}</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>)
                );
                return products;
                )
    </div>
  )
}

export default Product
