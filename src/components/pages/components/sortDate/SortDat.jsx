import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import AddTable from '../addTable/AddTable';


const SortDat = (props) => {

    
    const yearSelect = document.getElementById('year');
    const monthSelect = document.getElementById('month');
    
    let todDate = new Date();

    let month = todDate.getMonth() + 1;
    let year = todDate.getFullYear();

    return (
        <section className="income-header" onChange={props.handler} >
            <div className="income-header__item">
                <h4>Год</h4>
                <div className="income-header__item-wrap">
                    <select  className="income-header__item-select" id="year"  defaultValue={year}  name="year" onChange={(event) => {
                        let data = parseInt(event.target.value);
                        props.updateYear(data);
                        // console.log(value)
                    }} >
                        <option  selected value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                        <option value="2027">2027</option>
                        <option value="2028">2028</option>
                        <option value="2029">2029</option>
                        <option value="2030">2030</option>
                    </select>
                </div>
            </div>
            <div className="income-header__item">
                <h4>Месяц</h4>
                <div className="income-header__item-select">
                    <select name="" id="month" defaultValue={month} onChange={(event) => {
                        let data = parseInt(event.target.value);
                        props.updateMonth(data);
                        console.log(event.target.value);
                    }} >
                        <option value="1">Январь</option>
                        <option value="2">Февраль</option>
                        <option value="3">Март</option>
                        <option value="4">Апрель</option>
                        <option value="5">Май</option>
                        <option value="6">Июнь</option>
                        <option value="7">Июль</option>
                        <option value="8">Август</option>
                        <option value="9">Сентябрь</option>
                        <option value="10">Октябрь</option>
                        <option value="11">Ноябрь</option>
                        <option value="12">Декабрь</option>
                    </select>
                </div>
            </div>
        </section>
    )
}

export default SortDat;