import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { uploadFile, cancelUpload } from '../redux/modules/file';
import Form from '../components/Form';

function mapStateToProps(state) {
  return {
    message: state.file.message,
    progress: state.file.progress,
    submitting: state.file.formState === 'loading',
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      onSubmit: uploadFile,
      onCancel: cancelUpload,
    },
    dispatch,
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form);
