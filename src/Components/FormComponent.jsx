import React, { useState } from 'react';
import Products from './Products';
import Loader from './Loader'; 

const FormComponent = () => {
    const [search, setSearch] = useState('');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false); 
    const YOUR_APP_ID = "0d8d18fb";
    const YOUR_APP_KEY = "866bc922cdaf97379ddd6250d9fed45d";

    const submitHandler = async (e) => {
        e.preventDefault();
        setLoading(true); 
        try {
            const response = await fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`);
            const data = await response.json();
            setData(data.hits);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false); 
        }
    };

    return (
        <div>
            <center>
                <h4>Food Recipe App</h4>
                <form onSubmit={submitHandler}>
                    <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} /> <br />
                    <input type="submit" className="btn btn-primary mt-3" value="Search" />
                </form>
                {loading ? ( 
                    <Loader />
                ) : (
                    data.length >= 1 ? <Products data={data} /> : null
                )}
            </center>
        </div>
    );
};

export default FormComponent;
