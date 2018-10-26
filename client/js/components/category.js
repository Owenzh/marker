import  React,{Component} from 'react';
import { createHashHistory } from "history";
import $ from "jquery";

const ProdBtns = ({prod})=>(
    <div className="prod_btns">
        <button onClick={ ()=>collect(prod) }>收藏</button>
        <button onClick={ ()=>buy(prod) }>购买</button>
    </div>
);
const ProdItem = ({prod, url}) => (
    <div className="prod_item xu-grid-5">
        <div className="prod_short_name" onClick={ ()=>detail(prod,url) }>{prod.prod_short}</div>
        {prod.prod_price} {prod.price_unit}<br/>
        {prod.prod_type}<br/>
        <ProdBtns prod={prod}/>
    </div>
);
const history = createHashHistory();
const buy = (p) => {
    console.log(p);
    console.log('buy action...');
}
const detail = (p,url) => {
    let prod_path = '/product/'+p.id;
    console.log(url);
    // warning: hash history can not set state.
    history.push(prod_path, {preUrl: url});
    console.log(history);
    history.listen((location , action) => {
        const resetNavHighLight = (pathname)=> {
            if(pathname.indexOf('category') != -1) {
                //set category selected and unselected
                let pathstr = pathname.split('/')[2];
                $(`ul.sidebar a`).removeClass('nav_selected');
                $(`ul.sidebar a[href*=${pathstr}]`).addClass('nav_selected');
            } else {
                // set home page
                $(`ul.sidebar a[href*=category]`).removeClass('nav_selected');
            }
        };
        resetNavHighLight(location.pathname);
    });
}
const collect = (p) => {
    console.log(p);
    console.log('collect action...');
}
export default class Category extends Component {
    constructor(props){
        super(props);
        console.log(props);
        this.state = {content:null, prods: null};
 
    }
    checkUpdate(data) {
        let item = this.props.path_name;
        let contentMap = {
            hot: 'This is list of hot product.',
            man: 'This is list of man product.',
            lady: 'This is list of lady product.',
            children: 'This is list of children product.'
        };
        
        this.setState({
            content: contentMap[item],
            prods: data
        }, () => {
            console.log('set content already.');
        });
    }
    componentDidMount() {
        let type = this.props.path_name;
        $.ajax({
            url: "/api/product/"+type,
            success: ( result ) => {
                this.checkUpdate(result);
            }
        });
    }
    render() {
        let locationUrl = this.props.match.path;
        let prod_items = this.state.prods && this.state.prods.map((prd)=>
            <React.Fragment key={prd.id}>
                <ProdItem prod={prd} url={locationUrl}/>
            </React.Fragment>
        );
        return (
            <React.Fragment>
                <div className="prod_header">{this.state.content}</div>
                <div className="xu-grid">{prod_items}</div>
            </React.Fragment>
        );
    }
}