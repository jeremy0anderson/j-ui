import * as React from 'react'
import * as Framer from 'framer-motion';
import styled from 'styled-components';
import * as M from '@mui/material';
import * as I from '@mui/icons-material';
import {Link as RLink} from 'react-router-dom';

const LinkRef=React.forwardRef((props:any, ref:any)=>{
    return <RLink ref={ref} to={props.to} {...props}/>
}), Link = Framer.motion(LinkRef);

interface NavigationProps {
    anchor: 'top' | 'left' | 'right' | 'permanent-left'
    background: string
    items: string[]
}
interface NavigationState {
    drawerOpen: boolean,
}
interface DrawerProps{
    anchor: 'top' | 'left' | 'right' | 'permanent-left'
    open:boolean
    background?:string
    items:string[]
    style?:object
    onToggle?:()=>void
}
interface DrawerState{
}
interface MenuProps{
    items: string[]
    open:boolean
    anchor?:string
    onToggle?:()=>void
}
interface PermanentMenuProps{
    icons: {
        to:string
        icon:any
    }[]
    onToggle?:()=>void
}
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
  background: lightslategray;
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
            style={{zIndex: 20000000, listStyleType:'none', display: 'flex', flexDirection: 'column', padding: 0, justifyContent:"center", alignItems: 'center', alignContent: 'center', margin: 0, left: 0, overflow: 'hidden'}}
            transition={{duration: 0.3}}
            animate={{left: props.open?"-100%":0}}>
            {props.items.map((item, index)=>{
                return (
                    <Link
                        onClick={props.onToggle}
                        whileHover={{}}
                        key={item+"link"}
                        style={{borderBottom: "1px solid black",zIndex: 10000,height: 60, textDecoration: 'none', color: 'white'}}
                        to={item.toLowerCase() === "home"?"/":`/${item.toLowerCase()}`}>
                            <motion.li
                                key={item+index}
                                animate={{width:props.open?250:0}}
                                transition={{type:'spring',duration:0.3}}
                                style={{
                                    zIndex: 100001,
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
                            style={{ width: 80, borderBottom: "1px solid black",zIndex: 10000,height: 60, textDecoration: 'none', color: 'white'}}
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
                                    zIndex: 100001,
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
                style={{background: props.background, width: 0, height: "100vh", position:"absolute", top: 0, left: 0}}>
                <this.Menu onToggle={props.onToggle} open={this.props.open} items={this.props.items}/>
            </DrawerContainer>
        )
    }
    Left = (props:DrawerProps) => {
        return (
            <DrawerContainer
                animate={{width: props.open?250:0, }}
                transition={{type:'spring',duration: 0.3}}
                style={{zIndex: 1000, background: props.background, width: 0, height: "100vh", position:"absolute", top: 0, left: 0}}>
                <this.Menu onToggle={props.onToggle} open={this.props.open} items={this.props.items}/>
            </DrawerContainer>
        )
    }
    Right = (props:DrawerProps) => {
        return (
            <DrawerContainer
                animate={{width: props.open?250:0, right: 0}}
                transition={{type:'spring',duration: 0.3}}
                style={{zIndex: 1000, background: props.background, width: 0, height: "100vh", position:"absolute", top: 0, right: 0}}>
                <this.Menu onToggle={props.onToggle} open={this.props.open} items={this.props.items}/>
            </DrawerContainer>
        )
    }
    Top = (props:DrawerProps) => {
        return (
            <DrawerContainer
                animate={{height: props.open?250:0, }}
                transition={{type:'spring',duration: 0.3}}
                style={{zIndex: 1000, right: 0,background: props.background, width: "100vw", position:"fixed", top: 60, left: 0}}
            >

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
            drawerOpen: false
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
                style={{position: "fixed", top: 0, left: 0, zIndex:999, boxShadow: "0 4px 7px"}}
                animate={animateProps}
                transition={{type: "spring", duration: 0.3}}>
                <Toolbar>
                    <M.IconButton
                        id={"menu-toggle"}
                        style={{color: "white", zIndex:1001}}
                        onClick={this.toggle}>
                            <I.MenuOutlined />
                    </M.IconButton>
                </Toolbar>
            </Navbar>
            <Drawer onToggle={this.toggle} items={this.props.items} anchor={this.props.anchor} open={this.state.drawerOpen} background={this.props.background}/>
            <motion.div
                transition={{duration: 0.3, type:'spring'}}
                animate={{width:this.state.drawerOpen?"100vw":0}}
                onClick={()=>{
                if (this.state.drawerOpen){
                    this.toggle();
                } else return;
            }} style={{background: "rgba(10, 10, 10, 0.5)" , position: 'absolute', left: 0, top:0, zIndex: 999, height: "100vh"}}/>
            </>
        )
    }
}

export default Navigation
// function Test(){
//     return(
//         <BrowserRouter>
//         <Navigation
//             anchor={"left"} items={["Home", "About", "Contact"]} background={"lightslategray"}/>
//         </BrowserRouter>
//     )
// }