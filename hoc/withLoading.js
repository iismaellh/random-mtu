const withLoading = (Component) => (props, output) =>
  props.isLoading
    ? output
    : <Component { ...props } />