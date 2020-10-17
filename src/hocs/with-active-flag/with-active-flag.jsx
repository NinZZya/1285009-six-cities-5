import React, {PureComponent} from 'react';


const withActiveFlag = (Component, status = false) => {

  class WithActiveFlag extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isActive: status,
      };

      this._handleActiveChange = this._handleActiveChange.bind(this);
    }

    _handleActiveChange() {
      this.setState((prevState) => ({isActive: !prevState.isActive}));
    }

    render() {
      return (
        <Component
          {...this.props}
          isActive={this.state.isActive}
          onActiveChange={this._handleActiveChange}
        />
      );
    }
  }

  return WithActiveFlag;
};


export default withActiveFlag;
