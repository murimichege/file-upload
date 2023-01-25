import React from 'react';

function UploadForm(props) {
    return (
      <div>
        <div className="ts very narrow container">
          <br />
          <div className="ts card">
            <div className="content">
              <div className="header">Upload File</div>
              <div className="description">{props.Form}</div>
            </div>
          </div>
        </div>
      </div>
    );
  
}

export default UploadForm;
