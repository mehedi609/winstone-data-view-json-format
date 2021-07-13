import { useState } from 'react';
import './App.css';
import UserData from './UserData';

function App() {
  const baseUrl = process.env.REACT_APP_BASE_URL;

  const [ids, setIds] = useState({
    userId: null,
    categoryId: null,
    facilityDataId: null,
    tagId: null,
    facilityId: null,
    metaFieldId: null,
    userGroupId: null,
  });

  function onChangeSetId(e) {
    setIds({ ...ids, [e.target.name]: e.target.value });
  }

  function clearId(name) {
    setIds({ ...ids, [name]: null });
  }

  const componentsInfo = {
    'Users Data': {
      baseName: 'User',
      inputName: 'userId',
      endPointName: 'users',
    },
    'Facilities Data': {
      baseName: 'Facility',
      inputName: 'facilityId',
      endPointName: 'facilities',
    },
    'Facilities-Data Details': {
      baseName: 'FacilityData',
      inputName: 'facilityDataId',
      endPointName: 'facilityData',
    },
    'Tags Data': {
      baseName: 'Tag',
      inputName: 'tagId',
      endPointName: 'tags',
    },
    'Categories Data': {
      baseName: 'Category',
      inputName: 'categoryId',
      endPointName: 'categories',
    },
    'UserGroups Data': {
      baseName: 'UserGroup',
      inputName: 'userGroupId',
      endPointName: 'userGroups',
    },
    'Meta-Field Data': {
      baseName: 'MetaField',
      inputName: 'metaFieldId',
      endPointName: 'metaFields',
    },
  };

  return (
    <div className="container">
      {Object.entries(componentsInfo).map(([key, value]) => {
        const { baseName, inputName, endPointName } = value;

        return (
          <UserData
            key={key}
            title={key}
            baseName={baseName}
            inputName={inputName}
            endPointName={endPointName}
            ids={ids}
            baseUrl={baseUrl}
            onChangeSetId={onChangeSetId}
            clearId={clearId}
          />
        );
      })}
      {/*<UserData
        baseUrl={baseUrl}
        ids={ids}
        onChangeSetId={onChangeSetId}
        clearId={clearId}
      />

      <FacilityData
        baseUrl={baseUrl}
        ids={ids}
        onChangeSetId={onChangeSetId}
        clearId={clearId}
      />

      <FacilityDataDetails
        baseUrl={baseUrl}
        ids={ids}
        onChangeSetId={onChangeSetId}
        clearId={clearId}
      />

      <TagData
        baseUrl={baseUrl}
        ids={ids}
        onChangeSetId={onChangeSetId}
        clearId={clearId}
      />

      <CategoryData
        baseUrl={baseUrl}
        ids={ids}
        onChangeSetId={onChangeSetId}
        clearId={clearId}
      />

      <UserGroupData
        baseUrl={baseUrl}
        ids={ids}
        onChangeSetId={onChangeSetId}
        clearId={clearId}
      />

      <MetaFieldData
        baseUrl={baseUrl}
        ids={ids}
        onChangeSetId={onChangeSetId}
        clearId={clearId}
      />*/}
    </div>
  );
}

export default App;
