import React from 'react';
import InputForm from './InputForm';
import ApiCallingButtons from './ApiCallingButtons';

const TagData = ({ baseUrl, ids, clearId, onChangeSetId }) => {
  return (
    <div className="row">
      <div className="col mt-5">
        <div className="alert alert-success" role="alert">
          <h3 className="alert-heading">Tags Data</h3>
          <hr />

          <InputForm
            ids={ids}
            onChangeSetId={onChangeSetId}
            clearId={clearId}
            labelName={`Tag ID`}
            inputName={`tagId`}
            placeHolder={`Enter Tag ID`}
          />

          <ApiCallingButtons
            ids={ids}
            baseUrl={baseUrl}
            objKey={`tagId`}
            endPointName={`tags`}
            buttonValue={`Tag`}
          />
        </div>
      </div>
    </div>
  );
};

export default TagData;
