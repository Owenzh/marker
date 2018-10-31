import React,{Component} from 'react';
import ReactDom from 'react-dom'

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
        //   console.log('Component WILL RECEIVE PROPS!');
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
        //   console.log('Component DID UPDATE!');
        //   console.log(prevProps);
        //   console.log(this.props);
          this.props.init();
    }
    componentWillUnmount() {
           console.log('Component WILL UNMOUNT!.....');
    }
    _close() {
        this.coverdiv.setAttribute('style', 'display:none');
        this.popupdiv.setAttribute('style', 'display:none');
        this._reset();
        console.log('close popup '+ this.popupid);
        // ReactDom.unmountComponentAtNode(document.getElementById(this.popupid));
    }
    _reset() {
        this.show = false;
        // console.log(this);
        this.props.content.title = "";
        this.props.content.body = "";
        this.props.destroy();
    }
    _show() {
        console.log(this.popupid);
        let popupContainer = document.getElementById(this.popupid);
        // console.log(popupContainer);
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
                            <div className="title">
                                {this.props.content.title}
                            </div>
                            <span onClick={this.closePopup}>[x]</span>
                        </div>
                        <div className="xu-popup-content">
                            <div dangerouslySetInnerHTML={{ __html: this.props.content.body }}></div>
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