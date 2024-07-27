import React, { useLayoutEffect } from 'react'

const Pagination = ({productsPerPage,totalProducts, paginate,activePage}) => {
    const pageNumber =[];
    for(let i =1 ;i <= Math.ceil(totalProducts /productsPerPage) ; i++){
        pageNumber.push(i)
    }
  return (
   <ul className='default-pagination lab-ul'>
    <li>
        <a href="#" onClick={() =>{
            if(activePage < pageNumber.length){
                paginate(activePage - 1)
            }
        }}>
            <li className='icofont-rounded-left'></li>
        </a>
    </li>
    {
        pageNumber.map((numbers)=>(
            <li key={numbers} className={`page-item ${numbers ===activePage ? "bg-warning" : ""}`}>
                {/* <a href="#">{number}</a> */}
                <button onClick={() =>paginate(numbers)} className='bg-transparent'>{numbers}</button>
            </li>
        ))
    }
     <li>
        <a href="#" onClick={() =>{
            if(activePage < pageNumber.length){
                paginate(activePage + 1)
            }
        }}>
            <li className='icofont-rounded-right'></li>
        </a>
    </li>
   </ul>
  )
}

export default Pagination