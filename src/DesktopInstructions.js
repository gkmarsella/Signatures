import React from 'react';
import Dstep1 from './Images/Dstep1.png';
import Dstep2 from './Images/Dstep2.png';
import Dstep3 from './Images/Dstep3.png';
import Dstep4 from './Images/Dstep4.png';
import Dstep5 from './Images/Dstep5.png';

const DesktopInstructions = (props) => {

  return (
    <div>
      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#DesktopInstructionsModal">
        Desktop Instructions
      </button>

      <div class="modal fade" id="DesktopInstructionsModal" tabindex="-1" role="dialog" aria-labelledby="DesktopInstructionsModalTitle" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header bg-info text-white">
              <h5 class="modal-title" id="DesktopInstructionsModalTitle"><strong>Desktop Instructions</strong></h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body instructions-modal-body">
              <div className="card instructions-card" src={Dstep1} data-toggle="modal" data-target="#Dstep1">
                <h5 className="card-header bg-info text-white">Step 1: Fill out form and copy signature</h5>
                <div className="card-body">
                  <p className="card-text">Fill out the form below and click <strong>Copy signature for Desktop</strong> > highlight your signature and copy by pressing <em>ctrl + c</em> or <em>right click > copy</em></p>
                </div>
                <img className="card-img-bottom" src={Dstep1} alt="" />
              </div>

              <div className="card instructions-card" src={Dstep2} data-toggle="modal" data-target="#Dstep2">
                <h5 className="card-header bg-info text-white">Step 2: Open account options</h5>
                <div className="card-body">
                  <p className="card-text">In your outlook Desktop application click <strong>File</strong> > <strong>Options</strong></p>
                </div>
                <img className="card-img-bottom" src={Dstep2} alt="" />
              </div>

              <div className="card instructions-card" data-toggle="modal" data-target="#Dstep3" >
                <h5 className="card-header bg-info text-white">Step 3: Open your signatures panel</h5>
                <div className="card-body">
                  <p className="card-text">Go to <strong>Mail</strong> > <strong>Signatures</strong></p>
                </div>
                <img className="card-img-bottom" src={Dstep3} alt="" />
              </div>

              <div className="card instructions-card" data-toggle="modal" data-target="#Dstep4">
                <h5 className="card-header bg-info text-white">Step 4: Create a new signature</h5>
                <div className="card-body">
                  <p className="card-text">Click <strong>New</strong> then enter a name for your signature and click <strong>OK</strong></p>
                </div>
                <img className="card-img-top" src={Dstep4} alt="" />
              </div>

              <div className="card instructions-card" data-toggle="modal" data-target="#Dstep5">
                <h5 className="card-header bg-info text-white">Step 5: Assign your new signature</h5>
                <div className="card-body">
                  <p className="card-text">Paste your signature into the <em>Edit signature</em> box, then assign your signature to <em>New messages</em> and <em>Replies/forward</em> and click <strong>OK</strong></p>
                </div>
                <img className="card-img-top" src={Dstep5} alt="" />
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="Dstep1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header bg-info text-white">
              <h5 className="modal-title" id="exampleModalLabel"><strong>Step 1</strong></h5>
              <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              Fill out the form below and click <strong>Copy signature for Desktop</strong> > highlight your signature and copy by pressing <em>ctrl + c</em> or <em>right click > copy</em>
            </div>
            <div className="modal-footer">
              <img className="card-img-top" src={Dstep1} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="Dstep2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header bg-info text-white">
              <h5 className="modal-title" id="exampleModalLabel"><strong>Step 2</strong></h5>
              <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>In your outlook Desktop application click <strong>File</strong> > <strong>Options</strong></p>
            </div>
            <div className="modal-footer">
              <img className="card-img-top" src={Dstep2} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="Dstep3" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header bg-info text-white">
              <h5 className="modal-title" id="exampleModalLabel"><strong>Step 3</strong></h5>
              <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>Go to <strong>Mail</strong> > <strong>Signatures</strong></p>
            </div>
            <div className="modal-footer">
              <img className="card-img-top" src={Dstep3} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="Dstep4" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header bg-info text-white">
              <h5 className="modal-title" id="exampleModalLabel"><strong>Step 4</strong></h5>
              <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>Click <strong>New</strong> then enter a name for your signature and click <strong>OK</strong></p>
            </div>
            <div className="modal-footer">
              <img className="card-img-top" src={Dstep4} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="Dstep5" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header bg-info text-white">
              <h5 className="modal-title" id="exampleModalLabel"><strong>Step 5</strong></h5>
              <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>Paste your signature into the <em>Edit signature</em> box, then assign your signature to <em>New messages</em> and <em>Replies/forward</em> and click <strong>OK</strong></p>
            </div>
            <div className="modal-footer">
              <img className="card-img-top" src={Dstep5} alt="" />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default DesktopInstructions;