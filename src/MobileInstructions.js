import React from 'react';
import Mstep1 from './Images/Mstep1.png';
import Mstep2 from './Images/Mstep2.png';
import Mstep3 from './Images/Mstep3.png';
import Mstep4 from './Images/Mstep4.png';
import Mstep5 from './Images/Mstep5.png';

const MobileInstructions = (props) => {

  return (
    <div>
      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#MobileInstructionsModal">
        Mobile Instructions
      </button>

      <div class="modal fade" id="MobileInstructionsModal" tabindex="-1" role="dialog" aria-labelledby="MobileInstructionsModalTitle" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header bg-info text-white">
              <h5 class="modal-title" id="MobileInstructionsModalTitle"><strong>Mobile Instructions</strong></h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body instructions-modal-body">

              <div className="card instructions-card">
                <h5 className="card-header bg-info text-white">Step 1: Open Outlook</h5>
                <div className="card-body card-text-outline">
                  <p className="card-text">Fill out the form and click <strong>Copy signature for iOS</strong>. Open your Outlook app on your phone and click on your account icon on the top left hand corner to open your folders sidebar.</p>
                </div>
                <div className="card-body">
                  <img className="card-img-bottom card-outline" src={Mstep1} alt="" />
                </div>
              </div>

              <div className="card instructions-card">
                <h5 className="card-header bg-info text-white">Step 2: Open account settings</h5>
                <div className="card-body card-text-outline">
                  <p className="card-text">Click the cogwheel on the bottom left hand corner.</p>
                </div>
                <div className="card-body">
                  <img className="card-img-bottom card-outline" src={Mstep2} alt="" />
                </div>
              </div>

              <div className="card instructions-card">
                <h5 className="card-header bg-info text-white">Step 3: Open signature</h5>
                <div className="card-body card-text-outline">
                  <p className="card-text">Click <em>Signature</em> under the Mail group.</p>
                </div>
                <div className="card-body">
                  <img className="card-img-bottom card-outline" src={Mstep3} alt="" />
                </div>
              </div>

              <div className="card instructions-card">
                <h5 className="card-header bg-info text-white">Step 4: Add your signature</h5>
                <div className="card-body card-text-outline">
                  <p className="card-text">Tap and hold the textarea and select <em>paste</em> to enter the HTML you copied in step 1.</p>
                </div>
                <div className="card-body">
                  <img className="card-img-bottom card-outline" src={Mstep4} alt="" />
                </div>
              </div>

              <div className="card instructions-card">
                <h5 className="card-header bg-info text-white">Step 5: Open a new email and check everything was copied over correctly</h5>
                <div className="card-body card-text-outline">
                  <p className="card-text">Back out of settings and open a new email. Check that your signature was properly copied over.</p>
                </div>
                <div className="card-body">
                  <img className="card-img-bottom card-outline" src={Mstep5} alt="" />
                </div>
              </div>

             
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}

export default MobileInstructions;