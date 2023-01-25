import React from "react";
import { Form as FinalForm, Field } from "react-final-form";

function Form(props) {
 
 const handleCancel = e => {
    e.preventDefault();
    props.onCancel();
  };
 const handleFormSubmit = () => {
    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append("image", file);
    props.onSubmit(formData);
  };
  const validateForm = values => {
    const errors = {};
    if (!values.file) {
      errors.file = "No file selected.";
    }
    return errors;
  };
  
    const { message, progress, submitting } = this.props;
    return (
      <FinalForm
        onSubmit={handleFormSubmit}
        validate={validateForm}
        render={props => (
          <form className="ts form" onSubmit={props.handleSubmit}>
            <Field name="file">
              {({ input, meta: { error, touched } }) => (
                <div className={`field ${error && touched ? "error" : ""}`}>
                  <input
                    ref={fileInput => (fileInput = fileInput)}
                    key="fileInput"
                    type="file"
                    {...input}
                  />
                </div>
              )}
            </Field>
            <div className="ts relaxed separated buttons">
              {!props.submitting && (
                <button
                  id="send"
                  type="submit"
                  className={`ts primary ${submitting ? "loading" : ""} button`}
                  disabled={submitting}
                >
                  Upload
                </button>
              )}
              {!props.submitting && (
                <button
                  type="button"
                  className={`ts ${props.submitting ? "loading" : ""} button`}
                  disabled={props.submitting}
                  onClick={e => {
                    props.form.reset();
                    handleCancel(e);
                  }}
                >
                  Reset
                </button>
              )}
              {submitting && (
                <button className={`ts button`} onClick={handleCancel}>
                  Cancel
                </button>
              )}
            </div>
            {(props.submitting || props.message) && <hr />}
            {props.submitting && (
              <div className="ts tiny primary progress">
                <div className="bar" style={{ width: `${progress * 100}%` }} />
              </div>
            )}
            {props.message}
          </form>
        )}
      />
    );
  }

export default Form;
