import React, { useContext } from "react";
import TableContext from "../utils/TableContext.js";

const DOB = () => {
  const context = useContext
  (TableContext)

  return (
    <div className="searchbox">
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text">
                        DOB
                    </span>
                </div>
                <input 
                    type="date" 
                    className="form-control"
                    onChange={e => context.deltaHandler(e)}
                />
                <input 
                    type="date" 
                    className="form-control"
                    onChange={e => context.deltaHandler(e)}
                />
            </div>
        </div>

  )
};

export default DOB;


