
import React from 'react'
import { Link } from 'react-router-dom';
import home1 from '../assets/images/category/01.jpg'
import home2 from '../assets/images/category/02.jpg'
import home3 from '../assets/images/category/03.jpg'
import home4 from '../assets/images/category/04.jpg'
import home5 from '../assets/images/category/05.jpg'
import home6 from '../assets/images/category/06.jpg'

 

const subTitle = "Choose Any Products";
const title = "Buy Everything with Us";
const btnText = "Get Started Now";


const categoryList = [
{
imgUrl: home1,
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-brand-windows',
title: 'DSLR Camera',
},
{
imgUrl: home2,
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-brand-windows',
title: 'Shoes',
},
{
imgUrl: home3,
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-brand-windows',
title: 'Home Decor',
},
{
imgUrl: home4,
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-brand-windows',
title: 'Artifical Plants',
},
{
imgUrl: home6,
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-brand-windows',
title: 'Women Dress',
},
{
imgUrl: home5,
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-brand-windows',
title: 'Women bag',
},
]
const HomeCatergory = () => {
  return <div className='category-section style-4 padding-tb'>
        <div className='container'>
            <div className='section-header text-center'>
                <span className='subtitle'>{subTitle}</span>
                <h2 className='title'>{title}</h2>
            </div>

            {/* section card */}
            <div className='section-wrapper'>
                <div className='row g-4 justify-content-center row-cols-md-3 row-cols-sm-2 row-cols-1'>
                    {
                       categoryList.map((val,i) => (<div key={i} className='col'>
                        <Link to="/shop" className="category-item">
                        <div className="category-inner">
                            {/* imgaes */}

                            <div className="category-thumb">
                                <img src={val.imgUrl} alt=''/>
                            </div>

                            {/* content */}

                            <div className="category-content">
                                <div className="cate-icon">
                                    <i className={val.iconName}></i>
                                </div>
                                <Link to="/shop"><h6>{val.title}</h6></Link>
                            </div>
                        </div>
                        </Link>
                       </div>))
                    }
                </div>

                <div className='text-center mt-5'>
                    <Link to="/shop" className='lab-btn'><span>{btnText}</span></Link>
                </div>
            </div>
        </div>
    </div>
  
};

export default HomeCatergory