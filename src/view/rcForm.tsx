import React,{Component} from "react";
// import {createForm} from 'rc-form';
import Input from "antd/es/input/Input";

class RcForm extends Component {
    constructor(props: any) {
        super(props)
     }
     componentDidMount(): void {
         (this.props as any).form.setFieldsValue({
            username: "defult"
         });
     }
     submit(): void {
        const {getFieldsValue} = (this.props as any).form;
    }
    render():any{
        const {getFieldDecorator} = (this.props as any).form;
        return (
            <div>
                <h3>RcFrom</h3>
                {getFieldDecorator("username")(<Input placeholder="username"></Input>)}
                {getFieldDecorator("password")(<Input placeholder="password"></Input>)}
                <button type="submit" onClick={this.submit}>submit</button>
            </div>
        )
    }
}
export default RcForm;