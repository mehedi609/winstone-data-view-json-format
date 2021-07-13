import React from 'react';
import './App.css';

const InputForm = ({
  ids,
  onChangeSetId,
  clearId,
  labelName,
  inputName,
  placeHolder,
}) => {
  return (
    <form className="mt-3">
      <div className="form-group row">
        <label
          htmlFor={inputName}
          className="col-2 col-form-label"
          style={{ marginRight: -80 }}
        >
          {labelName}
        </label>
        <div className="col-7">
          <div className="row">
            <div className="col-10">
              <input
                type="text"
                id={inputName}
                name={inputName}
                className="form-control"
                placeholder={placeHolder}
                value={ids[inputName] ? ids[inputName] : ''}
                onChange={onChangeSetId}
              />
            </div>
            <div className="col-2">
              {ids[inputName] && (
                <div className="clear-input" onClick={() => clearId(inputName)}>
                  X
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default InputForm;
