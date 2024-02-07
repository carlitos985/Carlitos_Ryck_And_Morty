import React from 'react'
import './styles/pagination.css'

const Pagination = ({currentPage,setCurrentPage, totalPage}) => {

    /*const listPage =[];
    const pageIni=0;
    if (pageIni < totalPage){
        for(i=0; i<=totalPage; i++){
            listPage.push(i)
        }
    }*/

    const handlePrev= ()=>{
        if(currentPage > 1){
            setCurrentPage(currentPage-1)
        }
    };
    const handleNext= ()=>{
        if(currentPage < totalPage){
            setCurrentPage(currentPage + 1)
        }
    };
  return(<div className='pagination'>
    <button onClick={handlePrev}>Prev</button>
    <span>{`${currentPage} / ${totalPage}`}</span>
    <button onClick={handleNext}>Next</button>
    {/*<br />
    <h3>{listPage}</h3>*/}
  </div>
  )
}

export default Pagination