import React from 'react';
import i1 from '../../../i/income.svg';
import i2 from '../../../i/expenditure.png';
import i3 from '../../../i/graph.svg';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const Nav = (props) => {

    return (
        <nav className="header-nav">
            <ul className="header-nav-ul">
                    <li className="header-nav__li">
                        <Link to="/income">
                            <img src={i1} alt="" />
                            <div className="header-nav__li-text">Доходы</div>
                        </Link>
                    </li>
                    <li className="header-nav__li">
                        <Link to="/expenses">
                            <img src={i2} alt="" width="80" />
                            <div className="header-nav__li-text">Расходы</div>
                        </Link>
                    </li>
                    <li className="header-nav__li">
                        <Link to="/statistic">
                            <img src={i3} alt="" />
                            <div className="header-nav__li-text">Статистика</div>
                        </Link>
                    </li>
            </ul>
        </nav>
    )
}

export default Nav;