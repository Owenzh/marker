import React,{Component} from 'react';
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";

import Home from './layout/home';
import Category from './components/category';

const CateItem = ({text,toLink}) => (
    <Link to={toLink} replace={true}>{text}</Link> //add replace atrr to hash history cannot push state; it is ignored
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
          <li key={cate.id} style={{padding: "10px"}}> 
            <CateItem text={cate.text} toLink={"/category/"+cate.name}/>
          </li>  
        );
        //Init the route for special link
        const routeItems = cate.map((cate)=>
            <RouteItem key={cate.id} path={"/category/"+cate.name} pathName={cate.name}/>
        );
        return (
            <Router>
                <div>
                    <ul>
                        {listItems}
                    </ul>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        {routeItems}
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default Index;