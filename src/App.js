import React from 'react';
import './App.css';
import PhoneInput from 'react-phone-input-2';
import Signature from './Signature';
import MobileSignature from './MobileSignature';
import DesktopInstructions from './DesktopInstructions';
import MobileInstructions from './MobileInstructions';
import MailInstructions from './MailInstructions';
import Outlook_Icon from './Images/Outlook_Icon.png';
import Mail_Icon from './Images/Mail_Icon.png';
import circle from './Images/circle.png';
import withtagline from './Images/withtagline.png';
import tagtransp from './Images/tagtransp.png';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      title: '',
      mobile: '',
      office: '',
      fax: '',
      email: '',
      address: '',
      city: '',
      state: '',
      zipcode: '',
      isa: '',
      additional: '',
      copied: false,
      formValidated: false
    }
  }

  onChange = (event) => {
    const targetName = event.target.name;
    const oldState = this.state;
    this.setState({
      ...oldState,
      [targetName]: event.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      formValidated: true
    })
  }

  // 50 year logo
  // logoOne = event => {
  //   this.setState({
  //     logo: "1"
  //   })
  // }

  // logoTwo = event => {
  //   this.setState({
  //     logo: "2"
  //   })
  // }


  render() {
    const {name, title, email, mobile} = this.state;
    const isEnabled = [name,title,email,mobile].every(Boolean);
    let disabledWarning = <span className="disabled-warning">Please fill out all required fields</span>
    if(isEnabled){
      disabledWarning = (<span></span>)
    }
    return (
      <div>
        <div className="wrapper justify-content-center d-flex">
          <div className="user-display">
            <div className='form-container'>
              <div className="form-header">
                <h5 className="card-header">Please complete this form and follow the instructions below to create your ECI email signature.</h5>
                <div className="button-group">
                    <h4>Desktop Instructions</h4>
                    <DesktopInstructions />
                    <hr/>
                    <h4>iPhone Instructions</h4>
                    <MobileInstructions />
                    <MailInstructions />
                </div>
              </div>
              <form onSubmit={e => this.handleSubmit(e)}>
                <div className="line-1 input-box">
                  <div className="mb-3 form-group">
                    <input
                      id="validationCustom01"
                      className="form-control"
                      name="name"
                      type="text"
                      value={this.state.value}
                      onChange={this.onChange}
                      placeholder="Full Name"
                      required />
                      <small className="form-text required-field">*Required</small>
                  </div>

                  <div className="form-group">
                    <input
                      className="form-control"
                      name="title"
                      type="text"
                      value={this.state.value}
                      onChange={this.onChange}
                      placeholder="Title"
                      required />
                      <small className="form-text required-field">*Required</small>
                    </div>
                </div>

                <div className="line-2 input-box">
                  <div className="phoneNumbers">

                    <div className="mb-3">
                      <PhoneInput
                        disableDropdown={'true'}
                        country={'us'}
                        onlyCountries={['us']}
                        disableCountryCode={'true'}
                        disableSearchIcon={'true'}
                        name="mobile"
                        type="tel"
                        value={this.state.value}
                        onChange={mobile => this.setState({ mobile })}
                        placeholder="Mobile number" 
                        required />
                        <small className="form-text required-field">*Required</small>
                    </div>

                    <div className="mb-3">
                      <PhoneInput
                        className="form-control mb-3 phone-input"
                        disableDropdown={'true'}
                        country={'us'}
                        onlyCountries={['us']}
                        disableCountryCode={'true'}
                        disableSearchIcon={'true'}
                        name="office"
                        type="tel"
                        value={this.state.value}
                        onChange={office => this.setState({ office })}
                        placeholder="Office number (optional)" />
                    </div>

                    <div className="mb-3">
                      <PhoneInput
                        className="form-control mb-3 phone-input"
                        disableDropdown={'true'}
                        country={'us'}
                        onlyCountries={['us']}
                        disableCountryCode={'true'}
                        disableSearchIcon={'true'}
                        name="fax"
                        type="tel"
                        value={this.state.value}
                        onChange={fax => this.setState({ fax })}
                        placeholder="Fax number (optional)" />
                    </div>
                  </div>

                  <div className="mb-3">
                    <input
                      className="form-control"
                      name="email"
                      type="email"
                      value={this.state.value}
                      onChange={this.onChange}
                      placeholder="Email"
                      required />
                      <small className="form-text required-field">*Required</small>
                  </div>
                </div>

                <div className="input-box">
                  <div className="mb-3">
                    <input
                      className="form-control"
                      name="address"
                      type="text"
                      value={this.state.value}
                      onChange={this.onChange}
                      placeholder="Address (optional)"
                      required />
                  </div>

                  <div className="mb-3">
                    <input
                      className="form-control"
                      name="city"
                      type="text"
                      value={this.state.value}
                      onChange={this.onChange}
                      placeholder="City (optional)"
                      required />
                  </div>

                  <div className="mb-3">
                    <select
                      className="form-control"
                      name="state"
                      id="state"
                      onChange={this.onChange}
                      required>
                      <option value="" defaultValue>State (optional)</option>
                      <option value="AL">Alabama</option>
                      <option value="AK">Alaska</option>
                      <option value="AZ">Arizona</option>
                      <option value="AR">Arkansas</option>
                      <option value="CA">California</option>
                      <option value="CO">Colorado</option>
                      <option value="CT">Connecticut</option>
                      <option value="DE">Delaware</option>
                      <option value="DC">District Of Columbia</option>
                      <option value="FL">Florida</option>
                      <option value="GA">Georgia</option>
                      <option value="HI">Hawaii</option>
                      <option value="ID">Idaho</option>
                      <option value="IL">Illinois</option>
                      <option value="IN">Indiana</option>
                      <option value="IA">Iowa</option>
                      <option value="KS">Kansas</option>
                      <option value="KY">Kentucky</option>
                      <option value="LA">Louisiana</option>
                      <option value="ME">Maine</option>
                      <option value="MD">Maryland</option>
                      <option value="MA">Massachusetts</option>
                      <option value="MI">Michigan</option>
                      <option value="MN">Minnesota</option>
                      <option value="MS">Mississippi</option>
                      <option value="MO">Missouri</option>
                      <option value="MT">Montana</option>
                      <option value="NE">Nebraska</option>
                      <option value="NV">Nevada</option>
                      <option value="NH">New Hampshire</option>
                      <option value="NJ">New Jersey</option>
                      <option value="NM">New Mexico</option>
                      <option value="NY">New York</option>
                      <option value="NC">North Carolina</option>
                      <option value="ND">North Dakota</option>
                      <option value="OH">Ohio</option>
                      <option value="OK">Oklahoma</option>
                      <option value="OR">Oregon</option>
                      <option value="PA">Pennsylvania</option>
                      <option value="RI">Rhode Island</option>
                      <option value="SC">South Carolina</option>
                      <option value="SD">South Dakota</option>
                      <option value="TN">Tennessee</option>
                      <option value="TX">Texas</option>
                      <option value="UT">Utah</option>
                      <option value="VT">Vermont</option>
                      <option value="VA">Virginia</option>
                      <option value="WA">Washington</option>
                      <option value="WV">West Virginia</option>
                      <option value="WI">Wisconsin</option>
                      <option value="WY">Wyoming</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <input
                      className="form-control"
                      name="zipcode"
                      type="text"
                      value={this.state.value}
                      onChange={this.onChange}
                      placeholder="Zipcode (optional)"
                      required />
                  </div>

                </div>
                <div className="line-3 input-box">
                  <input
                    className="form-control mb-3"
                    name="isa"
                    type="text"
                    value={this.state.value}
                    onChange={this.onChange}
                    placeholder="ISA Number (optional)" />
                  <input
                    className="form-control"
                    name="additional"
                    type="text"
                    value={this.state.value}
                    onChange={this.onChange}
                    placeholder="Additional Information (optional)" />
                </div> 

                <div className="copy-buttons">
                {disabledWarning}
                  {/* Desktop Signature */}
                  {/* <div>
                  <button type="button" className={ `btn instruction-button ${isEnabled ? null : 'disabled'}`} tabIndex={isEnabled ? 0 : -1} data-toggle="modal" data-target="#desktopSignatureModal">
                    <img className="btn-icon" src={Outlook_Icon} alt="Outlook Icon" /><b> Copy signature for Windows Outlook application</b>
                  </button>
                  </div> */}

                  {/* Mail Signature */}
                  <div>
                  <button type="button" className={ `btn instruction-button ${isEnabled ? null : 'disabled'}`} tabIndex={isEnabled ? 0 : -1} data-toggle="modal" data-target="#mailSignatureModal">
                  {/* <img className="btn-icon" src={Outlook_Icon} alt="Outlook Icon" /><img className="btn-icon"src={Mail_Icon} alt="Mail Icon"/> */}
                  <b> Copy signature</b>
                  </button>
                  </div>
                </div>
              </form>
            </div>

            <div className="signature-container noselect">
              <div className="card-header"><h5><strong>Signature Preview</strong></h5></div>
              <div className="desktop-signature">
                <Signature
                  name={this.state.name}
                  title={this.state.title}
                  mobile={this.state.mobile}
                  office={this.state.office}
                  fax={this.state.fax}
                  email={this.state.email}
                  address={this.state.address}
                  city={this.state.city}
                  state={this.state.state}
                  zipcode={this.state.zipcode}
                  isa={this.state.isa}
                  additional={this.state.additional} />
              </div>
            </div>
          </div>

        {/* Modal for Desktop Signature */}
          <div className="modal fade" id="desktopSignatureModal" tabIndex="-1" role="dialog" aria-labelledby="desktopSignatureModalTitle" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header noselect">
                  <h1>Outlook For Windows Signature</h1>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-header noselect">
                  <h6>Highlight and copy all the content in this modal and follow the directions at the top of the form.</h6>
                </div>
                <div className="modal-body">
                  <Signature
                    name={this.state.name}
                    title={this.state.title}
                    mobile={this.state.mobile}
                    office={this.state.office}
                    fax={this.state.fax}
                    email={this.state.email}
                    address={this.state.address}
                    city={this.state.city}
                    state={this.state.state}
                    zipcode={this.state.zipcode}
                    isa={this.state.isa}
                    additional={this.state.additional}/>
                </div>
              </div>
            </div>
          </div>

          {/* Modal for Mail */}
          <div className="modal fade" id="mailSignatureModal" tabIndex="-1" role="dialog" aria-labelledby="mailSignatureModal" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header noselect">
                  <h1>iOS Mail App Signature</h1>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-header noselect">
                  <h6>Highlight and copy all the content in this modal and follow the directions at the top of the form.</h6>
                </div>
                <div className="modal-body">
                  <Signature
                    name={this.state.name}
                    title={this.state.title}
                    mobile={this.state.mobile}
                    office={this.state.office}
                    fax={this.state.fax}
                    email={this.state.email}
                    address={this.state.address}
                    city={this.state.city}
                    state={this.state.state}
                    zipcode={this.state.zipcode}
                    isa={this.state.isa}
                    additional={this.state.additional}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    );
  }
};
export default App;
