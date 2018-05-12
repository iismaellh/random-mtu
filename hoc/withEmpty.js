export const withEmpty = (Component) => (props, empty, output) =>
  !props.empty.length
    ? output
    : <Component { ...props } />