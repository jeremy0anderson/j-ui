import * as React from 'react';
import {motion} from 'framer-motion';
import styled from "styled-components";
import Drawer from "./Drawer";

const Box = styled(motion.div)`
  z-index: 1008;
  width: 100%;
  display: flex;
  height: 60px;
  align-items:center; justify-content: center; align-content: center;
  background: linear-gradient(-45deg, rgb(125, 10, 201) 0%, rgb(125, 0, 100) 100%);
  position: fixed;
`;


interface NavbarProps{
    drawerAnchor:string
}
interface NavbarState{
    open: boolean
}
// const styles =(props:NavbarProps)=> {
//     return {
//         main: {
//             zIndex: 1008,
//             width: "100%",
//             display: 'flex',
//             height: 60,
//             alignItems: 'center', justifyContent: 'center', alignContent: 'center',
//             background: 'linear-gradient(-45deg, rgb(125, 10, 201) 0%, rgb(125, 0, 100) 100%)',
//             position: 'fixed',
//
//         },
//         toggle: {
//             position: 'absolute',
//             justifyContent: 'center', alignItems: 'center', alignContent: 'center',
//             background: "none",
//             border: "none",
//             cursor: "pointer",
//             color: "white"
//         },
//         toolbar: {
//             zIndex: 1000,
//             marginInline: 15,
//             height: 60,
//             width: "100%",
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: props.drawerAnchor === "left" ? "right" : "left",
//             alignContent: 'center',
//
//         }
//     }
// }


class Navbar extends React.Component<NavbarProps, NavbarState>{
    state:NavbarState = {open: false}
    props: Readonly<NavbarProps>;
    constructor(props:NavbarProps) {
        super(props);
    }
    componentDidMount() {}
    shouldComponentUpdate(nextProps: Readonly<NavbarProps>, nextState: Readonly<NavbarState>): boolean {
        return this.state!==nextState || this.props!== nextProps;
    }
    componentDidUpdate(prevProps: Readonly<NavbarProps>, prevState: Readonly<NavbarState>, snapshot?: any) {prevProps; prevState; snapshot;}
    componentWillUnmount() {}
    toggleDrawer(){
        this.setState({
            ...this.state,
            open: !this.state.open
        });
    }
    render(){
        return(
            <React.Fragment>
                <Box
                    animate={{}}
                    transition={{}}>
                </Box>
                <Drawer anchor={"top"} open={this.state.open}></Drawer>
            </React.Fragment>
        )
    }
}

export default Navbar;