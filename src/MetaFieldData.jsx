import React from 'react';
import InputForm from './InputForm';
import ApiCallingButtons from './ApiCallingButtons';

const MetaFieldData = ({ baseUrl, ids, clearId, onChangeSetId }) => {
  return (
    <div className="row">
      <div className="col mt-5">
        <div className="alert alert-success" role="alert">
          <h3 className="alert-heading">Users Data</h3>
          <hr />

          <InputForm
            ids={ids}
            onChangeSetId={onChangeSetId}
            clearId={clearId}
            labelName={`MetaField ID`}
            inputName={`metaFieldId`}
            placeHolder={`Enter MetaField ID`}
          />

          <ApiCallingButtons
            ids={ids}
            baseUrl={baseUrl}
            objKey={`metaFieldId`}
            endPointName={`metaFields`}
            buttonValue={`MetaField`}
          />
        </div>
      </div>
    </div>
  );
};

export default MetaFieldData;
