import React from 'react';
import InputForm from './InputForm';
import ApiCallingButtons from './ApiCallingButtons';

const UserData = ({
  baseUrl,
  ids,
  clearId,
  onChangeSetId,
  title,
  baseName,
  inputName,
  endPointName,
}) => {
  return (
    <div className="row">
      <div className="col mt-5">
        <div className="alert alert-success" role="alert">
          <h3 className="alert-heading">{title}</h3>
          <hr />

          <InputForm
            ids={ids}
            onChangeSetId={onChangeSetId}
            clearId={clearId}
            labelName={`${baseName} ID`}
            inputName={inputName}
            placeHolder={`Enter ${baseName} ID`}
          />

          <ApiCallingButtons
            ids={ids}
            baseUrl={baseUrl}
            objKey={inputName}
            endPointName={endPointName}
            buttonValue={baseName}
          />
        </div>
      </div>
    </div>
  );
};

export default UserData;
