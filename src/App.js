import React from 'react';
import './App.css';
import PhoneInput from 'react-phone-input-2';
import Signature from './Signature';
import MobileSignature from './MobileSignature';
import DesktopInstructions from './DesktopInstructions';
import MobileInstructions from './MobileInstructions';

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
      city: '',
      state: '',
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

  render() {
    return (
      <div>
        <div className="wrapper justify-content-center d-flex">
          <div className="user-display">
            <div className='form-container'>
              <div className="form-header">
                <h5 className="card-header">Please complete this form and follow the instructions below for setting up your ECI email signature on Outlook.</h5>
                <div className="instructions-container">
                  <MobileInstructions />
                  <DesktopInstructions />
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
                  </div>

                  <input
                    className="form-control"
                    name="title"
                    type="text"
                    value={this.state.value}
                    onChange={this.onChange}
                    placeholder="Title"
                    required />
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
                        placeholder="Mobile number (optional)" />
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
                  </div>

                  <div className="mb-3">
                    <input
                      className="form-control"
                      name="city"
                      type="text"
                      value={this.state.value}
                      onChange={this.onChange}
                      placeholder="City"
                      required />
                  </div>

                  <select
                    className="form-control"
                    name="state"
                    id="state"
                    onChange={this.onChange}
                    required>
                    <option value="" defaultValue>State</option>
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

                <div className="">
                  <button type="button" className="btn eci-button" data-toggle="modal" data-target="#desktopSignatureModal">Copy signature for Desktop</button>
                  <MobileSignature
                    name={this.state.name}
                    title={this.state.title}
                    mobile={this.state.mobile}
                    office={this.state.office}
                    fax={this.state.fax}
                    email={this.state.email}
                    city={this.state.city}
                    state={this.state.state}
                    isa={this.state.isa}
                    additional={this.state.additional} />
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
                  city={this.state.city}
                  state={this.state.state}
                  isa={this.state.isa}
                  additional={this.state.additional} />
              </div>
            </div>
          </div>

          <div className="modal fade" id="desktopSignatureModal" tabIndex="-1" role="dialog" aria-labelledby="desktopSignatureModalTitle" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header noselect">
                  <h6>Highlight and copy all the content in this modal and and follow the desktop directions listed at the top of the form. If you want to set your signature for iOS, close out of this modal and click the "Copy signature for iOS" button.</h6>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <Signature
                    name={this.state.name}
                    title={this.state.title}
                    mobile={this.state.mobile}
                    office={this.state.office}
                    fax={this.state.fax}
                    email={this.state.email}
                    city={this.state.city}
                    state={this.state.state}
                    isa={this.state.isa}
                    additional={this.state.additional} />
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
