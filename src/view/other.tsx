import { Component } from "react";
import {connect} from "react-redux";
import {Todo}  from "../store/type"
interface MyComponentProps {
    store: Todo;
}
class OtherComponent extends Component<MyComponentProps>{
    constructor(props:any){
        super(props);
        this.state = {
            aa:123
        };
    }
    componentDidMount(): void {
       
    }
    render(){
        return (
            <div>
                {this.props.store.text}
                <p></p>
            </div>
        )
    }
}
const mapStateToProps = (state: any) => ({
    store: state.todos,
});
export default connect(mapStateToProps, { })(OtherComponent);