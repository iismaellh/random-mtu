export const withCondition = (conditionalFn) => (Component) => (props) =>
    conditionalFn(props)
        ? null
        : <Component { ...props } />