## ja-ui-react Component Library
 A custom, reusable, typed components that combine some components from <a href="https://nextui.org/learn">Next UI</a>, but almost entirely composed using <a href="https://www.framer.com/docs/">Framer Motion's</a> React.js library.
 There are small amounts of <a href="https://mui.com/material-ui/getting-started/overview/">MUI</a> Components that are mainly limited to Icons/IconButton Components for now. 
# Quick Start 
    1. Installation: 
````bash 
npm install 
@nextui-org/react 
framer-motion 
@mui/material 
@mui/icons-material 
@emotion/styled
@emotion/react
````
    2. Initialization: 
```jsx
import {Components} from 'ja-ui-react';
import {motion} from 'framer-motion';

// then either simplify, or simply use <Components.[component name here]/>
const {AnimatedText} = Components;
````
    3: Example:
````jsx
function App(props){
    const variants = {
        // initially hide letters inside animated div component
        off: {
            opacity:0, 
            y: 100
        },
        // animate letters into view with each child letter delayed by x amount of time with the staggerChildren key inside the transition object.
        on:{
            opacity:1, 
            y:0, 
            transition:{
                staggerChildren: 0.035, 
                type: 'spring',
                bounce: 0.2
            }
        }
    }
    return(
        <motion.div 
            // enter the key from the variants object you want to use for animate and initial values as a string.
            animate={"on"}
            initial={"off"}
            variants={variants}>
                <AnimatedText 
                    {...{type: "heading2", text: "Test animated text"}}/>
        </motion.div>
    )
}
````
    3a: Example 2:
````jsx
import React from 'react';
import {Components} from 'ja-ui-react';
const {Switch} = Components;

const Example = () => {
    const [checked, setChecked] = React.useState(false);
    const toggle=()=>setChecked(!checked);
    return(
        <Switch toggle={toggle} checked={checked}/>
    )
}

````