import React, {Component} from 'react'
import Popup from '../components/popup'
class Header extends Component{
  constructor(props){
    super(props);
    this.state = {showmodel:false,content:''}
  }
  openModel(id){
    let createItemModel = "";
    if(id=="1"){
      createItemModel = (
        <div>
          <h1>创建类别</h1>
          <button onClick={this.createCategory}>创建</button>
        </div>
      );
    }else{
      createItemModel = (
        <div>
          <h1>创建条目</h1>
          <button onClick={this.createItem}>创建</button>
        </div>
      );
    }
    this.setState({showmodel:true,content:createItemModel});
  }
  createItem(){
    alert('createItem');
  }
  createCategory(){
    alert('createCategory');
  }
  render() {
    return (
      <React.Fragment>
        <div className="header">
          <ul className="xu-nav xu-grid">
            <li className="xu-grid-1"></li>
            <li className="xu-grid-2"><img className="xu-logo" src="../imgs/logo.png"/></li>
            <li className="xu-grid-2"><span onClick={this.openModel.bind(this,'1')}>创建类别</span></li>
            <li className="xu-grid-2"><span onClick={this.openModel.bind(this,'2')}>创建条目</span></li>
            <li className="xu-grid-3"><input type="text"/></li>
            <li className="xu-grid-1"></li>
            <li className="xu-grid-2"><a href="javascript:void();">管理</a></li>
            <li className="xu-grid-1"></li>
          </ul>
          <Popup show={this.state.showmodel} content={this.state.content}/>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;