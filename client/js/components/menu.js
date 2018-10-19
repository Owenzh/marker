import  React,{Component} from 'react';
import { Router, Route, Link } from 'react-router';
// import ReactDom from 'react-dom';

export default class Menu extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <React.Fragment>
                <ul>
                    <li>
                        Home
                    </li>
                    <li>
                        Category
                    </li>
                    <li>
                        ShopCar
                    </li>
                </ul>
            </React.Fragment>
        );
    }
}