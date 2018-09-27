import React, {Component} from 'react'
import Popup from '../components/popup'

class Body extends Component{
  constructor(props){
    super(props);
    this.state = {showmodel:false,content:''}
  }
  openModel(id){
    let createItemModel = createItemModel = (
        <div>
          <h1>不同组件重复使用</h1>
          <button onClick={this.createItem}>点击</button>
        </div>
      );
      this.setState({showmodel:true,content:createItemModel});
    }
  
  createItem(){
    alert('createItem');
  }
  render() {
    return (
      <div>
         <React.Fragment>
         Body
         <div ><span onClick={this.openModel.bind(this)}>测试不同组件重复使用popup</span></div>
         <Popup show={this.state.showmodel} content={this.state.content}/>
         </React.Fragment>
      </div>
    );
  }
}

export default Body;