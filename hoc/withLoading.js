const withLoading = (Component, output) => (props) =>
  props.isLoading
    ? output
    : <Component { ...props } />