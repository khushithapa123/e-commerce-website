import React, { useState } from 'react'
import productsData from '../products.json'
import { Link } from 'react-router-dom';
import Selected from '../Components/Selected';

const title =(
    <h2>Search Your One From <span>Thousand</span> of Product</h2>
)
const desc = "we have the largest collections of product"

const bannerList = [
    {
    iconName: "icofont-users-alt-4",
    text: "1.5 Million Customers",
    },
    {
    iconName: "icofont-notification",
    text: "More then 2000 Marchent",
    },
    {
    iconName: "icofont-globe",
    text: "Buy Anything Online",
    },
    ];

const Banner = () => {
    const [searchInput, setSearchInput] = useState("");
    const [filterProducts, setfilterProducts] = useState(productsData);

    // saerch function
    const handleSearch = e => {
        const searchTerm = e.target.value;
        setSearchInput(searchTerm);

        // show product based on search
        const filtered =productData.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
        setfilterProducts(filtered)

    }

  return (
    <div className='banner-section style-4'>
        <div className='container'>
            <div className='banner-content'>
                {title}
                <form>
                    <Selected select={"all"}/>
                    <input type="text" name='search' id='search' placeholder='Search Your Favourite Product' value={searchInput} onChange={handleSearch} />
                    <button type='submit'>
                    <i className="icofont-search-2"></i>
                    </button>
                </form>
                <p>{desc}</p>
                <ul className='lab-ul'>
                    {
                        searchInput && filterProducts.map((product,i) => <li key={i}>
                            <Link to={`/shop/${product.id}`}>{product.name}</Link>
                        </li>)
                    }

                </ul>

            </div>

        </div>

    </div>
  )
}

export default Banner