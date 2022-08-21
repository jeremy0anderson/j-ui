import {motion} from 'framer-motion';
import styled from "styled-components";
import {Component} from 'react';
import * as React from 'react';

interface DrawerProps{
    anchor:string
    menuItems?:any
    open:boolean
    children?: any
}
interface DrawerState{
    open:boolean
}

const Box = styled(motion.div)`
  position: absolute;
  display: flex; flex-direction: column;
  top:60px; height: 0;
`
const List = styled('ul')`
  list-style-type: none;
`

const Button = styled(motion.a)`
    border: none;
  text-decoration: none;
  color:white;
  background: transparent;
  width: 100px;
  height: 60px;
`

class Drawer extends Component<DrawerProps, DrawerState>{
    constructor(props:DrawerProps) {
        super(props);
    }
    Left = (props:DrawerProps) =>(
        <Box
            style={{position: "fixed",borderRight: props.open?"0.5px solid darkslategray":"none", background: "rgb(25, 25, 25)", height: "100vh", x:0, zIndex: 1010, overflow:"hidden", opacity: 0}}
            animate={{width: props.open?250:0,opacity: props.open?1:0}}
            transition={{duration: 0.2, bounce:2, type: "spring"}}>
            <List>
            {props.menuItems.map((item:{text:string,to:string}, index:number)=>{
                return (
                    <Box
                        key={item.text+index}>
                        <Button
                            whileTap={{scale: 0.9}}
                            whileHover={{scale: 1.08}}
                            href={item.to}
                            key={item+"-list-item"}>{item.text}
                        </Button>

                    </Box>
                )
            })}</List>
        </Box>
    )
    Right = (props:DrawerProps) =>(
        <Box
            style={{position: "fixed",borderLeft: props.open?"0.5px solid darkslategray":"none", background: "rgb(25, 25, 25)", height: "100vh", right:0, zIndex: 1010, overflow: "hidden" , opacity: 0}}
            animate={{width: props.open?250:0,opacity: props.open?1:0}}
            transition={{duration: 0.2, bounce: 2, type: "spring"}}>
            {props.children}
        </Box>
    )
    Top = (props:DrawerProps) =>(
        <Box
            initial={false}
            style={{borderBottom: props.open?"0.5px solid darkslategray":"none",position: "fixed", y: 0, background: "rgb(25, 25, 25)", width: "100vw", zIndex: 1010, overflow:"hidden",  opacity: 0}}
            animate={{height: props.open?240:0, opacity: props.open?1:0}}
            transition={{duration: 0.2}}>
            {props.children}
        </Box>
    )
    render(){
        switch(this.props.anchor){
            case "left": return <this.Left {...this.props}/>
            case "right": return <this.Right {...this.props}/>
            case "top": return <this.Top {...this.props}/>
            default: return <p>No drawer anchor prop. Please make sure to pass one of the following: "top", "left", or "right" through the drawerAnchor prop of the Navbar component</p>
        }

    }
}

export default Drawer;