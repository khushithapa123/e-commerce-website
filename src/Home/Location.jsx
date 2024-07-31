import React from 'react'
import { Link } from 'react-router-dom';
import imgurl1 from '../assets/images/clients/avater.jpg'
import imgurl2 from '../assets/images/clients/avater.jpg'
import imgurl3 from '../assets/images/clients/avater.jpg'
import imgurl4 from '../assets/images/clients/avater.jpg'
import imgurl5 from '../assets/images/clients/avater.jpg'
import imgurl6 from '../assets/images/clients/avater.jpg'
import imgurl7 from '../assets/images/clients/avater.jpg'

const title = "More Then 50,000 Customers";

const desc = "Buy products on your any device with our app & enjoy your time what you want. Just download & install & start to shopping";

const clientsList = [
{
imgUrl: imgurl1,
imgAlt: 'education thumb rajibraj91 rajibraj',
text: 'From UP',
},
{
imgUrl: imgurl2,
imgAlt: 'education thumb rajibraj91 rajibraj',
text: 'From Delhi',
},
{
imgUrl: imgurl3,
imgAlt: 'education thumb rajibraj91 rajibraj',
text: 'From Mumbai',
},
{
imgUrl: imgurl4,
imgAlt: 'education thumb rajibraj91 rajibraj',
text: 'From New York',
},
{
imgUrl: imgurl5,
imgAlt: 'education thumb rajibraj91 rajibraj',
text: 'From India',
},
{
imgUrl: imgurl6,
imgAlt: 'education thumb rajibraj91 rajibraj',
text: 'From Uk',
},
{
imgUrl: imgurl7,
imgAlt: 'education thumb rajibraj91 rajibraj',
text: 'From USA',
},
]

const Location = () => {
  return <div className='clients-section style-2 padding-tb'>
    <div className='container'>
        <div className='section header text-center'>
            <h2 className='title'>{title}</h2>
            <p>{desc}</p>
        </div>
        {/* main content */}
        <div className='section-wrapper'>
            <div className='clients'>
                {
                    clientsList.map((val, i)=>(
                        <div key={i} className='client-list'>
                            <Link to="/sign-up" className='client-content'>
                            <span>{val.text}</span>
                            </Link>
                            <div className='client-thumb'>
                                <img src={val.imgUrl} alt="" />
                                </div>
                        </div>
                    ))
                }

            </div>

        </div>

    </div>

  </div>;
}

export default Location