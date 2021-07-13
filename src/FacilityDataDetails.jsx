import React from 'react';
import InputForm from './InputForm';
import ApiCallingButtons from './ApiCallingButtons';

const FacilityDataDetails = ({ baseUrl, ids, clearId, onChangeSetId }) => {
  return (
    <div className="row">
      <div className="col mt-5">
        <div className="alert alert-success" role="alert">
          <h3 className="alert-heading">Facilities-Data Details</h3>
          <hr />

          <InputForm
            ids={ids}
            onChangeSetId={onChangeSetId}
            clearId={clearId}
            labelName={`FacilityData ID`}
            inputName={`facilityDataId`}
            placeHolder={`Enter FacilityData ID`}
          />

          <ApiCallingButtons
            ids={ids}
            baseUrl={baseUrl}
            objKey={`facilityDataId`}
            endPointName={`facilityData`}
            buttonValue={`Facility Data`}
          />
        </div>
      </div>
    </div>
  );
};

export default FacilityDataDetails;
