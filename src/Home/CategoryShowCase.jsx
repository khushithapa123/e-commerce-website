import React, { useState } from 'react'
import Rating from '../Components/Rating';
import { Link } from 'react-router-dom';
import img1 from '../assets/images/categoryTab/01.jpg'
import img2 from '../assets/images/categoryTab/02.jpg'
import img3 from '../assets/images/categoryTab/03.jpg'
import img4 from '../assets/images/categoryTab/04.jpg'
import img5 from '../assets/images/categoryTab/05.jpg'
import img6 from '../assets/images/categoryTab/06.jpg'
import img7 from '../assets/images/categoryTab/07.jpg'
import img8 from '../assets/images/categoryTab/08.jpg'


const title = "Our Products";

const ProductData = [
{
imgUrl: img1,
cate: 'Bags',
title: 'Asthetic Bag',
author: 'assets/images/course/author/01.jpg',
brand: 'D$J Bags',
price: 'Rs.5000',
id: 1,
},
{
imgUrl: img2,
cate: 'Shoes',
title: 'Nike',
author: 'assets/images/course/author/02.jpg',
brand: 'Nike',
price: 'Rs.4000',
id: 2,
},
{
imgUrl: img3,
cate: 'HeadPhones',
title: 'Sony',
author: 'src/assets/images/categoryTab/brand/apple.png',
brand: 'Sony',
price: 'Rs.4,490',
id: 3,
},
{
imgUrl: img4,
cate: 'Flower Pot',
title: 'Pot',
author: 'assets/images/course/author/04.jpg',
brand: 'Flower Pot',
price: 'Rs.2000',
id: 4,
},
{
imgUrl: img5,
cate: 'Shoes',
title: 'Outdoor Sports Shoes',
author: 'assets/images/course/author/05.jpg',
brand: 'Nike',
price: 'Rs.7000',
id: 5,
},
{
imgUrl: img6,
cate: 'Furniture',
title: 'Modern Bed',
author: 'assets/images/course/author/06.jpg',
brand: 'Duroflex',
price: 'Rs.45,000',
id: 6,
},
{
imgUrl: img7,
cate: 'Jewellery',
title: 'Cushion',
author: 'assets/images/course/author/01.jpg',
brand: 'De Beers',
price: 'Rs.10000',
id: 7,
},
{
imgUrl: img8,
cate: 'Beauty',
title: 'Combo MakeUp Kit',
author: 'assets/images/course/author/02.jpg',
brand: 'Nykaa',
price: 'Rs.8800',
id: 8,
},
]


const CategoryShowCase = () => {
    const [items,setItems] = useState(ProductData);
    const filterItem = (categItem) =>{
        const updateItems = ProductData.filter((CurElem) =>{
            return CurElem.cate === categItem
        });
        setItems(updateItems)

    };
  return (
    <div className='course-section style-3 padding-tb'>
        {/* shapes */}
        <div className='course-shape one'><img src="/src/assets/images/shape-img/icon/01.png" alt="" /></div>
        <div className='course-shape two'><img src="/src/assets/images/shape-img/icon/02.png" alt="" /></div>

        {/* main section */}
        <div className='container'>
            {/* section hedaer */}
            <div className='section-header'>
                <h2 className='title'>{title}</h2>
                <div className='course-filter-group'>
                    <ul className='lab-ul'>
                        <li onClick={()=> setItems(ProductData)("All")}>All</li>
                        <li onClick={()=> filterItem("Shoes")}>Shoes</li>
                        <li onClick={()=> filterItem("Bags")}>Bags</li>
                        <li onClick={()=> filterItem("Phones")}>Phones</li>
                        <li onClick={()=> filterItem("Beauty")}>Beauty</li>

                    </ul>
                </div>

            </div>

            {/* section body */}
            <div className='section-wrapper'>
                <div className='row g-4 justify-center row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 course-filter'>
                    {
                        items.map((Product) => <div key={Product.id} className='col'>
                            <div className='course-item style-4'>
                                <div className='course-inner'>
                                    <div className='course-thubm'>
                                        <img src={Product.imgUrl} alt="" />
                                        <div className='course-category'>
                                            <div className='course-cate'>
                                                <a href="">{Product.cate}</a>
                                            </div>
                                            <div className='course-reiew'>
                                                <Rating/>
                                            </div>
                                        </div>
                                    </div>

                                    {/* content */}
                                    <div className='course-content'>
                                        <Link to={`/shop/${Product.id}`}><h6>{Product.title}</h6></Link>
                                        <div className='course-footer'>
                                            <div className='course-author'>
                                            <Link to="/" className='ca-name'>{Product.brand}</Link>
                                                </div>
                                                
                                                <div className='course-price'>
                                                    {Product.price}

                                                    </div>
                                          
                                         </div>
                                    </div>
                                </div>
                                </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default CategoryShowCase