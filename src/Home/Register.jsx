import React from 'react'
const subTitle = "save The  Day"
const title = (
    <h2 className='title'>Join on Day Long Free WorkSHops for <b>Advance<span>Mastering</span></b>on sales</h2>
)

const  desc = "Limited Time so Go and shop!Hurry Up"

const Register = () => {
  return (
    <section className='register-section padding-tb pb-0'>
        <div className='container'>
            <div className='row g-4 row-cols-lg-2 row-cols-1 align-items-center'>
                <div className='col'>
                    <div className='section-header'>
                        <span className='subtitle'>{subTitle}</span>
                        {title}
                        <p>{desc}</p>

                    </div>

                </div>
                <div className='col'>
                    <div className='section-wrapper'>
                        <h4>Register Now</h4>
                        <form className='register-form'>
                            <input type="text" name="name" placeholder='Enter your Name' className='reg-input'/>
                            <input type="email" name="email" placeholder='Enter your Email' className='reg-input'/>
                            <input type="number" name="number" placeholder='Enter your Number' className='reg-input'/>
                            <button type='button' className='lab-btn'>Register Now</button>
                        </form>

                    </div>

</div>

            </div>

        </div>
        
    </section>
  )
}

export default Register