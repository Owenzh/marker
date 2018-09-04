import React,{Component} from 'react';
import Header from './layout/header';
import Body from './layout/body';
import Footer from './layout/footer';

class Index extends Component{
    render(){
        return (
            <React.Fragment>
                <Header />
                <Body />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Index;