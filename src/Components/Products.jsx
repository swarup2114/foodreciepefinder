import React from 'react';

const Products = ({ data }) => {
    return (
        <div className="container-fluid">
            <div className="row mt-4">
                {data.map((item, index) => (
                    <div key={index} className="col-md-4 mb-3">
                        <div className="card" style={{ width: '18rem', margin: '0 auto' }}>
                            <img className="card-img-top" src={item.recipe.image} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">{item.recipe.label.slice(0,10)}</h5>
                                <p className="card-text">Total Amount Of Calories: {Math.round(item.recipe.calories)}</p>
                                <button className="btn btn-primary">Buy</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
