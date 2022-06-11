import React, { useEffect, useState } from "react";
import Input from "./Input";
import Button from "./Button";

function Phone_input() {
    const initialState = {
        phone: "",
        isvalid: false,
        class: "input"
    }
    const [state, setNumber] = useState(initialState);

    const classHandler = (isvalid) => {
      let borderColor
      return(borderColor = isvalid ? "input green" : "input red")
    }

    const phoneValidation = (value) => {
      const regex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;
      return(regex.test(value))
    }

    const changeHandler = (e) => {
      const isvalid = phoneValidation(e.target.value)
      const temp = classHandler(isvalid)
      setNumber({
        ...state,
        phone: e.target.value,
        isvalid: isvalid,
        class: temp
      }, console.log("changeHandler", state.class));
    }

     return (
       <div className={ state.class }>
          <Input 
            type="text"
            changeHandler={ changeHandler }
            value={ state.phone }
          />

       </div>
     )
}
export default Phone_input;

/*
<input 
              type="text"
              onChange={ changeHandler }
              value={ state.phone }
          />
import React from "react";

class FormPhoneComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      phone: "",
      isvalid: false,
      message: "",
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      phone: e.target.value,
    });
  }

  phoneValidation() {
    const regex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;
    return !(!this.state.phone || regex.test(this.state.phone) === false);
  }

  onSubmit() {
    const isPhoneValid = this.phoneValidation();
    this.setState(
      {
        isvalid: isPhoneValid,
        message: isPhoneValid
          ? "Phone Number is Valid!"
          : "Phone Number not valid!",
      },
      () => this.props.onPhoneSubmit(this.state)
    );

    // Check if email is valid
    if (this.state.isvalid) {
      console.log(this.state);
    }
  }

  render() {
    const messageTemplate = this.state.message ? (
      <div
        className={"alert alert-" + (this.state.isvalid ? "success" : "danger")}
        role="alert"
      >
        {this.state.message}
      </div>
    ) : (
      ""
    );

    return (
      <div className="child-component">
        <div className="form-group mb-3">
          <label>
            <strong>Phone</strong>
          </label>
          <input
            type="phone"
            name="phone"
            value={this.state.phone}
            onChange={this.onChange}
            className="form-control"
          />
        </div>

        <div className="d-grid">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={() => this.onSubmit()}
          >
            Submit
          </button>
        </div>
        <br />
        {messageTemplate}
      </div>
    );
  }
}

export default FormPhoneComponent;
*/