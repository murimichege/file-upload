import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class App extends PureComponent {
  static propTypes = {
    Form: PropTypes.node,
  };
  static defaultProps = {
    Form: null,
  };
  render() {
    const { Form } = this.props;
    return (
      <div>
        <div className="ts very narrow container">
          <br />
          <div className="ts card">
            <div className="content">
              <div className="header">Upload File</div>
              <div className="description">{Form}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
