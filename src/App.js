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
    return(
      <div className='wrapper'>
        <div className='employeeInformation'>
          <form>

            <label>Name:
            <input 
              name="name" 
              type="text" 
              value={this.state.value} 
              onChange={this.onChange} />
            </label>

            <label>Title:
            <input 
              name="title" 
              type="text" 
              value={this.state.value} 
              onChange={this.onChange} />
            </label>

            <label>Mobile phone number:
            <input 
              name="mobile" 
              type="text" 
              value={this.state.value} 
              onChange={this.onChange} />
            </label>

            <label>Office phone number:
            <input 
              name="office" 
              type="text" 
              value={this.state.value} 
              onChange={this.onChange} />
            </label>

            <label>Email:
            <input 
              name="email" 
              type="text" 
              value={this.state.value} 
              onChange={this.onChange} />
            </label>

            <label>City:
            <input 
              name="city" 
              type="text" 
              value={this.state.value} 
              onChange={this.onChange} />
            </label>

            <label>State:
            <input 
              name="state" 
              type="text" 
              value={this.state.value} 
              onChange={this.onChange} />
            </label>

            <label>ISA number:
            <input 
              name="isa" 
              type="text" 
              value={this.state.value} 
              onChange={this.onChange} />
            </label>

          </form>
        </div>
          <Signature 
            name={this.state.name}
            title={this.state.title}
            mobile={this.state.mobile}
            office={this.state.office}
            email={this.state.email}
            city={this.state.city}
            state={this.state.state}
            isa={this.state.isa} 
            additional={this.state.additional}/>
          <MobileSignature 
          name={this.state.name}
          title={this.state.title}
          mobile={this.state.mobile}
          office={this.state.office}
          email={this.state.email}
          city={this.state.city}
          state={this.state.state}
          isa={this.state.isa} 
          additional={this.state.additional}/>

      </div>
    );
  }
};
export default App;
