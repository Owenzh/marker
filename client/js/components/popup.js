import React,{Component} from 'react';

class Popup extends Component{
    constructor(props) {
        super(props);
        // this.state = {show: false};
        this.popupid = 'model-'+new Date().valueOf();
        console.log(this.popupid);
    }
    componentWillMount() {
        console.log('Component WILL MOUNT!')
    }
    componentDidMount() {
         console.log('Component DID MOUNT!')
    }
    componentWillReceiveProps(newProps) {
          console.log('Component WILL RECEIVE PROPS!' + newProps)
    }
    shouldComponentUpdate(newProps, newState) {
          return true;
    }
    componentWillUpdate(nextProps, nextState) {
          console.log('Component WILL UPDATE!');
    }
    componentDidUpdate(prevProps, prevState) {
          console.log('Component DID UPDATE!')
    }
    componentWillUnmount() {
           console.log('Component WILL UNMOUNT!')
    }
    render(){
        return (
            <React.Fragment>
                <div id={this.popupid}>
                    <div className="xu-cover">
                    </div>
                    <div className="xu-popup">
                        {this.props.content}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
Popup.defaultProps = {
    show: false
}
export default Popup;