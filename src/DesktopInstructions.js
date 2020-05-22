import React from 'react';
import Dstep1 from './Images/Dstep1.png';
import Dstep2 from './Images/Dstep2.png';
import Dstep3 from './Images/Dstep3.png';
import Dstep4 from './Images/Dstep4.png';
import DstepSave from './Images/DstepSave.png';
import Dstep5 from './Images/Dstep5.png';

const DesktopInstructions = (props) => {

  return (
    <div>
      <button type="button" className="btn btn-primary instruction-button" data-toggle="modal" data-target="#DesktopInstructionsModal">
        <svg className="bi bi-laptop" width="1em" height="1em" viewBox="0 0 16 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M13.5 3h-11a.5.5 0 00-.5.5V11h12V3.5a.5.5 0 00-.5-.5zm-11-1A1.5 1.5 0 001 3.5V12h14V3.5A1.5 1.5 0 0013.5 2h-11z" clipRule="evenodd"/>
        <path d="M0 12h16v.5a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 010 12.5V12z"/>
        </svg><strong>  Desktop Instructions</strong>
      </button>

      <div className="modal fade" id="DesktopInstructionsModal" tabIndex="-1" role="dialog" aria-labelledby="DesktopInstructionsModalTitle" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header bg-info text-white">
              <h5 className="modal-title" id="DesktopInstructionsModalTitle"><strong>Desktop Instructions</strong></h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body instructions-modal-body">
              <div className="card instructions-card">
                <h5 className="card-header bg-info text-white">Step 1: Fill out the form and copy signature</h5>
                <div className="card-body">
                  <p className="card-text">Fill out the form and click <strong>Copy signature for Desktop</strong> > highlight your signature and copy by pressing <em>ctrl + c</em> or <em>right click > copy</em></p>
                </div>
                <img className="card-img-bottom" src={Dstep1} alt="" />
              </div>

              <div className="card instructions-card">
                <h5 className="card-header bg-info text-white">Step 2: Open account options</h5>
                <div className="card-body">
                  <p className="card-text">In your outlook Desktop application click <strong>File</strong> > <strong>Options</strong></p>
                </div>
                <img className="card-img-bottom" src={Dstep2} alt="" />
              </div>

              <div className="card instructions-card">
                <h5 className="card-header bg-info text-white">Step 3: Open your signatures panel</h5>
                <div className="card-body">
                  <p className="card-text">Click the <strong>Mail</strong> tab under Outlook Options then click <strong>Signatures</strong></p>
                </div>
                <img className="card-img-bottom" src={Dstep3} alt="" />
              </div>

              <div className="card instructions-card">
                <h5 className="card-header bg-info text-white">Step 4: Create a new signature</h5>
                <div className="card-body">
                  <p className="card-text">Click <strong>New</strong> then enter a name for your signature and click <strong>OK</strong></p>
                </div>
                <img className="card-img-top" src={Dstep4} alt="" />
              </div>

              <div className="card instructions-card">
                <h5 className="card-header bg-info text-white">Step 5: Paste With Option: Keep Source Formatting</h5>
                <div className="card-body">
                  <p className="card-text">Right click in the Edit Signature box and under <em>Paste Options</em> select the first option with the paintbrush <strong>Keep Source Formatting</strong></p>
                </div>
                <img className="card-img-top" src={DstepSave} alt="" />
              </div>

              <div className="card instructions-card">
                <h5 className="card-header bg-info text-white">Step 6: Assign your new signature</h5>
                <div className="card-body">
                  <p className="card-text">Assign your signature to <em>New messages</em> and <em>Replies/forward</em> and click <strong>OK</strong></p>
                </div>
                <img className="card-img-top" src={Dstep5} alt="" />
              </div>

              <div className="card instructions-card">
                <h5 className="card-header bg-info text-white">Video instructions</h5>
                <div className="">
                  <iframe allowFullScreen={true} title="Create an email signature video" src="https://www.microsoft.com/en-us/videoplayer/embed/RWe8Qi?pid=ocpVideo0-innerdiv-oneplayer&postJsllMsg=true&maskLevel=20&market=en-us"></iframe>
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

export default DesktopInstructions;