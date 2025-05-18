import './a.css'

export default function Pagination({currentPage, NoOfPages , setCurrentPage}) {

 const  handlePageChange = (n)=>{
   setCurrentPage(n)
}
const goToPrevPage =()=>{
    setCurrentPage(prev=> prev - 1)
}
const goToNextPage =()=>{
    setCurrentPage(prev=> prev + 1)
}

  return (
    <div className="paginaton">
      <button
        disabled={currentPage <= 0}
        onClick={() => goToPrevPage()}
        className="left_right"
      >
        ⬅️
      </button>
      {[...Array(NoOfPages).keys()].map((n) => (
        <span
          className={"page_num" + (n === currentPage ? " active" : "")}
          onClick={() => handlePageChange(n)}
          key={n}
        >
          {n}
        </span>
      ))}
      <button
        disabled={currentPage >= NoOfPages - 1}
        onClick={() => goToNextPage()}
        className="left_right"
      >
        ➡️
      </button>
    </div>
  );
};
