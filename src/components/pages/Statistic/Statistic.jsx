import React from 'react';
import SortDat from '../components/sortDate/SortDat';
import Graphic from '../components/Graphic/Graphic';


class Statistic extends React.Component {

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

        

        return(
            <div className="statistic page" id="statistic" >
                <SortDat updateYear={this.updateYear} updateMonth={this.updateMonth} />
                <section className="income-start">
                    <h1 className="page-title">Статистика</h1>
                </section>
                <Graphic year={this.state.year} month={this.state.month} />
            </div>
        )
    }
}

export default Statistic;