import React from 'react';
import AddTable from '../components/addTable/AddTable';
import SortDat from '../components/sortDate/SortDat';

class Expenses extends React.Component{

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
            <div className="expenses page" id="expenses">
                <div className="page-wrap">
                    <SortDat updateYear={this.updateYear} updateMonth={this.updateMonth} />
                    <section className="expenses-start">
                        <h1 className="page-title">Мои Расходы</h1>
                    </section>
                    <section className="expenses-table">
                        <AddTable table="expenses" year={this.state.year} month={this.state.month} />
                    </section>
                </div>
            </div>
        )
    }
}

export default Expenses;