import React from 'react'
const title ="most popular tags"
const tagsList = [ { link: "#", text: "envato", },{ link: "#", text: "codecanyon", }, { link: "#", text: "videohive", }, { link: "#", text: "3docean", }, { link: "#", text: "themeforest", }, ];

const Tags = () => {
  return (
    <div className='widget widget-tag'>
        <div className='widget-header'>
            <h5 className='title'>{title}</h5>
        </div>

        <ul className='widget-wrapper'>
            {
                tagsList.map((val, i) => (
                    <li key={i}><a href={val.link}>{val.text}</a></li>
                ))
            }

        </ul>

    </div>
  )
}

export default Tags