import React,{Component} from 'react';
import { HashRouter as Router, Route, Switch, NavLink } from "react-router-dom";

import Home from './components/home';
import Category from './components/category';
import Product from './components/product';
import Popup from './components/popup';

const CateItem = ({text,toLink,selectedClass}) => (
    <NavLink exact replace to={toLink} activeClassName={selectedClass}>{text}</NavLink> //add replace atrr to hash history cannot push state; it is ignored
);
const RouteItem = ({key,path,pathName}) => (
    <Route exact key={key} path={path} render={(props)=><Category {...props} path_name = {pathName} />} />
);

class Index extends Component{
    constructor(props) {
        super(props);
        this.state = {category_map: null,showLogin:false}
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
            // console.log('set category already.');
        });
    }
    openLoginWin(){
        this.setState({showLogin:true});
    } 
    render(){
        let cate = this.state.category_map;
        const listItems = cate.map((cate) =>
          <li key={cate.id}> 
            <CateItem text={cate.text} toLink={cate.toLink} selectedClass={"nav_selected"}/>
          </li>  
        );
        //Init the route for special link
        const routeItems = cate.slice(1).map((cate)=>
            <RouteItem key={cate.id} path={cate.toLink} pathName={cate.name}/>
        );
        const popProp = {title:'登陆', body: 'This is win body.'};
        return (
            <Router>
                <div className="index xu-grid">
                    <ul className="sidebar xu-grid-1">
                        {listItems}
                    </ul>
                    
                    <div className="content xu-grid-10">
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            {routeItems}
                            <Route exact path="/product/:prodId" component={Product}/>
                        </Switch>
                    </div>
                    <div className="rightbar xu-grid-1">
                        <span className="aspan" onClick={this.openLoginWin.bind(this)}>登陆/注册</span>
                        <Popup show={this.state.showLogin} content={popProp} />
                    </div>
                </div>
            </Router>
        );
    }
}

export default Index;