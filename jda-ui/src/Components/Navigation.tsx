import * as React from 'react'
import * as Framer from 'framer-motion';
import styled from 'styled-components';
import * as M from '@mui/material';
import * as I from '@mui/icons-material';
import {Link as RLink} from 'react-router-dom';
import './navigation.css';
// import {BrowserRouter} from 'react-router-dom';

import {NavigationState, NavigationProps, DrawerProps, DrawerState, MenuProps, PermanentMenuProps} from './Interface';
const LinkRef=React.forwardRef((props:any, ref:any)=>{
    return <RLink ref={ref} to={props.to} {...props}/>
}), Link = Framer.motion(LinkRef);
const {motion} = Framer;
const DrawerContainer = styled(motion.div)`
`;
const Navbar = styled(motion.div)`
  position: fixed;
  align-items: center;
  align-content:center;
  display: flex;
  width: 100vw;
  height: 60px;
`;
const Toolbar = styled('div')`
  width: 100%;
  height: 100%;
  display: flex;
  padding-inline: 10px;
  align-items: center;
  align-content:center;
`;

class Drawer extends React.Component<DrawerProps, DrawerState> {
    constructor(props:DrawerProps) {
        super(props);
        this.state = {}
    }

    Menu= (props:MenuProps) => (
        <motion.ul
            style={{zIndex: 1010, listStyleType:'none', display: 'flex', flexDirection: 'column', padding: 0, justifyContent:"center", alignItems: 'center', alignContent: 'center', margin: 0, left: 0, overflow: 'hidden'}}
            transition={{duration: 0.3, type:'spring'}}
            animate={{left: props.open?"-100%":0, height:props.items.length*60}}>
            {props.items.map((item, index)=>{
                return (
                    <Link
                        onClick={props.onToggle}
                        whileHover={{scale: 1.1}}
                        key={item+"link"}
                        style={{width: props.anchor === "top"&&props.open?"100vw":"auto", borderBottom: "1px solid black",zIndex: 1010,height: 60, textDecoration: 'none', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center'}}
                        to={item.toLowerCase() === "home"?"/":`/${item.toLowerCase()}`}>
                            <motion.li
                                key={item+index}
                                animate={{width:props.open?250:0}}
                                transition={{type:'spring',duration:0.3}}
                                style={{

                                    width: props.anchor === "top"?"100vw":"auto",
                                    zIndex: 1010,
                                    position: 'relative', top:0,
                                    height: 60, display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
                                {item}
                            </motion.li>
                </Link>)
            })}


        </motion.ul>
    )
    PermanentMenu = (props:PermanentMenuProps) => {
        return (
            <motion.div style={{height: "calc(100vh - 60px)", position: 'fixed', top: 60, left: 0, width: 80,boxShadow: "4px 4px 10px darkgray"}}>
                {props.icons.map((icon, index)=>{
                    return(
                        <Link
                            onClick={props.onToggle}
                            key={index}
                            style={{ width: 80, borderBottom: "1px solid black",zIndex: 1010,height: 60, textDecoration: 'none', color: 'white'}}
                            to={icon.to}>
                            <motion.li
                                key={index+"li"}
                                whileHover={{width: 140, }}
                                transition={{duration:0.3}}
                                style={{
                                    // boxShadow: "0 2px 8px darkslategray",
                                    borderTopRightRadius:20,
                                    borderBottomRightRadius:20,
                                    background: "lightgray",
                                    zIndex: 1010,
                                    position: 'relative', top:0,
                                    height: 60, display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
                            <M.Box>
                                {icon.icon}
                            </M.Box>
                            </motion.li>
                        </Link>
                    )
                })}

            </motion.div>)
    }
    Permanent = (props:DrawerProps) => {
        return (
            <DrawerContainer
                animate={{width: props.open?250:0, }}
                transition={{type:'spring',duration: 0.3}}
                style={{background: props.menuBackground, width: 0, height: "100vh", position:"fixed", top: 0, left: 0}}>
                <this.Menu onToggle={props.onToggle} open={this.props.open} items={this.props.items}/>
            </DrawerContainer>
        )
    }
    Left = (props:DrawerProps) => {
        return (
            <DrawerContainer
                animate={{width: props.open?250:0, }}
                transition={{type:'spring',duration: 0.3}}
                style={{zIndex: 1000, background: props.menuBackground, width: 0, height: "100vh", position:"fixed", top: 0, left: 0}}>
                <this.Menu onToggle={props.onToggle} open={this.props.open} items={this.props.items}/>
            </DrawerContainer>
        )
    }
    Right = (props:DrawerProps) => {
        return (
            <DrawerContainer
                animate={{width: props.open?250:0, right: 0}}
                transition={{type:'spring',duration: 0.3}}
                style={{zIndex: 1000, background: props.menuBackground, width: 0, height: "100vh", position:"fixed", top: 0, right: 0, borderBottomLeftRadius:20}}>
                <this.Menu onToggle={props.onToggle} open={this.props.open} items={this.props.items}/>
            </DrawerContainer>
        )
    }
    Top = (props:DrawerProps) => {
        return (
            <DrawerContainer
                initial={{height: 0}}
                animate={{height: props.open?props.items.length*60:0, }}
                transition={{type:'spring',duration: 0.3}}
                style={{zIndex: 1000, right: 0,background: props.menuBackground, width: "100vw", position:"fixed", top: 60, left: 0}}
            >
                <this.Menu onToggle={props.onToggle} open={props.open} items={props.items} anchor={props.anchor}/>
            </DrawerContainer>
        )
    }
    render() {
        switch(this.props.anchor){
            case "left": return <this.Left {...this.props}/>
            case "right": return <this.Right {...this.props}/>
            case "top": return <this.Top {...this.props}/>
            case "permanent-left": return <this.PermanentMenu  icons={[{to: "/", icon:<I.HomeOutlined/>}]}{...this.props}/>
            default: return <></>
        }
    }
}


class Navigation extends React.Component<NavigationProps, NavigationState>{
    constructor(props:NavigationProps) {
        super(props);
        this.state = {
            drawerOpen: false,
            activeLink:""
        }
        this.toggle=this.toggle.bind(this);
    }
    componentDidMount() {}
    shouldComponentUpdate(nextProps: Readonly<NavigationProps>, nextState: Readonly<NavigationState>, nextContext: any): boolean {
        return this.props!==nextProps  || this.state!==nextState || this.context!==nextContext
    }
    componentDidUpdate(prevProps: Readonly<NavigationProps>, prevState: Readonly<NavigationState>, snapshot?: any) {
        prevProps;
        prevState;
        snapshot;
    }
    componentWillUnmount() {}
    toggle(){
        this.setState({
            ...this.state,
            drawerOpen: !this.state.drawerOpen
        })
    }

    TopMenu=(props:MenuProps) => {
        return (
            <motion.ul
                id={"navbar-menu-main"}
                style={{display: 'flex'}}>
                {props.items.map((item, index)=>{
                    return(
                        <Link
                            whileHover={{scale:1.1}}
                            whileTap={{scale:0.9}}
                            style={{margin: "0 20px",position: "relative",zIndex: 1010,height: 60, width:60, textDecoration: 'none', color: 'white', alignItems:"center", alignContent:'center', justifyContent: 'center'}}
                            to={item.toLowerCase() === "home"?"/":`/${item.toLowerCase()}`}
                            key={item+index+"nav"}>
                            <p style={{margin:"20px 0", textAlign:"center"}}>{item}</p>
                        </Link>

                    )

                })}
            </motion.ul>
        )
    }
    render(){
        let animateProps;
        switch(this.props.anchor){
            case 'left':
                animateProps= {
                        width: this.state.drawerOpen?"calc(100vw - 250px)":"100vw",
                        x: this.state.drawerOpen?250:0
                    }; break;
            case 'right':
                animateProps= {
                    width: this.state.drawerOpen?"calc(100vw - 250px)":"100vw"
                }; break;
            case 'top': break;
            default:break;
        }
        return(
            <>
            <Navbar
                style={{position: "fixed", top: 0, left: 0, zIndex:1000}}
                animate={animateProps}
                transition={{type: "spring", duration: 0.3}}>
                <Toolbar style={{display: 'flex'}}>
                    <M.IconButton
                        id={"menu-toggle"}
                        onClick={this.toggle}>
                            <I.MenuOutlined />
                    </M.IconButton>
                    <this.TopMenu items={this.props.items} open={this.state.drawerOpen}/>
                </Toolbar>
            </Navbar>
            <Drawer onToggle={this.toggle} items={this.props.items} anchor={this.props.anchor} open={this.state.drawerOpen} menuBackground={this.props.menuBackground}/>
            <motion.div
                transition={{duration: 0.3, type:'spring'}}
                animate={{opacity: this.state.drawerOpen?1:0, visibility: this.state.drawerOpen?"visible":"hidden"}}
                onClick={()=>{
                if (this.state.drawerOpen){
                    this.toggle();
                } else return;
            }} style={{filter: "blur(2px)",background: "rgba(10, 10, 10, 0.5)", width: "100vw", position: 'absolute', left: 0, top:0, zIndex: 900, height: "100vh"}}/>
            </>
        )
    }
}

export {Navigation};
// function Test(){
//     return(
//         <BrowserRouter>
//         <Navigation
//             anchor={"top"} items={["Home", "About", "Contact"]} menuBackground={'rgb(40,40,40)'} background={"linear-gradient(-45deg, rgb(125, 10, 201) 0%, rgb(125, 0, 100) 100%)"}/>
//         </BrowserRouter>
//     )
// }