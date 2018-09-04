import React, {Component} from 'react'
import Popup from '../components/popup'
class Header extends Component{
  constructor(props){
    super(props);
    this.state = {showmodel:false}
  }
  openModel(){
    this.setState({showmodel:true});
  }
  createItem(){
    alert('createItem');
  }
  render() {
    let createItemModel = (
      <div>
        <h1>createItemModel content</h1>
        <button onClick={this.createItem}></button>
      </div>
    );
    return (
      <React.Fragment>
        <div className="header">
          <ul className="xu-nav xu-grid">
            <li className="xu-grid-1"></li>
            <li className="xu-grid-2"><img className="xu-logo" src="../imgs/logo.png"/></li>
            <li className="xu-grid-2"><span onClick={this.openModel.bind(this)}>创建条目</span></li>
            <li className="xu-grid-3"><input type="text"/></li>
            <li className="xu-grid-1"></li>
            <li className="xu-grid-2"><a href="javascript:void();">管理</a></li>
            <li className="xu-grid-1"></li>
          </ul>
          <Popup show={this.state.showmodel} content={createItemModel}/>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;