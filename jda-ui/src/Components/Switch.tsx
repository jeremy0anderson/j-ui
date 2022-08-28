import * as  React from 'react';
import {motion} from "framer-motion";

const switchVariants = {
    unchecked:(tapped:boolean)=>{
        return {
            x: tapped?-8:"-50%",
            scale: 1,
            background: "hsl(200, 100%,100%)",
            transition: {
                type: "spring",
                duration: 0.3,
                bounce: 0,
            }
        }
    },
    checked:(tapped:boolean)=> {
        return {
            scale:1,
            x:tapped?8:"50%",
            background: "hsl(200, 100%,100%)",
            transition: {
                type: "spring",
                duration: 0.3,
                bounce: 0,
            }
        }
    },
    tapped: (tapped:boolean) => {
        return {
            scale: tapped?1.4:1
        }

    }
}
interface SwitchProps{
    checked?:boolean
    toggle:()=>void
    label?:string
}
interface SwitchState{
    checked:boolean
    tapped:boolean
}

class Switch extends React.Component<SwitchProps, SwitchState>{
    constructor(props:any) {
        super(props);
        this.state={
            checked:this.props.checked || false ,
            tapped:false
        };
        this.toggleChecked=this.toggleChecked.bind(this);
    }
    shouldComponentUpdate(nextProps: Readonly<SwitchProps>, nextState: Readonly<SwitchState>): boolean {
        return this.state!==nextState || this.props!==nextProps;
    }
    componentDidUpdate(prevProps?: Readonly<SwitchProps>, prevState?: Readonly<SwitchState>) {
        // console.log(this.state);
        prevProps;prevState;
    }

    toggleChecked(){
        this.setState({
            ...this.state,
            checked:!this.props.checked,
        });
    }

    render(){
        return(

            <motion.div
                onTapCancel={()=>{this.setState({...this.state, tapped:false})}}
                onTapStart={()=>this.setState({...this.state, tapped:true})}
                onTap={()=>{this.setState({...this.state, tapped:false})}}
                onClick={this.props.toggle}
                animate={{background: this.props.checked?"linear-gradient(90deg, hsl(13,100%,42%) -20%, hsl(33,100%,42%) 100%)":"linear-gradient(90deg, hsla(0,0%,36%,0.5), hsla(0,8%,6%,0.7))"}}
                style={{ display: 'flex', justifyContent: "center", alignItems: "center", alignContent: "center", borderRadius: 20, width: 50, height: 25,background: "hsla(0,0%,79%, 0.4)", cursor: 'pointer'}}>
                <div style={{width: 50, height: 25, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <motion.div
                    custom={this.state.tapped}
                    style={{borderRadius: 20,display: 'flex', justifyContent: 'center', alignContent: "center", alignItems: "center",width: 20, height: 20, background: "hsla(0,0%,36%,0.4)"}}
                    initial={"unchecked"}
                    animate={this.props.checked?"checked":"unchecked"}
                    variants={switchVariants}>
                </motion.div>
                </div>
            </motion.div>
        // <label  style={{boxShadow: "1px 1px 3px 1px", borderRadius:20,display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent:'center'}}>{this.props.label}</label>
        )
    }

}


export {Switch};