import React,{Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Category from './components/category';
import Home from './layout/home';
import Footer from './layout/footer';

class Index extends Component{
    render(){
        return (
            <Router>
                <div>
                    <div>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/category">Category</Link></li>
                        </ul>
                    </div>
                    <div>{this.props.children}</div>
                    <Footer/>
                    <Route path="/" component={Home}>
                    {/* <IndexRoute component={Home}/> */}
                         <Route path="category" component={Category} />
                    </Route>
            </div>
        </Router>
        );
    }
}

export default Index;