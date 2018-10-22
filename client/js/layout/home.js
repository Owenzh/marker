import React, {Component} from 'react'
// import { Link } from "react-router-dom";

// const CateItem = ({text,toLink}) => (
//   <Link to={toLink}>{text}</Link>
// );
class Home extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     category_map: null
  //   }
  // }
  // componentWillMount() {
  //   let category = [{
  //     id:1001,
  //     text: "hot",
  //     name: "hot"
  //   }, {
  //     id:1002,
  //     text: "man",
  //     name: "man"
  //   }, {
  //     id:1003,
  //     text: "lady",
  //     name: "lady"
  //   }, {
  //     id:1004,
  //     text: "children",
  //     name: "children"
  //   }];
  //   this.setState({
  //     category_map: category
  //   }, () => {
  //     console.log('set category already!');
  //   });
  // }
  render() {
    // let cate = this.state.category_map;
    // const listItems = cate.map((cate) =>
    //   <li key={cate.id}> 
    //     <CateItem text={cate.text} toLink={"/category/"+cate.name}/>
    //   </li>  
    // );
    return (
      <div>
        Home page
         {/* <React.Fragment>
          <ul>
            {listItems}
          </ul>
         </React.Fragment> */}
      </div>
    );
  }
}

export default Home;