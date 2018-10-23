import React,{Component} from 'react';
import { HashRouter as Router, Route, Switch, NavLink } from "react-router-dom";

import Home from './components/home';
import Category from './components/category';

const CateItem = ({text,toLink,selectedClass}) => (
    <NavLink exact replace to={toLink} activeClassName={selectedClass}>{text}</NavLink> //add replace atrr to hash history cannot push state; it is ignored
);
const RouteItem = ({key,path,pathName}) => {
    if(pathName == "home") {
        return (<Route exact path="/" component={Home}/>);
    } else {    
        return (<Route exact key={key} path={path} render={props=><Category {...props} path_name={pathName}/>}/>);
    }        
};

class Index extends Component{
    constructor(props) {
        super(props);
        this.state = {category_map: null}
    }
    componentWillMount() {
        let category = [{
            id: 1000,
            text: "首页",
            name: "home",
            toLink: "/"
        }, {
            id: 1001,
            text: "热卖",
            name: "hot",
            toLink: "/category/hot"
        }, {
            id: 1002,
            text: "男装",
            name: "man",
            toLink: "/category/man"
        }, {
            id: 1003,
            text: "女装",
            name: "lady",
            toLink: "/category/lady"
        }, {
            id: 1004,
            text: "儿童",
            name: "children",
            toLink: "/category/children"
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
            <CateItem text={cate.text} toLink={cate.toLink} selectedClass={"nav_selected"}/>
          </li>  
        );
        //Init the route for special link
        const routeItems = cate.map((cate)=>
            <RouteItem key={cate.id} path={cate.toLink} pathName={cate.name}/>
        );
        return (
            <Router>
                <div className="index xu-grid">
                    <ul className="sidebar xu-grid-1">
                        {listItems}
                    </ul>
                    
                    <div className="content xu-grid-10">
                        <Switch>
                            {routeItems}
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default Index;