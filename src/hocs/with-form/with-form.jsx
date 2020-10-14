import React, {PureComponent} from 'react';


const withForm = (Component) => {

  class WithForm extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        form: {},
      };

      this._handleFormChange = this._handleFormChange.bind(this);
    }

    _handleFormChange(evt) {
      const form = {
        [evt.target.name]: evt.target.value,
      };

      this.setState((prevState) => ({
        form: Object.assign({}, prevState.form, form),
      }));
    }

    render() {
      return (
        <Component
          {...this.props}
          form={this.state.form}
          onFormChange={this._handleFormChange}
        />
      );
    }
  }

  return WithForm;
};


export default withForm;
