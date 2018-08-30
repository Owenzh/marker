import React,{Component} from 'react';
import Greeter from './greeter';
import Demo from './demo';

class Main extends Component{
    render(){
        return (
            <div>
                <Greeter name='marker app'/>
                <Demo />
            </div>
        );
    }
}

export default Main;