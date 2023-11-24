import { Fragment } from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const OnboardingView = (props:any) => {

  const { 
    handleSubmit, 
    updateFormData, 
  } = props;

  return <Fragment>
    <div className="form_wrapper">
      <div className="form_container">
        <div className="title_container">
          <h2>Buks App</h2>
          <h4>Sign Up</h4>
        </div>
        <div className="row clearfix">
          <div className="">
            <form>
              <div className="input_field"> <span><i aria-hidden="true" className="fa fa-envelope"></i></span>
                <input type="email" name="email" placeholder="Email" onChange={event => updateFormData(event)} required />
              </div>
              <div className="input_field"> <span><i aria-hidden="true" className="fa fa-lock"></i></span>
                <input type="password" name="password" placeholder="Password" onChange={event => updateFormData(event)} required />
              </div>
              <div className="input_field"> <span><i aria-hidden="true" className="fa fa-lock"></i></span>
                <input type="password" name="passwordConfirm" placeholder="Re-type Password" onChange={event => updateFormData(event)} required />
              </div>
              <div className="row clearfix">
                <div className="col_half">
                  <div className="input_field"> <span><i aria-hidden="true" className="fa fa-user"></i></span>
                    <input type="text" name="firstName" placeholder="First Name" onChange={event => updateFormData(event)} />
                  </div>
                </div>
                <div className="col_half">
                  <div className="input_field"> <span><i aria-hidden="true" className="fa fa-user"></i></span>
                    <input type="text" name="lastName" placeholder="Last Name" onChange={event => updateFormData(event)} required />
                  </div>
                </div>
              </div>
              <div className="input_field radio_option">
                <input type="radio" name="gender" value="male" id="rd1" onChange={event => updateFormData(event)} />
                <label htmlFor="rd1">Male</label>
                <input type="radio" name="gender" value="female" id="rd2" onChange={event => updateFormData(event)} />
                <label htmlFor="rd2">Female</label>
              </div>
              <input className="button" type="button" value="Register" onClick={handleSubmit} />
            </form>
          </div>
          <p className="credit"><Link to="/">Already have an account? Log in</Link></p>
        </div>
      </div>
    </div>
    <p className="credit">Developed by <a href="https://github.com/Bukunmitanimonure">BTani</a></p>
  </Fragment>
}

export default OnboardingView;