import React from 'react';


const TableItem = (props) => {

    return (
        <div className="add-table__row">
            <div className="add-table__col">
                <div className="add-table__col-text">{props.money}</div>
            </div>
            <div className="add-table__col">
                <div className="add-table__col-text">{props.category}</div>
            </div>
            <div className="add-table__col">
                <div className="add-table__col-text">{props.descr}</div>
            </div>
            <div className="add-table__col">
                <div className="add-table__col-text">{props.date}</div>
            </div>
        </div>
    )
}

export default TableItem;