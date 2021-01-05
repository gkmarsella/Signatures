import React from 'react';
import M0 from './Images/M0.png';
import Mstep2 from './Images/Mstep2.png';
import Mstep3 from './Images/Mstep3.png';
import Mstep4 from './Images/Mstep4.png';
import Mstep5 from './Images/Mstep5.png';
import MstepNew from './Images/MstepNew.png';
import Outlook_Icon from './Images/Outlook_Icon.png';

const MobileInstructions = (props) => {

  return (
    <div>
      <button type="button" className="btn instruction-button" data-toggle="modal" data-target="#MobileInstructionsModal">
      <img className="btn-icon" src={Outlook_Icon} alt="Outlook Icon" />  
      <strong> Outlook For iPhone</strong>
      </button>

      <div className="modal fade" id="MobileInstructionsModal" tabIndex="-1" role="dialog" aria-labelledby="MobileInstructionsModalTitle" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header bg-info text-white">
              <h5 className="modal-title" id="MobileInstructionsModalTitle"><strong>Mobile Instructions</strong></h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body instructions-modal-body">

              <div className="card instructions-card">
                <h5 className="card-header bg-info text-white">Step 1: Open Outlook</h5>
                <div className="card-body card-text-outline">
                  <p className="card-text">Fill out the form and click <strong>Copy signature for iOS</strong>.</p>
                </div>
                <div className="card-body mobile-image mx-auto d-block">
                  <img className="card-img-bottom card-outline" src={M0} alt="" />
                </div>
              </div>

              <div className="card instructions-card">
                <h5 className="card-header bg-info text-white">Step 2: Open account settings</h5>
                <div className="card-body card-text-outline">
                  <p className="card-text">Open the Outlook app on your phone and click on your account icon on the top left hand corner to open the folders sidebar. Click the cogwheel on the bottom left hand corner.</p>
                </div>
                <div className="card-body mobile-image mx-auto d-block">
                  <img className="card-img-bottom card-outline" src={Mstep2} alt="" />
                </div>
              </div>

              <div className="card instructions-card">
                <h5 className="card-header bg-info text-white">Step 3: Open signature</h5>
                <div className="card-body card-text-outline">
                  <p className="card-text">Click <strong>Signature</strong> under the Mail group.</p>
                </div>
                <div className="card-body mobile-image mx-auto d-block">
                  <img className="card-img-bottom card-outline" src={Mstep3} alt="" />
                </div>
              </div>

              <div className="card instructions-card">
                <h5 className="card-header bg-info text-white">Step 4: Add your signature</h5>
                <div className="card-body card-text-outline">
                  <p className="card-text">Tap and hold the textarea and select <strong>paste</strong>.</p>
                </div>
                <div className="card-body mobile-image mx-auto d-block">
                  <img className="card-img-bottom card-outline" src={MstepNew} alt="" />
                </div>
              </div>

              <div className="card instructions-card">
                <h5 className="card-header bg-info text-white">Step 5: Open a new email and check everything was copied over correctly</h5>
                <div className="card-body card-text-outline">
                  <p className="card-text">Back out of settings and open a new email. Check that your signature was properly copied over.</p>
                </div>
                <div className="card-body mobile-image mx-auto d-block">
                  <img className="card-img-bottom card-outline" src={Mstep5} alt="" />
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