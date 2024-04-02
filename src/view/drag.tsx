import { Component } from "react";
import { toggleTodo, addTodo} from "../store/reducers/todoSlice";
import {connect} from "react-redux";
import {Todo}  from "../store/type";
import '../scss/drag.scss'
interface MyComponentProps {
    toggleTodo: any,
    addTodo: any;
    store: Todo;
}
interface StateInterface {
    aa: number,
    bb: any;
}
interface isState{
    aa:number,
    bb:any
}
class Drag extends Component<MyComponentProps,isState>{
    constructor(props:any){
        super(props);
        this.state = {
            aa:123,
            bb:props
        };
    }
    getSnapshotBeforeUpdate(prevProps: Readonly<any>, prevState: Readonly<isState>) {
        console.log("beforeUpdate"+prevProps);
        console.log("beforeUpdate"+prevState);
    }
    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<isState>, snapshot?: any): void {
        console.log("didUpdate"+prevProps);
        console.log("didUpdate"+prevState);
    }
    componentDidMount(): void {
        this.props.toggleTodo({text:'你好奥'})
    }
    changetext(props:any):void{
        props.toggleTodo({text:'我很好'})
        let { aa } = this.state
        this.setState({
            aa: aa+1
        })
    }
    render(){
        const { aa } = this.state
        return <div className="useSelf">
            {this.props.store.text}
            <p>{aa}</p>
            <input type="button" value="点击变化" onClick={()=>{this.changetext(this.props)}}/>
        </div>
    }
}
const mapStateToProps = (state: any) => ({
    store: state.todos,
});
export default connect(mapStateToProps, { toggleTodo, addTodo})(Drag);