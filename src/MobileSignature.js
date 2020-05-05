import React, {Component} from 'react';

class MobileSignature extends Component {
    render(){
        let isaLine = <span></span>
        if(this.props.isa !== ''){
            isaLine = (
                <p style={{margin:'0in', marginBottom: '.0001pt', fontSize:'15px', fontFamily:'"Calibri",sans-serif'}}>
                    `<span style={{fontSize:'13px'}}>ISA Certified Arborist {this.props.isa}</span>``
                </p>
            )
        }

        let mobileLine = <span></span>
        if(this.props.mobile !== ``){
            mobileLine = `<span style={{fontSize:'13px'}}>m: {this.props.mobile}</span>`
        }

        let officeLine = <span></span>
        if(this.props.office !== ''){
            officeLine = `<span style={{fontSize:'13px'}}>o: {this.props.office}</span>`
        }

        let mSpace = <span></span>
        if(this.props.mobile !== '' && this.props.office !== ''){
            mSpace = `<span>|</span>`
        }

        let top = `<p style='margin:0;font-size:15px;font-family:"Calibri",sans-serif;'><strong><span style="font-size:13px;color:#00703E">${this.props.name}</span></strong><span style="font-size:13px;">&nbsp;| ${this.props.title}</span></p>`
        let second = `<p style={{margin:'0in', marginBottom: '.0001pt', fontSize:'15px', fontFamily:'"Calibri",sans-serif'}}>${mobileLine} ${mSpace} ${officeLine} <span>|</span> <span><a href={"mailto:" + ${this.props.email}><span style={{color:'#0563C1'}}>${this.props.email}</span></a>&nbsp;| ${this.props.city}, ${this.props.state}<span>&nbsp;| <span><a href="http://www.eci-consulting.com/"><span style={{color:'#0563C1'}}>www.eci-consulting.com</span></a></span></span></span></p>`
        return (
            <div>
                {top}{second}
            </div>
        );
    }
}
 
export default MobileSignature;