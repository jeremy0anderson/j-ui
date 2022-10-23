import * as React from 'react';
import {motion} from 'framer-motion';
import './navbar.css';

function Toggle(props:any){
  const lineVariants = {
      open:(line:number)=> {
        switch(line){
          case 0:
           return {
             // transform:'matrix(1, 1, 1, 1, 1, 1)' ,
             transform: '',
             x1: 5,
             x2: 45,
             y1: 5,
             y2: 40,
             transition: {

               type: 'spring'
             }
           };
          default: return {};
        }
      },
      closed: (line:number)=>{
        switch(line){
          case 0:
            return{
              x1: 5,
              x2: 45,
              y1: 5,
              y2: 5
            };
          default: return {};
        }
      }

  }
  const containerVariants={
    closed:{
      opacity:1,
    },
    open:{
      miterLimit: 0.5,
      opacity:1,
      transition: {
      }
    }
  }
  return(
    <motion.button
      style={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 0, margin: 0}}
      onClick={props.onClick}>
    <motion.svg
      stroke={"#000"}
      animate={props.open?"open":"closed"}
      initial={"closed"}
      variants={containerVariants}
      width={50}
      height={50}
      viewBox={'0 0 100 100'}>
      <motion.line
        custom={0}
        variants={lineVariants}/>
    </motion.svg>
    </motion.button>
  )
}

class Navbar extends React.Component<any, any>{
  state:any;
  constructor(props:any) {
    super(props)
    this.state={
      open: false,
    }
  }
  componentDidMount() {}
  shouldComponentUpdate(nextProps: Readonly<any>, nextState: Readonly<any>, nextContext: any): boolean {
    return this.props!==nextProps  || this.state!==nextState || this.context!==nextContext
  }
  componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) {
    prevProps;
    prevState;
    snapshot;
  }
  componentWillUnmount() {}

  render(){
    return(
      <motion.div
        className={"vw fh"}
        id={"Navbar-main"}>
        <motion.div
          className={"c fw"}
          id={"Toolbar-main"}>
          <Toggle
            open={this.state.open}
            onClick={()=>{this.setState({...this.state,open:!this.state.open})}}/>
        </motion.div>

      </motion.div>
    )
  }
}
export {Navbar}

function Test(){
  return(
    <div style={{width: "100vw", height:"100vh"}}>
    <Navbar></Navbar>
    </div>
  )
}