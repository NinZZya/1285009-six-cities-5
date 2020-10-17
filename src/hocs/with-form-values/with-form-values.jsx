import React, {PureComponent} from 'react';


const withFormValues = (Component) => {

  class WithFormValues extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        form: {},
      };

      this._handleFormValuesChange = this._handleFormValuesChange.bind(this);
      this._handleFormValuesReset = this._handleFormValuesReset.bind(this);
    }

    _handleFormValuesChange(evt) {
      const form = {
        [evt.target.name]: evt.target.value,
      };

      this.setState((prevState) => ({
        form: Object.assign({}, prevState.form, form),
      }));
    }

    _handleFormValuesReset() {
      this.setState(() => ({
        form: {},
      }));
    }

    render() {
      return (
        <Component
          {...this.props}
          form={this.state.form}
          onFormValuesChange={this._handleFormValuesChange}
          onFormValuesReset={this._handleFormValuesReset}
        />
      );
    }
  }

  return WithFormValues;
};


export default withFormValues;
