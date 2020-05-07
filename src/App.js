import React from 'react';
import './App.css';
import Signature from './Signature';
import MobileSignature from './MobileSignature';


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
      additional: ''
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
    return (
      <div class="wrapper">

        <div class="user-display">
          <div class='form-container'>
            <form>
              <div class="line-1 input-box">
                <input
                  class="form-control mb-3"
                  name="name"
                  type="text"
                  value={this.state.value}
                  onChange={this.onChange}
                  placeholder="Full Name"
                  required />

                <input
                  class="form-control"
                  name="title"
                  type="text"
                  value={this.state.value}
                  onChange={this.onChange}
                  placeholder="Title"
                  required />
              </div>

              <div class="line-2 input-box">
                <div class="phoneNumbers">
                  <input
                    class="form-control mb-3"
                    name="mobile"
                    type="tel"
                    value={this.state.value}
                    onChange={this.onChange}
                    placeholder="Mobile number"/>
                    
                  <input
                    class="form-control mb-3"
                    name="office"
                    type="tel"
                    value={this.state.value}
                    onChange={this.onChange}
                    placeholder="Office number"/>

                  <input
                    class="form-control mb-3"
                    name="fax"
                    type="tel"
                    value={this.state.value}
                    onChange={this.onChange}
                    placeholder="Fax number" />
                </div>

                <input
                  class="form-control mb-3"
                  name="email"
                  type="email"
                  value={this.state.value}
                  onChange={this.onChange}
                  placeholder="Email"
                  required />
                <input
                  class="form-control mb-3"
                  name="city"
                  type="text"
                  value={this.state.value}
                  onChange={this.onChange}
                  placeholder="City"
                  required />

                <select
                  class="form-control"
                  name="state"
                  id="state"
                  onChange={this.onChange}
                  required>
                  <option value="" disabled selected>State</option>
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
              <div class="line-3 input-box">
                <input
                  class="form-control mb-3"
                  name="isa"
                  type="text"
                  value={this.state.value}
                  onChange={this.onChange}
                  placeholder="ISA Number (optional)" />
                <input
                  class="form-control"
                  name="additional"
                  type="text"
                  value={this.state.value}
                  onChange={this.onChange}
                  placeholder="Additional Information (optional)" />

                <button type="submit" class="btn" id="submit-button">Submit</button>
              </div>
            </form>
          </div>



          <div class="signature-container">
            <div class="desktop-signature noselect">
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

            <div class="mobile-signature">
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
          </div>

        </div>

      </div >
    );
  }
};
export default App;
