import w from 'next-page-transition';

const duration = 400;
const wrapper = w({
    duration: duration,           //transition duration
    containerProps: {        //props for container
      style: {                
        position: 'relative',
        opacity: 1 
      }
    },
    frameProps: {            //props for frame
      style: {
        position: `relative`,
        width: `100%`,
        opacity: 1,
        transition: `${duration}ms ease-in`,
        filter: `blur(10px)`,
        transform: `translate(-100vw, 0vh)`
      }
    },
    transitionStyles: {      //transition styles
      exited: { opacity: 1, filter: `blur(5px)`, transform: `translate(0vw, 0vh)` },
      entering: { opacity: 1, filter: `blur(10px)`, transform: `translate(-100vw, 0vh)` },
      entered: { opacity: 1, filter: `blur(0px)`, transform: `translate(0vw, 0vh)` },
      exiting: { opacity: 1, filter: `blue(10px)`, transform: `translate(100vw, 0vh)` }
    }
  })

export default wrapper;