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
                <h5 className="card-header bg-info text-white">Step 1: Copy your signature</h5>
                <div className="card-body card-text-outline">
                  <p className="card-text">Highlight and copy your signature.</p>
                </div>
                <div className="card-body mobile-image mx-auto d-block">
                  <img className="card-img-bottom card-outline" src={M0} alt="" />
                </div>
              </div>

              <div className="card instructions-card">
                <h5 className="card-header bg-info text-white">Step 2: Open Settings</h5>
                <div className="card-body card-text-outline">
                  <p className="card-text">Open <strong>Settings</strong> by either tapping the icon or swiping down and searching for <em>"Settings"</em>.</p>
                </div>
                <div className="card-body mobile-image mx-auto d-block">
                  <img className="card-img-bottom card-outline" src={M1} alt="" />
                </div>
              </div>

              <div className="card instructions-card">
                <h5 className="card-header bg-info text-white">Step 3: Open Mail Settings</h5>
                <div className="card-body card-text-outline">
                  <p className="card-text">Scroll down and click <strong>Mail</strong>.</p>
                </div>
                <div className="card-body mobile-image mx-auto d-block">
                  <img className="card-img-bottom card-outline" src={M2} alt="" />
                </div>
              </div>

              <div className="card instructions-card">
                <h5 className="card-header bg-info text-white">Step 4: Open Signature</h5>
                <div className="card-body card-text-outline">
                  <p className="card-text">Click <strong>Signature</strong></p>
                </div>
                <div className="card-body mobile-image mx-auto d-block">
                  <img className="card-img-bottom card-outline" src={M3} alt="" />
                </div>
              </div>

              <div className="card instructions-card">
                <h5 className="card-header bg-info text-white">Step 5: Add Your Signature</h5>
                <div className="card-body card-text-outline">
                  <p className="card-text">Copy your signature into the empty box.</p>
                </div>
                <div className="card-body mobile-image mx-auto d-block">
                  <img className="card-img-bottom card-outline" src={M4} alt="" />
                </div>
              </div>

              <div className="card instructions-card">
                <h5 className="card-header bg-info text-white">Step 6: Reformat Your Signature</h5>
                <div className="card-body card-text-outline">
                  <p className="card-text">Undo the formatting Apple automatically applies by using three fingers to swipe left. When asked if you want to Undo Change Attributes, click <strong>Undo</strong></p>
                </div>
                <div className="card-body mobile-image mx-auto d-block">
                  <img className="card-img-bottom card-outline" src={M5} alt="" />
                </div>
              </div>

              <div className="card instructions-card">
                <h5 className="card-header bg-info text-white">Step 7: Reformat Your Signature</h5>
                <div className="card-body card-text-outline">
                  <p className="card-text">Your signature should now be formatted properly. Make sure everything is working as intended by opening up Mail and sending yourself a test email.</p>
                </div>
                <div className="card-body mobile-image mx-auto d-block">
                  <img className="card-img-bottom card-outline" src={M6} alt="" />
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