import React,{Component} from 'react';
// import ReactDom from 'react-dom'

class Popup extends Component{
    constructor(props) {
        super(props);
        this.popupid = 'popup-'+new Date().valueOf();
        this.coverdiv = null;
        this.popupdiv = null;
        this.closePopup = this._close.bind(this);
        console.log(this.popupid);
    }
    componentWillMount() {
        // console.log('Component WILL MOUNT!')
    }
    componentDidMount() {
        //  console.log('Component DID MOUNT!')
    }
    componentWillReceiveProps(newProps) {
          console.log('Component WILL RECEIVE PROPS!');
          if(newProps.show){
            this._show();
          }
    }
    shouldComponentUpdate(newProps, newState) {
          return true;
    }
    componentWillUpdate(nextProps, nextState) {
        //   console.log('Component WILL UPDATE!');
    }
    componentDidUpdate(prevProps, prevState) {
        //   console.log('Component DID UPDATE!')
    }
    componentWillUnmount() {
        //    console.log('Component WILL UNMOUNT!')
    }
    _close() {
        this.coverdiv.setAttribute('style', 'display:none');
        this.popupdiv.setAttribute('style', 'display:none');
        this.show = false;
        console.log('close popup '+ this.popupid);
    }
    _show() {
        console.log(this.popupid);
        let popupContainer = document.getElementById(this.popupid);
        console.log(popupContainer);
        this.coverdiv = popupContainer.getElementsByClassName('xu-cover')[0];
        this.popupdiv = popupContainer.getElementsByClassName('xu-popup')[0];
        this.coverdiv.setAttribute('style', 'display:block');
        this.popupdiv.setAttribute('style', 'display:block');
        let clasNm = this.popupdiv.className;
        if (clasNm.indexOf('xu-popup-show') == -1) {
            this.popupdiv.className = clasNm + ' xu-popup-show';
        }
    }
    render(){
        return (
            <React.Fragment>
                <div id={this.popupid}>
                    <div className="xu-cover">
                    </div>
                    <div className="xu-popup xu-round-edge">
                        <div className="xu-popup-header xu-round-edge-lr">
                            <span onClick={this.closePopup}>[x]</span>
                        </div>
                        <div className="xu-popup-content">
                            {this.props.content}
                        </div>
                        <div className="xu-popup-footer">
                        </div>
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