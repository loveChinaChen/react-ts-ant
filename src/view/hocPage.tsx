import React,{Component} from "react";

// 高级组件 传入一个组件返回一个组件
const foo = (Cmp:any) => (props:any) =>{
    return (
        <div className="border">
            <Cmp {...props}></Cmp>
        </div>
    )
}

function Child(props:any) {
    return <div className="border">child={props.name}</div>
}
const Foo = foo(Child)

export default class HocPage extends Component { 
    render(): React.ReactNode {
        return (
            <div>
                <h3>HocPage</h3>
                <Foo name="参数"></Foo>
            </div>
        )
    }
}