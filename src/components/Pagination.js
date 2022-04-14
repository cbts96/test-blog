import React, { useState } from 'react'
import { useSelector } from 'react-redux';

const Pagination = () => {
    const {arrCard}=useSelector((state)=>({...state}))
    
    // const [pages] = useState(Math.round(data.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);

  function goToNextPage() {
     // not yet implemented
  }

  function goToPreviousPage() {
     // not yet implemented
  }

  function changePage(event) {
     // not yet implemented
  }

  const getPaginatedData = () => {
     // not yet implemented
  };

  const getPaginationGroup = () => {
     // not yet implemented
  };
  return (
    <div className='d-flex justify-content-center align-items-center'>
        <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">«</span>
            </a>
          </li>
          <li className="page-item"><a className="page-link" href="#">1</a></li>
          <li className="page-item"><a className="page-link" href="#">2</a></li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">»</span>
            </a>
          </li>
        </ul>
      </nav>
     
    </div>
  )
}

export default Pagination