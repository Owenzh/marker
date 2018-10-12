import React, {Component} from 'react'
import Popup from '../components/popup'
class Header extends Component{
  constructor(props){
    super(props);
    this.state = {showmodel:false,content:''}
  }
  openModel(id){
    let createItemModel = "";
    let title = "";
    if(id=="1"){
      title = "创建类别"
      createItemModel = (
        <React.Fragment>
          <div className="form">
            <p>
              <label>类别缩写</label>
              <input type="text" name="cate_key"/>          
            </p>
            <p>
              <label>类别名称</label>
              <input type="text" name="cate_name"/>          
            </p>
          </div>
          <button onClick={this.createCategory}>创建</button>
        </React.Fragment>
      );
    }else{
      title = "创建条目"
      createItemModel = (
        <div>
          <button onClick={this.createItem}>创建</button>
        </div>
      );
    }
    this.setState({showmodel:true,content:{title:title,body:createItemModel}});
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
            {/* <li className="xu-grid-2"><img className="xu-logo" src="../imgs/logo.png"/></li> */}
            <li className="xu-grid-2"><span onClick={this.openModel.bind(this,'1')}>创建类别</span></li>
            <li className="xu-grid-2"><span onClick={this.openModel.bind(this,'2')}>创建条目</span></li>
            {/* <li className="xu-grid-2"><a href="javascript:void();">管理</a></li> */}
          </ul>
          <Popup show={this.state.showmodel} content={this.state.content}/>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;