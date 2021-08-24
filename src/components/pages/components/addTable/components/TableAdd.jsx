import React from 'react';

const TableAdd = (props) => {


    

    const formView = () => {
        let addTableRow = document.querySelector('.add-table__row.last-row');
        let addTableRowForm = document.querySelector('.add-table-add');

        
        if (addTableRow.classList.contains('active')) {
            addTableRow.classList.remove('active');
            addTableRowForm.classList.remove('active');
        } else {
            addTableRow.classList.add('active');
            addTableRowForm.classList.add('active');
        }

    }

    return (
        <div className="add-table__row last-row" onClick={formView}></div>
    )
}

export default TableAdd;