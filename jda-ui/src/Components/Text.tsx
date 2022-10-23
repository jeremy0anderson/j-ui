import * as React from "react";
import { motion } from "framer-motion";
import "./Text.css";
declare interface WrapperProps{
    children?:JSX.Element | [JSX.Element]
}
const Wrapper = (props:WrapperProps) => {
    return (
      <span style={{
        overflow: 'hidden',
    width: '100%', height: "100%",
    }} className="word-wrapper">{props.children}</span>
    )
};
declare interface AnimatedTextProps{
    bounce:number;
    color:string;
    text:string;
    duration:number;
    element:JSX.Element | any;
    style?:any;
    staggerChildren?:number;
    delay?:number;
    rotate?:number;
}
const AnimatedText = (props:AnimatedTextProps) => {
    const item = {
        hidden: {
            y: "200%",
            color: "#000",
            overflow: 'hidden',
            rotate: 0,
            transition: {
                type:'spring', bounce:0.4,
                ease: [0.455, 0.03, 0.515, 0.955], duration: 0.35 }
        },
        visible: {
            y: 0,
            rotate:props.rotate?props.rotate:0,
            overflow: "hidden",
            color: props.color,
            transition: {
                type:'spring', bounce:props.bounce, bounceDamping:0, bounceStiffness:0,
                ease: [0, 0.37, 0.715, 1], duration: props.duration }
        }
    };

    const splitWords = props.text.split(" ");

    const words:any[] | any = [];

    for (const [, item] of splitWords.entries()) {
        words.push(item.split(""));
    }

    words.map((word:any) => {
        return word.push("\u00A0");
    });

    // let fontSize;
    // switch(props.type){
    //     case "h1":fontSize=70; break;
    //     case "h2":fontSize=50; break;
    //     case "h3":fontSize=44; break;
    //     case "h4":fontSize=35; break;
    //     case "h5":fontSize=25; break;
    //     case "h6":fontSize=18; break;
    //     case "p":fontSize=12; break;
    //     default: fontSize=12; break;
    // }
    return (
   // <span className={"motion-text"} style={{display: 'flex', justifyContent: "center", alignItems: 'center'}}>
        <props.element {...props}>
            {words.map((word:any, index:number) => {
                return (
                    <Wrapper key={word+index}>
                        {words[index].flat().map((element:any, index:number) => {
                            return (
                                <span
                                   className={"wr-c"}
                                    style={{
                                        width: "auto",
                                        display: "inline-flex"
                                    }}
                                    key={index}>
                                    <props.element span={true}
                                          style={{
                                              display: "inline-block"}}
                                          variants={item}>
                                            {element}
                                    </props.element>
                                </span>
                            );
                        })}
                    </Wrapper>
                );
            })}
        </props.element>
   // </span>
    );
};

function Text(props:AnimatedTextProps) {
    const container = {
        hidden: {
            overflow: "hidden",
        },
        visible:(stagger:number)=> {
            return {
                transition: {
                    staggerChildren:stagger,
                    type: 'spring', bounce: props.bounce, duration: 0.5, delayChildren: props.delay
                }
            }
        }
    };
    return (
        <motion.div
            initial="hidden"
            whileInView={"visible"}
            variants={container}
            custom={props.staggerChildren}
            style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width:"100%"}}
        >
                <AnimatedText rotate={props.rotate} {...props} element={props.element} bounce={props.bounce} color={props.color} duration={props.duration} text={props.text}/>
        </motion.div>
    );
}

export {Text};