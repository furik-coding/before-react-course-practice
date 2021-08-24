import React, {useState, useEffect} from 'react';
import AddTable from '../components/addTable/AddTable';
import SortDat from '../components/sortDate/SortDat';




class Income extends React.Component  {

    todDate = new Date();
    state = {
        year: this.todDate.getFullYear(),
        month: this.todDate.getMonth() + 1
    };

    updateYear= (value) => {
        console.log(value)
        this.setState({ year: value })
    }

    updateMonth= (value) => {
        console.log(value)
        this.setState({ month: value })
    }

    render() {

    return (
        <div className="income page" id="income">
            <div className="page-wrap">
                <SortDat updateYear={this.updateYear} updateMonth={this.updateMonth} />
                <section className="income-start">
                    <h1 className="page-title">Мои Доходы</h1>
                </section>
                <section className="income-table" id="table">
                <AddTable table="income" year={this.state.year} month={this.state.month} />
                </section>
            </div>
        </div>
        
    )
    }
}

export default Income;