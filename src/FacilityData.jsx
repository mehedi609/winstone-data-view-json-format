import React from 'react';
import InputForm from './InputForm';
import ApiCallingButtons from './ApiCallingButtons';

const FacilityData = ({ baseUrl, ids, clearId, onChangeSetId }) => {
  return (
    <div className="row">
      <div className="col mt-5">
        <div className="alert alert-success" role="alert">
          <h3 className="alert-heading">Facilities Data</h3>
          <hr />

          <InputForm
            ids={ids}
            onChangeSetId={onChangeSetId}
            clearId={clearId}
            labelName={`Facility ID`}
            inputName={`facilityId`}
            placeHolder={`Enter Facility ID`}
          />

          <ApiCallingButtons
            ids={ids}
            baseUrl={baseUrl}
            objKey={`facilityId`}
            endPointName={`facilities`}
            buttonValue={`Facility`}
          />
        </div>
      </div>
    </div>
  );
};

export default FacilityData;
