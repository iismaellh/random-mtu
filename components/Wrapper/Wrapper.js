import w from 'next-page-transition';

const x = -100;
const y = 0;
const duration = 600;
const wrapper = w({
    duration: duration,           //transition duration
    containerProps: {        //props for container
      style: {                
        position: 'relative'  
      }
    },
    frameProps: {            //props for frame
      style: {
        position: 'absolute',
        width: '100%',
        opacity: 0,
        // transform: `translate(${x}vw, ${y}vh) skewY(20deg)`,
        transition: `${duration}ms ease-out`,
      }
    },
    // transitionStyles: {      //transition styles
    //   exited: { opacity: 0,  transform: `translate(${x}vw, ${y}vh)  skewY(20deg)`},
    //   entering: { opacity: 0, transform: `translate(${x}vw, ${y}vh)  skewY(10deg)` },
    //   entered: { opacity: 1, transform: `translate(0px, 0px) skewY(0deg)` },
    //   exiting: { opacity: 0,  transform: `translate(${x}vw, ${y}vh)  skewY(10deg)`},
    // },
    transitionStyles: {      //transition styles
      exited: { opacity: 0, transform: `translate(${x}vw, ${y}vh)`},
      entering: { opacity: 0, transform: `translate(${x}vw, ${y}vh)`},
      entered: { opacity: 1, transform: `translate(0px, 0px)` },
      exiting: { opacity: 0,  transform: `translate(${x}vw, ${y}vh)`},
    }
  })

export default wrapper;