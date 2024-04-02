import { Component } from "react";
import { Routes,Link, Route } from 'react-router-dom';
import routes from './router'
import './css/App.css';
interface isState{
  aa:number
}
class App extends Component<any,isState>{
  constructor(use:any){
      super(use);
      this.state = {
          aa:123
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
  render(){
      return (
        <div>
            {
              routes.map((item, index) => (
                <div className='app-link' key={index}>
                  <Link to={item.path} style={{textDecoration:undefined}}> {item.name} </Link>
                </div>
              ))
            }
            <br />
            <Routes>
              {
                routes.map((item, index) => (
                  <Route path={item.path} key={index} element={<item.components />}></Route>
                ))
              }
            </Routes>
        </div>
      )
  }
}
export default App;