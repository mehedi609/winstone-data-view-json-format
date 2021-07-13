import React from 'react';

const ApiCallingButtons = ({
  baseUrl,
  ids,
  objKey,
  endPointName,
  buttonValue,
}) => {
  return (
    <div className="row">
      <div className="col-sm-2" style={{ marginRight: -80 }} />
      <div className="col-7">
        <a
          href={`${baseUrl}/${endPointName}`}
          className="btn btn-primary mr-3"
          target="_blank"
          rel="noreferrer"
        >
          Get All {buttonValue}s
        </a>

        <a
          href={`${baseUrl}/${endPointName}/${ids[objKey]}`}
          className={`btn btn-dark  ${!ids[objKey] && `disabled`}`}
          target="_blank"
          rel="noreferrer"
        >
          Get {buttonValue} by ID
        </a>
      </div>
    </div>
  );
};

export default ApiCallingButtons;
