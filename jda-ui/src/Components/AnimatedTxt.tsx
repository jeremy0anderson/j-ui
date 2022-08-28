import * as React from "react";
import { motion } from "framer-motion";

const variants = {
    container:{
        hidden: { opacity: 0, y: 100},
        visible: {
            opacity: 1,
            y:0,
            transition: {
                delayChildren: 0.1,
                staggerChildren: 0.04
            }
        }
    },
    item:{
        hidden: {
            y: "-100%",
            transition: {type: "spring", duration: 0.5, ease: [0.15, 0.5, 0.7, 1]
            }
        },
        visible: {
            y: 0,
            height: 'auto',
            overflow: 'visible',
            transition: {type: "spring",  ease: [0, 0.4, 0.7, 1], duration: 0.2, bounce:0.2, bounceStiffness: 0.2}
        }
    }
}
const Wrapper = (props:any) => {
    return <span className="word-wrapper">{props.children}</span>;
};
const tagMap:any = {
    paragraph: "p",
    heading1: "h1",
    heading2: "h2",
    heading3: "h3",
    heading4: "h4",
    heading5: "h5",
    heading6: "h6"
};

const AnimatedTextInner = (props:any) => {
    // let speed;
    // switch(props.speed){
    //     case "slow":  speed = 1; break;
    //     case "normal": speed = 0.5; break;
    //     case "fast":  speed = 0.3; break;
    //     default:  speed = props.speed; break;
    // }
   const item = variants.item;

    const splitWords:any = props.text.split(" ");
    const words:any = [];
    for (const [, item] of splitWords.entries()) {
        words.push(item.split(""));
    }
    words.map((word:any) => {
        return word.push("\u00A0");
    });
    const Tag:any = tagMap[props.type];
    return (
        <Tag>
            {words.map((word:any, index:any) => {
                return (
                    <Wrapper key={index+word}>
                        {words[index].flat().map((element:any, index:any) => {
                            return (
                                <span
                                    style={{
                                        overflow: "hidden",
                                        display: "inline-flex",
                                    }}
                                    key={index}>
                                        <motion.span
                                            style={{ display: "flex", overflow: "visible"}}
                                            variants={item}>
                                                {element}
                                        </motion.span>
                                </span>
                            );
                        })}
                    </Wrapper>
                );
            })}
        </Tag>
    );
};
const AnimatedText=(props:any)=>{
    return (
        <motion.div
            style={props.style?props.style:{}}
            initial={"hidden"}
            animate={"visible"}
            variants={variants.container}>
            <AnimatedTextInner type={props.type} text={props.text}/>
        </motion.div>
    )

}

export {AnimatedText};
