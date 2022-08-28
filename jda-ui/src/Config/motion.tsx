
const container = {
    hidden: { opacity: 0, y: 100},
    visible: {
        opacity: 1,
        y:0,
        transition: {
            delayChildren: 0.1,
            staggerChildren: 0.04
        }
    }
};
//each individual item animation
const item = {
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
};
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

export {container, item, switchVariants};