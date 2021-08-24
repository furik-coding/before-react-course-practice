import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import TableHead from './components/TableHead';
import TableItem from './components/TableItem';
import TableAdd from './components/TableAdd';
import TableForm from './components/TableForm';
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
                let newExpenses = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }))

                setExpenses(newExpenses)
            })
    }, [])

    return data;
}

const AddTable = (props) => {


    const incomeTableElements = useIncome();
    const expensesTableElements = useExpenses();
    let tableName = props.table;
    let elements;
    let tableAddForm;
    let todDate = new Date();
    let day = todDate.getDay() + 1;
    let month = todDate.getMonth() + 1;
    let year = todDate.getFullYear();
    let postDate = day  + '.' + month  + '.' + year ;


    

    if(tableName === 'income') {

        

         elements = incomeTableElements.map(item => {
            if(props.year === item.date.year) {
                if(props.month === item.date.month) {
                    return (
                        <TableItem  money={item.mon} category={item.cat} descr={item.descr} date={item.date.postFormat}/>
                    )
                }
            }
         })
        

    }  else if(tableName === 'expenses') {

         elements = expensesTableElements.map(item => {
            if(props.year === item.date.year) {
                if(props.month === item.date.month) {
                    return (
                        <TableItem  money={item.mon} category={item.cat} descr={item.descr} date={item.date.postFormat}/>
                    )
                }
            }
         })

        
    }

    

    


    const addItem = (e) => {
        e.preventDefault();


        let moneyInput = document.getElementById('money');
        let categoryInput = document.getElementById('category');
        let descrInput = document.getElementById('descr');

        
        if(props.table == 'income') {
            firebase
                .firestore()
                .collection('users')
                .doc('000001')
                .collection('tables')
                .doc('income')
                .collection('tableItems')
                .add({
                    mon: moneyInput.value,
                    cat: categoryInput.value,
                    descr: descrInput.value,
                    date: {
                        day: day,
                        month: month,
                        year: year,
                        postFormat: postDate
                    }
                })
        } else if(props.table == 'expenses') {
            firebase
                .firestore()
                .collection('users')
                .doc('000001')
                .collection('tables')
                .doc('expenses')
                .collection('tableItems')
                .add({
                    mon: moneyInput.value,
                    cat: categoryInput.value,
                    descr: descrInput.value,
                    date: {
                        day: day,
                        month: month,
                        year: year,
                        postFormat: postDate
                    }
                })
        }

    }


    if(props.year == year && props.month == month) {
        tableAddForm = () => {
            return(
                <div className="add-table__footer">
                    <TableAdd />
                    <TableForm handler={addItem} />
                </div>
            )
        };
    } else {
        tableAddForm = () => {
            return(
                <div className="add-table__footer" > 
                </div>
            )
        };
    }

    

    return (
        <div className="add-table-wrap">
            
            <TableHead />
            <div className="add-items" id="addItems">
                
              {elements}
            </div>
            
            {tableAddForm()}
            
        </div>
    )
}

export default AddTable;