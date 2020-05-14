import React from 'react';
import Mstep1 from './Images/Mstep1.png';
import Mstep2 from './Images/Mstep2.png';
import Mstep3 from './Images/Mstep3.png';
import Mstep4 from './Images/Mstep4.png';
import Mstep5 from './Images/Mstep5.png';

const MobileInstructions = (props) => {

  return (
    <div>
      <button type="button" className="btn btn-primary instruction-button" data-toggle="modal" data-target="#MobileInstructionsModal">
        <svg className="bi bi-phone" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M11 1H5a1 1 0 00-1 1v12a1 1 0 001 1h6a1 1 0 001-1V2a1 1 0 00-1-1zM5 0a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V2a2 2 0 00-2-2H5z" clipRule="evenodd"/>
        <path fillRule="evenodd" d="M8 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
        </svg><strong> Mobile Instructions</strong>
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
                  <p className="card-text">Fill out the form and click <strong>Copy signature for iOS</strong>. Open your Outlook app on your phone and click on your account icon on the top left hand corner to open your folders sidebar.</p>
                </div>
                <div className="card-body mobile-image mx-auto d-block">
                  <img className="card-img-bottom card-outline" src={Mstep1} alt="" />
                </div>
              </div>

              <div className="card instructions-card">
                <h5 className="card-header bg-info text-white">Step 2: Open account settings</h5>
                <div className="card-body card-text-outline">
                  <p className="card-text">Click the cogwheel on the bottom left hand corner.</p>
                </div>
                <div className="card-body mobile-image mx-auto d-block">
                  <img className="card-img-bottom card-outline" src={Mstep2} alt="" />
                </div>
              </div>

              <div className="card instructions-card">
                <h5 className="card-header bg-info text-white">Step 3: Open signature</h5>
                <div className="card-body card-text-outline">
                  <p className="card-text">Click <em>Signature</em> under the Mail group.</p>
                </div>
                <div className="card-body mobile-image mx-auto d-block">
                  <img className="card-img-bottom card-outline" src={Mstep3} alt="" />
                </div>
              </div>

              <div className="card instructions-card">
                <h5 className="card-header bg-info text-white">Step 4: Add your signature</h5>
                <div className="card-body card-text-outline">
                  <p className="card-text">Tap and hold the textarea and select <em>paste</em> to enter the HTML you copied in step 1.</p>
                </div>
                <div className="card-body mobile-image mx-auto d-block">
                  <img className="card-img-bottom card-outline" src={Mstep4} alt="" />
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