import React,{Component} from 'react';
import { HashRouter as Router, Route, Switch, NavLink } from "react-router-dom";
import $ from 'jquery';

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
        this.state = {category_map: null,showLogin:false,hasPopUp: true}
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
        this.setState({showLogin:true,hasPopUp: true},()=>this.forceUpdate());
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
        const popProp = {title:'登陆', body: '<form class="form_login xu-grid"><p><label class="xu-grid-2">用户名:</label><input type="text" id="name" name="name"/></p><p><label class="xu-grid-2">密码:</label><input type="password" id="pwd" name="pwd"/></p><p><input id="btn_login" type="button" value="登陆" /></p><form>'};
        const popUpInit = ()=>{
            console.log('popUp init method now');
            $('#btn_login').on('click',()=>{
                let name = $('#name').val();
                let pwd = $('#pwd').val();
                console.log('btn_login click method now');
            });
        };
        const popUpDestroy = ()=>{
            this.setState({hasPopUp: false}, ()=>this.forceUpdate());
        };
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
                        {
                            this.state.hasPopUp?<Popup show={this.state.showLogin} content={popProp} init={popUpInit} destroy={popUpDestroy}/>:null
                        }
                    </div>
                </div>
            </Router>
        );
    }
}

export default Index;