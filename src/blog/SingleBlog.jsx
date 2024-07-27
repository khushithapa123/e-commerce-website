import React, { useState } from 'react'
import blogList from '../utilis/blogdata'
import { useParams } from 'react-router-dom'
import PageHeader from '../Components/PageHeader';
import Tags from '../Shop/Tags';
import PopularPost from '../Shop/PopularPost';

const socialList = [ { link: "#", iconName: "icofont-facebook", className: "facebook", },
   { link: "#", iconName: "icofont-twitter", className: "twitter", }, 
   { link: "#", iconName: "icofont-linkedin", className: "linkedin", }, 
   { link: "#", iconName: "icofont-instagram", className: "instagram", }, 
   { link: "#", iconName: "icofont-pinterest", className: "pinterest", }, ];


const SingleBlog = () => {
  const [blog, setBlog] = useState(blogList);
  const { id } = useParams()
  // console.log(id)
  const result = blog.filter((b) => b.id === Number(id));
  console.log(result[0])

  useState
  return (
    <div>
      <PageHeader title={"Single blog page"} curPage={"Blog/Blog Details"} />
      <div className='blog-section blog-single padding-tb section-bg'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8 col-12'>
              <article>
                <div className='section-wrapper'>
                  <div className='row row-cols-1 justify-content-centern g-4'>
                    <div className='col'>
                      <div className='post-item style-2'>
                        <div className='post-inner'>
                          {
                            result.map((item) => (
                              <div key={item.id}>
                                <div className='post-thumb'>
                                  <img src={item.imgUrl} alt="" className='w-100' />
                                </div>

                                <div className='post-content'>
                                  <h3>{item.title}</h3>
                                  <div className='meta-post'>
                                    <ul className='lab-ul'>
                                      {
                                        item.metaList.map((val, i) => (
                                          <li key={i}><i className={val.iconName}></i>{val.text}</li>
                                        ))
                                      }
                                    </ul>
                                  </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis eum repudiandae
                        dignissimos voluptas incidunt eveniet velit quos quidem deleniti facilis quasi,
                        ea explicabo, impedit sed odit fugiat consectetur rem natus assumenda totam!
                        Facilis in mollitia aspernatur provident voluptatem beatae! Velit deleniti
                        nemo qui dignissimos laborum veniam nihil quam perspiciatis et!
                        Facilis in mollitia aspernatur provident voluptatem beatae! Velit deleniti
                        nemo qui dignissimos laborum veniam nihil quam perspiciatis et!</p>
                            <blockquote>
                              <p>Dynmaically recaptiualize distributed technologies is whereas turnkey
                                  channels and onotonectally provide acess to resourse leveling expertise
                                  vias worldwide  delievered uolisticly extend aserser are diverse vortals
                              </p>
                              <cite>
                              <a href="#">...Melisa Hunter</a>
                              </cite>
                              </blockquote>

                                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis eum repudiandae
                                    dignissimos voluptas incidunt eveniet velit quos quidem deleniti facilis quasi,
                                    ea explicabo, impedit sed odit fugiat consectetur rem natus assumenda totam!
                                    Facilis in mollitia aspernatur provident voluptatem beatae! Velit deleniti
                                    nemo qui dignissimos laborum veniam nihil quam perspiciatis et!
                                    Facilis in mollitia aspernatur provident voluptatem beatae! Velit deleniti
                                    nemo qui dignissimos laborum veniam nihil quam perspiciatis et!</p>
                                  <img src="/src/assets/images/blog/single/01.jpg" alt="" />

                                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis eum repudiandae
                                    dignissimos voluptas incidunt eveniet velit quos quidem deleniti facilis quasi,
                                    ea explicabo, impedit sed odit fugiat consectetur rem natus assumenda totam!
                                    Facilis in mollitia aspernatur provident voluptatem beatae! Velit deleniti
                                    nemo qui dignissimos laborum veniam nihil quam perspiciatis et!
                                    Facilis in mollitia aspernatur provident voluptatem beatae! Velit deleniti
                                    nemo qui dignissimos laborum veniam nihil quam perspiciatis et!</p>

                                  <div className='video-thumb'>
                                    <img src="/src/assets/images/blog/single/02.jpg" alt="" />
                                    <a href="https://youtu.be/el3N6qQjr-I?si=a45p4Rk8bhwwoC5Z"
                                    className='video-button popup'
                                    target='_blank'
                                    >
                                      <i className='icofont-ui-play'></i>
                                    </a>
                                  </div>
                                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis eum repudiandae
                                    dignissimos voluptas incidunt eveniet velit quos quidem deleniti facilis quasi,
                                    ea explicabo, impedit sed odit fugiat consectetur rem natus assumenda totam!
                                    Facilis in mollitia aspernatur provident voluptatem beatae! Velit deleniti
                                    nemo qui dignissimos laborum veniam nihil quam perspiciatis et!
                                    Facilis in mollitia aspernatur provident voluptatem beatae! Velit deleniti
                                    nemo qui dignissimos laborum veniam nihil quam perspiciatis et!</p>
                                    <div className='tags-section'>
                                      <ul className='tags lab-ul'>
                                        <li>
                                          <a href="">Agency</a>
                                        </li>
                                        <li>
                                          <a href="">Business</a>
                                        </li>
                                        <li>
                                          <a href="">Personal</a>
                                        </li>
                                      </ul>
                                      <ul className='lab-ul social-icons'>
                                        {
                                          socialList.map((val,i) =>(
                                            <li key={i}>
                                              <a href="#" className={val.className}>
                                                <i className={val.iconName}></i>
                                              </a>

                                            </li>
                                          ))

                                        }

                                      </ul>

                                    </div>


                                </div>

                              </div>
                            ))
                          }

                        </div>
                      </div>

                    </div>

                    <div className='navigations-part'>
                      <div className='left'>
                         <a href="#" className='prev'>
                          <i className='icofont-double-left'></i>Previous Blog
                         </a>
                         <a href="#" className='title'>
                          Evisculate Parallel Process via Technica Sound Models Authoriative

                         </a>
                      </div>


                      <div className='right'>
                         <a href="#" className='prev'>
                          <i className='icofont-double-right'></i>Previous Blog
                         </a>
                         <a href="#" className='title'>
                          Evisculate Parallel Process via Technica Sound Models Authoriative

                         </a>
                      </div>

                    </div>






                    

                  </div>

                </div>
              </article>
            </div>


            <div className='col-lg-4 col-12'>
              <aside>
                 <Tags/>
                 <PopularPost/>
               
              </aside>
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}

export default SingleBlog