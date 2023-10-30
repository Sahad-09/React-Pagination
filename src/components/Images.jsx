import { useState } from "react";
import ReactPaginate from "react-paginate";
import "../App.css";

/* eslint-disable react/prop-types */
const Images = ({ data }) => {
  const itemsPerPage = 6;

  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="imagesConatiner">
        {Array.isArray(currentItems) ? (
          currentItems.map((image) => (
            <div key={image}>
              <img className="images" src={image.url} alt="image" />
            </div>
          ))
        ) : (
          <div>No images to display</div>
        )}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="Link"
        previousLinkClassName="Link"
        nextLinkClassName="Link"
        disabledClassName="disabled"
      />
    </>
  );
};
/* eslint-enable react/prop-types */

export default Images;
