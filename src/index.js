import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './components/app/';
//import AddPost from './examples/index'

class WhoAmI extends Component {
    constructor(props) { // Props создаёт объект, в котором будут лежать передаваемые св-ва для компонента {name, surname, link}. Props используется только для чтения, т.е. его менять нельзя!
        super(props) // конструктор нашего родителя
        this.state = { // Данное св-во можно изменять. Св-во state создаётся в виде объекта
            years: 26
        }
        
    }
    nextYear = () => {
        this.setState(state =>({ // Данный вид записи используется для того, чтобы не было конфликтов из за оптимизации (асинхронности)
            years: ++state.years // Изменяем значение years
        }))
    }
    
    render () {
        const {name,surname,link} = this.props // Используется контекст вызова props для каждого объекта. Т.к. props объект, мы можем использовать деструктуризацию, и вытащить оттуда нужные нам св-ва
        const {years} = this.state // т.к. state является объектом, достаём через деструктуризацию св-во years
        return (
            <>
                <button onClick={this.nextYear}>Increase</button>
                <h1>My name is {name}, surname-{surname}, years = {years}</h1>
                <a href={link}>My Profile</a>
            </>
        )}
        }  

        // Новый вариант записи.


        class WhoAmINew extends Component {
           state ={
               years:26
           }
            nextYear = () => {
                this.setState(state =>({
                    years: ++state.years
                }))
            }
            
            render () {
                const {name,surname,link} = this.props // Используется контекст вызова props для каждого объекта. Т.к. props объект, мы можем использовать деструктуризацию, и вытащить оттуда нужные нам св-ва
                const {years} = this.state // т.к. state является объектом, достаём через деструктуризацию св-во years
                return (
                    <>
                        <button onClick={this.nextYear}>Increase</button>
                        <h1>My name is {name}, surname-{surname}, years = {years}</h1>
                        <a href={link}>My Profile</a>
                    </>
                )}
                }  


const All = () => {
    return (
        <>
            <WhoAmINew name="sergey" surname='Lavr' link='vl.com' />
            <WhoAmINew name="Vasya" surname='Lavr' link='vl.com' />
            <WhoAmINew name="Kolia" surname='Lavr' link='vl.com' />
        </>
    )
}

ReactDOM.render(
 <App />, document.getElementById('root')
);

reportWebVitals();
