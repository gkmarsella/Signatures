import React, {Component} from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import './App.css';

class MobileSignature extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false,
      buttonCopied: false,
      showingAlert: false
    }
  }

  handleClickShowAlert() {
    this.setState({
      showingAlert: true
    });

    setTimeout(() => {
      this.setState({
        showingAlert: false
      });
    }, 2000);
  }

  render(){

    function formatPhoneNumber(phoneNumberString) {
      var cleaned = ('' + phoneNumberString).replace(/\D/g, '')
      var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
      if (match) {
        return match[1] + '.' + match[2] + '.' + match[3]
      }
      return '';
    }

    let fontStyle = 'margin:0;font-size:10pt;font-family:"Calibri",sans-serif';
    let logoFont = 'fontFamily: "Arial",sans-serif, color: "#00703E"';

    let mobileNumber = this.props.mobile;
    mobileNumber = formatPhoneNumber(mobileNumber);
    let mobileLine = `<span></span>`;
    if (mobileNumber !== '') {
      mobileLine = `m: ${mobileNumber} | `
    }

    let officeNumber = this.props.office;
    officeNumber = formatPhoneNumber(officeNumber);
    let officeLine = `<span></span>`;
    if (officeNumber !== '') {
      officeLine = `o: ${officeNumber} | `
    }

    let faxNumber = this.props.fax;
    faxNumber = formatPhoneNumber(faxNumber);
    let faxLine = `<span></span>`;
    if (faxNumber !== '') {
      faxLine = `f: ${faxNumber} | `
    }

    let isaText = this.props.isa;
    let isaLine = `<span></span>`;
    if (isaText !== '') {
      isaLine = (
        `<p style=${fontStyle}><span style="fontSize: '10pt'">ISA Certified Arborist ${isaText}</span></p>`)
    }

    let additionalText = this.props.additional;
    let additionalLine = `<span></span>`;
    if (additionalText !== '') {
      additionalLine = (
        `<p style=${fontStyle}><span style="fontSize: '10pt'">${additionalText}</span></p>`
      )
    }

    let addressComma = `<span></span>`;
    if(this.props.address){
      addressComma = `<span>, </span>`;;
    }

    let stateComma = `<span></span>`;
    if(this.props.state){
      stateComma = `<span>,</span>`;
    }

    let first = `<p style=${fontStyle}><strong><span style="font-size:10pt;color:#00703E">${this.props.name}</span></strong><span style="font-size:10pt;">&nbsp;| ${this.props.title}</span></p>`
    let second = `<p style=${fontStyle}>${mobileLine} ${officeLine} ${faxLine}<span><a href={"mailto:" + ${this.props.email}><span>${this.props.email}</span></a></span></span></p>`
    let third = `<p style=${fontStyle}><span>${this.props.address}${addressComma}${this.props.city}${stateComma} ${this.props.state} ${this.props.zipcode}</span></p>`
    let fourth = `<p style=${fontStyle}><span><a href="http://www.eci-consulting.com/"><span>www.eci-consulting.com</span></a></span></p>`
    let logo = `<p style=${fontStyle}><strong><em><span style=${logoFont}><a href="http://www.eci-consulting.com/"><img width="257" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAoHBwkHBgoJCAkLCwoMDxkQDw4ODx4WFxIZJCAmJSMgIyIoLTkwKCo2KyIjMkQyNjs9QEBAJjBGS0U+Sjk/QD3/2wBDAQsLCw8NDx0QEB09KSMpPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT3/wAARCAAyAQEDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD2aiisDxj4hXw9ojyoR9qm/dwL/tev0HX8qCZzUIuT6G/RXg6+JtekdUXVb5mY4AErZJrY8nx366v/AN9n/Gp5jijj1LaLPYKK8fEPjskDdqoycZaTA/nXRQePtP0G0SxlmvNTuoiRNPkFWbvgk9Owo5jSOLi/iVvU76iuItvippUjhbi1u4VP8WAwH5HNdbp+p2mq2wuLG4SeI/xKeh9COxp3TN4VqdT4XctUUUUzQKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAa7rFGzyMFRQSxPQCvD/ABb4gbxFrck6k/Zo/wB3Ap/u+v1PX8q7T4l+JBa2g0e2fE043TkH7qdh+P8AL615fketRJ9DycfXu/Zx+Zu+GbPVI7yLVNP0lr5YGIXcDsD+vXqM12p8UeMgOfDiD6hv8a5vS/iLeaPpsNla2FmIoVwCd2Se5PPUmnz+K7nxhd2tjdaZZyHeSv7yRVTj5mOG6AAmkmRSnCEeWEnf+vIr+M76XUtTtYHjzqIQC4WKRmUO3SNQTjgYzjuTW5pHwr8y3WTVrt45GGfKgA+X6se/0rnNM1DSrTx1b3cMQh02ObC5JOBggOc89efavaEnikhEqSI0RGQ4YEY+tNK5rh6UK0pTnqeR+LPAcugRJc2Ukl1bM2xgU+dD26dR71X8FXl/pHiS22Q3AguHEUymNsEHgH8DzXoGofEPQ9Ou2tzLLOy/eaBAyg+mc1laz4vste0O6Njd39jHb4Z5RGAXP8MYO7qT+gNDSFKjRjPnpy1XQq6n8Tryx1S6tV06ErBK0YLSHJwcc11PhLW77X9Na9vLWK3iZtsIQklwOp57Z/ka8k0LSbjxJrkVrudjI2+aUnJC/wATE+v9TXultbRWltFbwIEiiUIijsBTjdmuDnVqtzk9ANzAH2GaMNnG3cM5qWuT0Wz87VL+RtLs5oxqEubmQjzFIPYbex96kg1rUpJreRntvJnvZbMRiI5Xbvw27PP3emKdzqVXTVHTkgDJOAPWlrkbjxBPeaRKHggbytPllu43UlfMBKhcZ6ZV/wAAKvw3mp3Wpz29m9pFDarAxR4yS4YZYZB4wAccUXGqyb0N+iuZstbv5rmymkaA217PNCsQjIaPZuwd2ec7OeO9RWWv6k0NlPcNbOl7aSzqiRlfLZACOcnOc+1Fxe2j/Xy/zOrorj/7b1owb/PswTpv9ocQNx/sfe/Wn3fiPUmuZFsodxhghlEKW7y+aXGSCw+7gdKLh7eJ1tFczea1qENzeyI1v9mtLyK38sxnc4fZk7s8Y3+naksL28tZNcub6/jNvbTMBuhJ2/IpGMN056DqfrRcftle39f1odK7rGpaRlVR3Y4FJJIkSF5HVFHVmOBXGX2qXV7pep2t5lvIa1dWa3MLHdIMgqSf7vWtrX4o7jVNEhnRZInun3I4yrYicjIouL2t9v61sbUciSoHjdXU9GU5Bp1YFzCdKvbax0cRWv8AaEryOxTcqbU/hXIAzgfrVW21zU9QWxjhe2gkmgmkkdoi4zG4XgZHX3ouP2qWj3/r/M6miuUbxDqD2mnXbmK0tJ7ZZHnaBpUEhPKsQQUXHc+tW7rXLqGPU2RYj9lu4YY8g8q/l5zz/tn9KLh7aO/9dzeV1fcFZW2nBwc4PpTq4mV7yOSf7FciAya6Ef5Cd2VXryOOOR3q/rWvXWnSMsEyyvbLH56LaMVJYjq+cLkHIHNFyVXVm2jp6K5m51vUYrm6lVrf7NbX0dr5RjO5w+zJ3Z4I3+naksp9ZSPXJY5o7ySGd0hhMZGWCqRg7unPT1780XK9sr2sdPRWVoV+99BL5tyk0kbbWXyDC8Zx0ZSTzWrTNIy5ldBRRRQMhe0t5HLSQRMx6lkBNN+w2v8Az7Qf9+xViigVkV/sNr/z7Qf9+xVLWNCh1PS7i0hItHlXb5sSgH6H1B7itWigTimrNHiGp+CNc0yVlaye4jHSS3G8EfQcj8RVGHRNYm/dRaffEH+ERMB/hXvtFTynC8uhfRs8W/4QyfTbL7f4gk+w2oIAjTDzSH+6o6D8TxWTqWp/bRHBbwi2sYc+VApzgnqzH+Jj3P5V7fqmhadrXljUbYTiLOwFmAGevQ1RTwP4ejkV10yLcpDDLMeR+NLlIngZfDB2X4lH4f8Ah3+xtGFzcJi7uwHbPVE/hX+p+vtXWUUVaVj0KcFTioroZi6BZpdPcRm4R3l81glw4UtnJO0HFSro9mgiCxYEU7XKfMeJGzk/+PHir1FA+SK6GeNDsAl8ogwL8k3HzH58jH4dT09asQWMFtcSzRJtkmCq5yTkKML/ADqxRQCil0M2DQbG3vftMcbhwzMqmRiiM33iq5wCeenrTk0SxSK3jWHCW0TQxDcflVhhh+laFFAckexQ/sWxCbfJ+X7L9k+8f9V/d/8Ar9aa+g2TzpKFlRkRYz5czIHVfuhgDzj3rRooDkj2KMmj2conDxZFxKs0nzHl1xg/+Oj8qjl0GxmmupJI3IulImTzGCPwBnbnGcAc+1aVFAOEX0MtPDunrHMjRySefs81pJnZm2HK5JPY1av9Pt9SgEVyhIVg6MrFWRh0II5Bq1RQHJG1rGY3h+ya3SM/aNySGRZfPfzAxGCd+c8jipbfRrK1MBhh2eRE0MeGPCsQT9ckdavUUByRXQypPDmny20VuVmWCKMRCNZ3Csg/hYA8j60648Pafc3TzyxPudlZlWVgjMuNrFQcZGB+VadFFhezj2M+bQ7KeGWNo2Aln+0MyuysJOPmBByDwOlRTeGtOuHLSxytuVVcee+JNv3Swz8xHqa1aKLA4RfQovo9lIswaLImmWd/mPLrjB/8dFNOiWZuLiYCZTcj94qzOqk4A3YBwDwORWhRQPkj2Kljplvp3mmHzGeZg0kkshdmIGBkk54FW6KKBpJaIKKKKBhRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAf/Z" alt="ECI Logo"></img></a></span></em></strong></p>`;
    let statement = `<p style=${fontStyle}><strong><em><span style="fontSize: '10pt', color: '#00703E'">&ldquo;Safely delivering sustainable solutions that are innovative by nature.&rdquo;</span></em></strong></p>`
    let icons = `<p style=${fontStyle}><a href="https://www.facebook.com/ECIConsulting/"><img width="30" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAeAB0DASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDI/wCEi1z/AKDWo/8AgU/+NH/CRa5/0GtR/wDAp/8AGs2ug8L6Bf6jqdldxWTTWUd0glfIwACM5/CvoJKEVdo89czdkbFtonj26svtQ1C+jjK7wst66sRjPTNbvwt1S/v/AO1Td31zcbPJ2edKz7c784yeOgp/jZfFT6mP7H+0CxWD5zEygZ5znPtVH4R/8xjH/TH/ANnrilLnoSk7dNvU3StNJHmtdR4P8Ranp+o2OmW8yLaXF0gkUoCTuIB5rQ/4VXrv/P3p3/fx/wD4irukfDXWbLWrG7lurAxwzpIwV3yQDnj5a6ak6cotMyjGSZP4/wDE2q6Xq5060nVLaW3G4FATzkHmk+En/MY/7Y/+z1oeNfA2qa9ri3drPZpGIQmJXYHI+imr/gLwjqHh3+0Ptk1s/n+Xt8lmONu7OcgeorlbgsNZb6GqUvaan//Z" alt="Facebook" /></a><span>&nbsp; &nbsp;</span><a href="https://www.glassdoor.com/Overview/Working-at-Environmental-Consultants-EI_IE456522.11,36.htm"><img width="30" src="data:image/jpeg;base64,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" alt="Glassdoor" /></a><span>&nbsp; &nbsp;</span><a href="https://twitter.com/eciconsulting?lang=en"><img width="30" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAXCAMAAAAiCq8iAAAAAXNSR0ICQMB9xQAAAcJQTFRFBKzmBavlA6vmGLLoCqzmGrHoGrLnHLLoFbDnDq7nEbDnAKnlAqvmGrLoGbHoGLHnFbDoCKzmErDnGbLoEq/nBqvmF7DnGbHnGLHoFK/nD67nFrDoCq3mDK3mHbPoF7DoE6/nF7HnErHnAKbkG7LoEa/nCazmB6zmFbHoDK3nA6rmEa7nFLDnBKrlDKzmF7HoGrHnC63mBKvmMrvqKrjpILXoO73rLrnqNbzqPbzrP77rIbToNrrqLLjpI7XoNLrqK7jpO7zrOLzrILPoNLvqQL/sUcPtWsrvQ8DsSMLsTsPsVMfuWsjuX8juTsTtddHxZMzwY8rvd9LxY8vvbM3veNLxaczvdc/wZcnue9TxfdLxn9/1iNjzi9nzkNnzi9jzj9jzod/1o9/1ot/1quT3oOD1vun4qOL2qeL2uub3vOj4q+L2quL2seX2ouD11PH7yu763fT8xOv5zu762/P7wOv53fP7yuz5ze751/L70O/5wen43PL73PP7wur48vv+8vr9/v7/4/b85vb85Pb84PT85fb8+/7+6/f8+f3+5PX8+v3+9vz+6ff89/z+8Pn99/3+/f7+8/v+6vf89vz9////208zvgAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUATWljcm9zb2Z0IE9mZmljZX/tNXEAAAAMY21QUEpDbXAwNzEyAAAAA0gAc7wAAAFkSURBVChTY5iKEzAQL1WfEp2aD1Te0DgVpKugEK61yJiBkYk5ptg/dipYKsCkCSpXYsrCysbOwcllltYMlnLjNi+FyPnz8PKx8rHxC1i4t4ClAgU5hYLKgIxGS06gDCuvsIhVC8TAdFFeMUHr4IzWNhsRcVagnIRkOVAYKNXeESjFKiwtIytnayfBB5TiFeOogEh1hnjw8QGFJOQVFHlZgSxefqVKiNTUUGUVoClA1Xx8wkC7+HhV7RugUl0OaqzCrKysQNepgJyhoh4Gci44oKo8NSTAukBuABoumwmXaohz5EBI8Wq6dsOlery0JHjBBoLslJfNAvsfEvK9bqLaKhADefm0wiFBA4uU6ggdsBQvH5N3H4pUf7aTDtBPrCoKuj4ToGEN1FUTH+nroCcC1KOvLeqcMBEqAzJwUo6fAaMoiyGLEYdLVC1MAmbX5NzEpOTkvLopCAmEM5DFEHZhEQULAQDjhOIScKp9awAAAABJRU5ErkJggg==" alt="Twitter" /></a><span>&nbsp; &nbsp;</span><a href="https://www.instagram.com/environmentalconsultantsinc/"><img width="30" src="data:image/png;base64,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" alt="Instagram" /></a><span>&nbsp; &nbsp;&nbsp;</span><a href="https://www.linkedin.com/company/environmental-consultants-inc/"><img width="30" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAoHBwkHBgoJCAkLCwoMDxkQDw4ODx4WFxIZJCAmJSMgIyIoLTkwKCo2KyIjMkQyNjs9QEBAJjBGS0U+Sjk/QD3/2wBDAQsLCw8NDx0QEB09KSMpPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT3/wAARCAAbABsDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwC94W8LafrWj3V1eXhiljJAVWA2ADO45rk2GGIBBAOMjvXaeC9DsNU0LUp7yDzJImIU7iMDbnsfWpvC/hfSNU8Jte36skis26YORtUc9OnSva9uoSlzNvVHz31Z1IQUUlo36nC0V6Mvhrw3r2hXE+irIkkIYByzZ3AZ5B7GvOK2pVVUvbSxz1qEqVrtNPsehfD6aOPw3qqvIikscBmAz8lLoEir8Lr1S6hiJeM89q88pdxxjJx6ZrOWG5m3fdp/cbQxfLFRtsmvvPQvhzIiaDqoZ1UluATj+CvPB0pQxHQkfQ0VpCnyylK+5jUrc8Iwtsf/2Q==" alt="Linkedin" /></a></p>`;
    let disclosure = `<p style="font-size: 8pt">The information contained in this message is PRIVATE and PROPRIETARY information, which may also be subject to the company-client privilege and work product doctrine. This information is intended only for the individual or entity named above. If the reader of this message is not the intended recipient, you are hereby notified that any use, dissemination, distribution or copy of this message is strictly prohibited. If you have received this message in error, please notify the sender by return e-mail and destroy all copies of the message.</p>`
    let htmlSignature = `${first}${second}${third}${fourth}${isaLine}${additionalLine}${logo}${statement}${icons}${disclosure}`;
      
      return (
        <div>
        <CopyToClipboard text={htmlSignature}
          onCopy={() => this.setState({copied: true})}>
          <button type="button" className={ `btn instruction-button ${this.props.isEnabled ? null : 'disabled'}`} tabIndex={this.props.isEnabled ? 0 : -1} onClick={this.handleClickShowAlert.bind(this)} data-container="body" data-toggle="popover" data-placement="top" data-content="Copied to clipboard!">        <svg className="bi bi-phone" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M11 1H5a1 1 0 00-1 1v12a1 1 0 001 1h6a1 1 0 001-1V2a1 1 0 00-1-1zM5 0a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V2a2 2 0 00-2-2H5z" clipRule="evenodd"/>
        <path fillRule="evenodd" d="M8 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
        </svg> <strong>Copy signature for iOS</strong></button>
        </CopyToClipboard>
          <div className={`text-center alert alert-warning ${this.state.showingAlert ? 'alert-shown' : 'alert-hidden'}`}><strong>Copied to clipboard!</strong></div>
        </div>
      );
  }
}
 
export default MobileSignature;