export const withNull = (Component, conditionalFn) => (props) =>
    conditionalFn(props)
        ? null
        : <Component { ...props } />