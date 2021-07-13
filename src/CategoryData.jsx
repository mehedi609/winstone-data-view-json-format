import React from 'react';
import InputForm from './InputForm';
import ApiCallingButtons from './ApiCallingButtons';

const CategoryData = ({ baseUrl, ids, clearId, onChangeSetId }) => {
  return (
    <div className="row">
      <div className="col mt-5">
        <div className="alert alert-success" role="alert">
          <h3 className="alert-heading">Categories Data</h3>
          <hr />

          <InputForm
            ids={ids}
            onChangeSetId={onChangeSetId}
            clearId={clearId}
            labelName={`Category ID`}
            inputName={`categoryId`}
            placeHolder={`Enter Category ID`}
          />

          <ApiCallingButtons
            ids={ids}
            baseUrl={baseUrl}
            objKey={`categoryId`}
            endPointName={`categories`}
            buttonValue={`Category`}
          />
        </div>
      </div>
    </div>
  );
};

export default CategoryData;
