import React from 'react';
import './App.css';
import PhoneInput from 'react-phone-input-2';
import Signature from './Signature';
import MobileSignature from './MobileSignature';
import DesktopInstructions from './DesktopInstructions';


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
      progress: 0
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

    render() {
      let progress = this.state.progress;
      let nameValid = this.state.name;
      let titleValid = this.state.titlename;
      let emailValid = this.state.emailname;
      let cityValid = this.state.cityname;
      let stateValid =this.state.statename;

    return (
      <div>

          
        <div className="wrapper justify-content-center d-flex">
          <div className="user-display">
            <div className='form-container'>
              <form>
              <div class="progress">
                <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" style={{width: {progress}}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
                <div className="line-1 input-box">
                  <input
                    className="form-control mb-3"
                    name="name"
                    type="text"
                    value={this.state.value}
                    onChange={this.onChange}
                    placeholder="Full Name"
                    required />

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
                        placeholder="Mobile number" />
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
                        placeholder="Office number" />
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
                        placeholder="Fax number" />
                    </div>
                  </div>

                  <input
                    className="form-control mb-3"
                    name="email"
                    type="email"
                    value={this.state.value}
                    onChange={this.onChange}
                    placeholder="Email"
                    required />
                  <input
                    className="form-control mb-3"
                    name="city"
                    type="text"
                    value={this.state.value}
                    onChange={this.onChange}
                    placeholder="City"
                    required />

                  <select
                    className="form-control"
                    name="state"
                    id="state"
                    onChange={this.onChange}
                    required>
                    <option value="" disabled defaultValue>State</option>
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
                <div className="mobile-signature input-box">
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
              <DesktopInstructions />
            </div>



            <div className="signature-container noselect">
              <label><strong>Signature Preview</strong></label>
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
                  <h6>Highlight and copy all content in this modal to paste into your signature box on your Microsoft Outlook desktop application. If you want to set your signature for iOS, close out of this modal and click the button 'Copy signature for iOS'.</h6>
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
