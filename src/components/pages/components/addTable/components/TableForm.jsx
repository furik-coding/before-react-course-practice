import React from 'react';
import ReactDOM from 'react-dom';
import TableItem from './TableItem';

const TableForm = (props) => {
    
    

    return (
        <form className="add-table-add" onSubmit={props.handler}>
            <div className="add-table-add__item">
                <input className="add-table-add__item-input" type="text" required="required" id="money" name="money" />
            </div>
            <div className="add-table-add__item">
                <input className="add-table-add__item-input" type="text" required="required" id="category" name="category" />
            </div>
            <div className="add-table-add__item">
                <input className="add-table-add__item-input" type="text" required="required" id="descr" name="descr" />
            </div>
            <div className="add-table-add__submit">
                <input className="add-table-add__submit-input" type="submit" value="Добавить" />
            </div>
        </form>
    )
}

export default TableForm;