import React, { Component } from 'react';
import fifty from './Images/fiftylogo';
import withtag from './Images/withtag';
import icons from './icons';
import tagtransp from './Images/tagtransp.png';

class Signature extends Component {
  render() {


    function formatPhoneNumber(phoneNumberString) {
      var cleaned = ('' + phoneNumberString).replace(/\D/g, '')
      var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
      if (match) {
        return match[1] + '.' + match[2] + '.' + match[3]
      }
      return '';
    }

    let mobileNumber = this.props.mobile;
    mobileNumber = formatPhoneNumber(mobileNumber);
    let mobileLine = <span></span>;
    if (mobileNumber !== '') {
      mobileLine = <span className="signature">m: {mobileNumber} | </span>
    }

    let officeNumber = this.props.office;
    officeNumber = formatPhoneNumber(officeNumber);
    let officeLine = <span></span>;
    if (officeNumber !== '') {
      officeLine = <span style={{ fontSize: '10pt' }}>o: {officeNumber} | </span>
    }

    let faxNumber = this.props.fax;
    faxNumber = formatPhoneNumber(faxNumber);
    let faxLine = <span></span>;
    if (faxNumber !== '') {
      faxLine = <span style={{ fontSize: '10pt' }}>f: {faxNumber} | </span>
    }

    let isaLine = <span></span>;
    if (this.props.isa !== '') {
      isaLine = (
        <p style={{ margin: '0in', marginBottom: '.0001pt', fontSize: '10pt', fontFamily: '"Calibri",sans-serif' }}>
          <span className="signature">ISA Certified Arborist {this.props.isa}</span>
        </p>
      )
    }

    let additionalLine = <span></span>;
    if (this.props.additional !== '') {
      additionalLine = (
        <p style={{ margin: '0in', marginBottom: '.0001pt', fontSize: '10pt', fontFamily: '"Calibri",sans-serif' }}>
          <span style={{ fontSize: '10pt' }}>{this.props.additional}</span>
        </p>
      )
    }

    let titlePipe = <span></span>;
    if(this.props.title) {
      titlePipe = <span className="signature">|</span>;;
    }

    let addressComma = <span></span>;
    if(this.props.address){
      addressComma = <span className="signature">, </span>;;
    }

    let stateComma = <span></span>;
    if(this.props.state){
      stateComma = <span className="signature">,</span>;
    }

    let addressLine = <span></span>
    if (this.props.city !== '' && this.props.state !== ''){
      addressLine = (
        <p className="signature-line">
          <span className="signature">{this.props.address}{addressComma}{this.props.city}{stateComma} {this.props.state} {this.props.zipcode}</span>
      </p>
      )
    }    

    return (
    //   <div>
    //   <p className="signature-line">
    //     <b><span style={{ color: '#00703E' }}>{this.props.name}</span></b><span style={{ fontSize: '10pt' }}> {titlePipe} {this.props.title}</span>
    //   </p>
    //   <p className="signature-line">
    //     {mobileLine} {officeLine} {faxLine} 
    //     <div className="signature">
    //       <div className="signature"><a href={"mailto:" + this.props.email}>{this.props.email}</a></div>
    //     </div>
    //   </p>
    //   {addressLine}
    //   <p className="signature-line">
    //     <div><a href="https://www.eci-consulting.com/">www.eci-consulting.com</a></div>
    //   </p>
    //   {isaLine}
    //   {additionalLine}
    //   <p className="signature-line">
    //      {this.props.logo == "1" ? fifty : withtag}
    //   </p>
    //   <p className="signature-line"><strong><em><div style={{ fontSize: '13px', color: '#00703E' }}>&ldquo;Safely delivering sustainable solutions that are innovative by nature.&rdquo;</div></em></strong></p>
    //   {icons}
    //   <p style={{ margin: '0in', marginBottom: '.0001pt', fontSize: '8pt', fontFamily: '"Calibri",sans-serif' }}>The information contained in this message is PRIVATE and PROPRIETARY information, which may also be subject to the company-client privilege and work product doctrine. This information is intended only for the individual or entity named above. If the reader of this message is not the intended recipient, you are hereby notified that any use, dissemination, distribution or copy of this message is strictly prohibited. If you have received this message in error, please notify the sender by return e-mail and destroy all copies of the message.</p>
    // </div>
    <div>
    <p className="signature-line">
      <b><span style={{ color: '#00703E' }}>{this.props.name}</span></b><span style={{ fontSize: '10pt' }}> {titlePipe} {this.props.title}</span>
    </p>
    <p className="signature-line">
      {mobileLine} {officeLine} {faxLine} <a href={"mailto:" + this.props.email}>{this.props.email}</a> | <a href="https://www.eci-consulting.com/">www.eci-consulting.com</a>
    </p>
    {addressLine}
    {isaLine}
    {additionalLine}
    <p className="signature-line">
       {this.props.logo == "1" ? fifty : withtag}
    </p>
    {icons}
    <p style={{ margin: '0in', marginBottom: '.0001pt', fontSize: '8pt', fontFamily: '"Calibri",sans-serif' }}>The information contained in this message is PRIVATE and PROPRIETARY information, which may also be subject to the company-client privilege and work product doctrine. This information is intended only for the individual or entity named above. If the reader of this message is not the intended recipient, you are hereby notified that any use, dissemination, distribution or copy of this message is strictly prohibited. If you have received this message in error, please notify the sender by return e-mail and destroy all copies of the message.</p>
  </div>
    );
  }
}

export default Signature;