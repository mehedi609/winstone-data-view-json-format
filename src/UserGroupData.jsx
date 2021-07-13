import React from 'react';
import InputForm from './InputForm';
import ApiCallingButtons from './ApiCallingButtons';

const UserGroupData = ({ baseUrl, ids, clearId, onChangeSetId }) => {
  return (
    <div className="row">
      <div className="col mt-5">
        <div className="alert alert-success" role="alert">
          <h3 className="alert-heading">UserGroups Data</h3>
          <hr />

          <InputForm
            ids={ids}
            onChangeSetId={onChangeSetId}
            clearId={clearId}
            labelName={`User-Groups ID`}
            inputName={`userGroupId`}
            placeHolder={`Enter User-Groups ID`}
          />

          <ApiCallingButtons
            ids={ids}
            baseUrl={baseUrl}
            objKey={`userGroupId`}
            endPointName={`userGroups`}
            buttonValue={`UserGroup`}
          />
        </div>
      </div>
    </div>
  );
};

export default UserGroupData;
