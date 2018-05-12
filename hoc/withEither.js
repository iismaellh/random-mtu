const withEither = (conditionalFn, Either) => (Component) => (props) =>
    conditionalFn(props)
    ? <Either />
    : <Component { ...props } />