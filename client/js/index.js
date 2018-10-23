import React,{Component} from 'react';
import { HashRouter as Router, Route, Switch, NavLink } from "react-router-dom";

import Home from './components/home';
import Category from './components/category';

const CateItem = ({text,toLink,selectedClass}) => (
    <NavLink exact replace to={toLink} activeClassName={selectedClass}>{text}</NavLink> //add replace atrr to hash history cannot push state; it is ignored
);
const RouteItem = ({key,path,pathName}) => (
    <Route exact key={key} path={path} render={props=><Category {...props} path_name={pathName}/>}/>
);

class Index extends Component{
    constructor(props) {
        super(props);
        this.state = {category_map: null}
    }
    componentWillMount() {
        let category = [{
            id: 1001,
            text: "hot",
            name: "hot"
        }, {
            id: 1002,
            text: "man",
            name: "man"
        }, {
            id: 1003,
            text: "lady",
            name: "lady"
        }, {
            id: 1004,
            text: "children",
            name: "children"
        }];
        this.setState({
            category_map: category
        }, () => {
            console.log('set category already.');
        });
    } 
    render(){
        let cate = this.state.category_map;
        const listItems = cate.map((cate) =>
          <li key={cate.id}> 
            <CateItem text={cate.text} toLink={"/category/"+cate.name} selectedClass={"nav_selected"}/>
          </li>  
        );
        //Init the route for special link
        const routeItems = cate.map((cate)=>
            <RouteItem key={cate.id} path={"/category/"+cate.name} pathName={cate.name}/>
        );
        return (
            <Router>
                <div className="index xu-grid">
                    <ul className="sidebar xu-grid-1">
                        <li>
                            <NavLink exact replace to='/' activeClassName="nav_selected">Home</NavLink>
                        </li>
                        {listItems}
                    </ul>
                    
                    <div className="content xu-grid-10">
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            {routeItems}
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default Index;