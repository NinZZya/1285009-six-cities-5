import React, {PureComponent} from 'react';


const withActiveId = (Component) => {

  class WithActiveId extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeId: null,
      };

      this._handleActiveIdChange = this._handleActiveIdChange.bind(this);
    }

    _handleActiveIdChange(id) {
      this.setState(() => ({activeId: id}));
    }

    render() {
      return (
        <Component
          {...this.props}
          activeId={this.state.activeId}
          onActiveIdChange={this._handleActiveIdChange}
        />
      );
    }
  }

  return WithActiveId;
};


export default withActiveId;
