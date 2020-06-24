import React from 'react';
import M0 from './Images/M0.png';
import M1 from './Images/M1.png';
import M2 from './Images/M2.png';
import M3 from './Images/M3.png';
import M4 from './Images/M4.png';
import M5 from './Images/M5.png';
import M6 from './Images/M6.png';
import Mail_Icon from './Images/Mail_Icon.png';


const MobileInstructions = (props) => {

  return (
    <div>
         
      <button type="button" className="btn instruction-button" data-toggle="modal" data-target="#MailInstructionsModal">
        <img className="btn-icon"src={Mail_Icon} alt="Mail Icon"/>
        <strong> iPhone Mail App</strong>
      </button>

      <div className="modal fade" id="MailInstructionsModal" tabIndex="-1" role="dialog" aria-labelledby="MailInstructionsModalTitle" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header bg-info text-white">
              <h5 className="modal-title" id="MailInstructionsModalTitle"><strong>iPhone Mail App Instructions</strong></h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body instructions-modal-body">

              <div className="card instructions-card">
                <h5 className="card-header bg-info text-white">Step 1: Open Settings</h5>
                <div className="card-body card-text-outline">
                  <p className="card-text">Open <strong>Settings</strong>. If you can not find it, swipe down on your home screen and search for <em>"Settings"</em>.</p>
                </div>
                <div className="card-body mobile-image mx-auto d-block">
                  <img className="card-img-bottom card-outline" src={M1} alt="" />
                </div>
              </div>

              <div className="card instructions-card">
                <h5 className="card-header bg-info text-white">Step 2: Open Mail Settings</h5>
                <div className="card-body card-text-outline">
                  <p className="card-text">Scroll down and click <strong>Mail</strong>.</p>
                </div>
                <div className="card-body mobile-image mx-auto d-block">
                  <img className="card-img-bottom card-outline" src={M2} alt="" />
                </div>
              </div>

              <div className="card instructions-card">
                <h5 className="card-header bg-info text-white">Step 3: Open signature</h5>
                <div className="card-body card-text-outline">
                  <p className="card-text">Click <em>Signature</em> under the Mail group.</p>
                </div>
                <div className="card-body mobile-image mx-auto d-block">
                  <img className="card-img-bottom card-outline" src={M3} alt="" />
                </div>
              </div>

              <div className="card instructions-card">
                <h5 className="card-header bg-info text-white">Step 4: Add your signature</h5>
                <div className="card-body card-text-outline">
                  <p className="card-text">Tap and hold the textarea and select <em>paste</em> to enter the HTML you copied in step 1.</p>
                </div>
                <div className="card-body mobile-image mx-auto d-block">
                  <img className="card-img-bottom card-outline" src={M4} alt="" />
                </div>
              </div>

              <div className="card instructions-card">
                <h5 className="card-header bg-info text-white">Step 5: Open a new email and check everything was copied over correctly</h5>
                <div className="card-body card-text-outline">
                  <p className="card-text">Back out of settings and open a new email. Check that your signature was properly copied over.</p>
                </div>
                <div className="card-body mobile-image mx-auto d-block">
                  <img className="card-img-bottom card-outline" src={M5} alt="" />
                </div>
              </div>

             
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}

export default MobileInstructions;