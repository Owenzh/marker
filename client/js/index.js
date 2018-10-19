import React,{Component} from 'react';
import { Router, Route, Link, IndexRoute } from 'react-router';

import Category from './components/category';
import Home from './layout/home';
import Footer from './layout/footer';

class Index extends Component{
    render(){
        return (
            <Router>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/category">Category</Link></li>
                </ul>
            </div>
            <div>{this.props.children}</div>
            <Footer/>
          <Route path="/" component={Home}>
            <IndexRoute component={Home}/>
            <Route path="category" component={Category} />
          </Route>
        </Router>
        );
    }
}

export default Index;