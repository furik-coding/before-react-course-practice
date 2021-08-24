import React, {useState, useEffect} from 'react';
import {Doughnut, Bar, Radar, Line } from 'react-chartjs-2';
import firebase from '../../../../firebase';

const useIncome = () => {
    const [data, setIncome] = useState([]);

    useEffect(() => {
        firebase
            .firestore()
            .collection('users')
            .doc('000001')
            .collection('tables')
            .doc('income')
            .collection('tableItems')
            .onSnapshot((snapshot) => {
                const newIncome = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }))

                setIncome(newIncome)
            })
    }, [])

    return data;
}


const useExpenses = () => {
    const [data, setExpenses] = useState([]);

    useEffect(() => {
        firebase
            .firestore()
            .collection('users')
            .doc('000001')
            .collection('tables')
            .doc('expenses')
            .collection('tableItems')
            .onSnapshot((snapshot) => {
                const newExpenses = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }))

                setExpenses(newExpenses)
            })
    }, [])

    return data;
}


const Graphics = () => {

    let incomesArr = useIncome();
    let expensesArr = useExpenses();
    let incomeData = [[], [], [], [], [], [], [], [], [], [], [], []];
    let expensesData = [[], [], [], [], [], [], [], [], [], [], [], []];
    let todDate = new Date();
    let day = todDate.getDay() + 1;
    let month = todDate.getMonth() + 1;
    let year = todDate.getFullYear();
    let postDate = day  + '.' + month  + '.' + year ;
    let monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    incomesArr.map( (item, index) => {
        let i = item.date.month - 1;
        console.log(item.date.month);
        incomeData[i].push(item.mon);
        if(!incomeData[i].sum) {
            incomeData[i].sum = parseInt(item.mon);
        } else {
            incomeData[i].sum += parseInt(item.mon);
        }
    })

    expensesArr.map( (item, index) => {
        let i = item.date.month - 1;
        console.log(item.date.month);
        expensesData[i].push(item.mon);
        if(!expensesData[i].sum) {
            expensesData[i].sum = parseInt(item.mon);
        } else {
            expensesData[i].sum += parseInt(item.mon);
        }
        
    })

    console.log("incomeData" , incomeData);
    console.log("expensesData" , expensesData);

    let dataToGraphic = [];
    let graphLabels = [];

    monthList.map((item, index) => {
        if(index < month) {
            graphLabels.push(item);
        }
    })

    incomeData.map((item, index) => {
        if(index < month) {
            console.log(item)
            if(!item.sum) {
                dataToGraphic[index] = 0;
            } else {
                if(expensesData[index].sum) {
                    dataToGraphic[index] = incomeData[index].sum - expensesData[index].sum ;
                } else {
                    dataToGraphic[index] = incomeData[index].sum;
                }
                
            }
            
        }
    })

    console.log(dataToGraphic)
    



    const data = {
        labels: graphLabels,
        datasets: [
          {
            label: 'My First dataset',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: dataToGraphic
          }
        ]
      };



    return (
        <div>
            <Line
                data={data}
            />
        </div>
    )
}

export default Graphics;