import React from 'react';

const TableHead = (props) => {

    return (
        <div className="add-table__head">
            <div className="add-table__col">
                <div className="add-table__col-text">Доход, $</div>
            </div>
            <div className="add-table__col">
                <div className="add-table__col-text">Источник</div>
            </div>
            <div className="add-table__col">
                <div className="add-table__col-text">Описание</div>
            </div>
            <div className="add-table__col">
                <div className="add-table__col-text">Дата</div>
            </div>
        </div>
    )
}

export default TableHead;