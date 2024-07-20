import React, { useState } from "react";



function TableHeaderCell({ displayName }) {

  const [sorting, setSorting] = useState(false)
  return (
    <>
      <th
        title="No"
        // width={60}
        className={`py-1 px-2 align-middle position-relative`}
        rowSpan={1}
        colSpan={1}
        // style={{ width: 60 }}
        aria-label="No"
      
      >
        {displayName}
        <div
          className={`position-absolute top-0 end-0 ${
            sorting ? "sorting_desc" : "sorting_asc"
          } text-dark`}
          style={{ height: "35px", width: "10px" }}
          onClick={() => setSorting(!sorting)}
        >
          {" "}
        </div>
      </th>
    </>
  );
}

export default TableHeaderCell;
