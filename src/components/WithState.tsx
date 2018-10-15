import { PureComponent, ReactNode } from 'react'

interface RenderPropTypes<T> {
    state: T,
    setState: (state: T) => void
}

interface PropTypes<T> {
    initialState: T
    children: (prop: RenderPropTypes<T>) => ReactNode
}

class WithState<T> extends PureComponent<PropTypes<T>, T> {
  constructor (props: PropTypes<T>) {
      super(props)
      const { initialState } = props
      this.state = initialState
  }

  public updateState = (state: T) => {
      this.setState(state)
  }

  public render() {
    const { children } = this.props;
    const { state, updateState } = this;

    return children({
        setState: updateState,
        state
    });
  }
}

export default WithState