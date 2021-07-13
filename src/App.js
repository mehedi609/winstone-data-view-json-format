import { useState } from 'react';
import './App.css';
import UserData from './UserData';
import FacilityData from './FacilityData';
import FacilityDataDetails from './FacilityDataDetails';
import TagData from './TagData';
import CategoryData from './CategoryData';

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

  return (
    <div className="container">
      <UserData
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
    </div>
  );
}

export default App;
