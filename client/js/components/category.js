import  React,{Component} from 'react';

export default class Category extends Component {
    constructor(props){
        super(props);
        console.log(props);
        this.state = {content:null}
    }
    checkUpdate() {
        let item = this.props.path_name;
        let contentMap = {
            hot: 'This is list of hot product.',
            man: 'This is list of man product.',
            lady: 'This is list of lady product.',
            children: 'This is list of children product.'
        };
        
        this.setState({
            content: contentMap[item]
        }, () => {
            console.log('set content already.');
        });
    }
    componentWillMount() {
        this.checkUpdate();
    }
    render(){
        return (
            <React.Fragment>
                Category Component <br/>
                {this.state.content}
            </React.Fragment>
        );
    }
}