import React, {useState, useEffect} from 'react'
import Header from './components/header/Header';
import Container from './Container';
// import data from './data.json';
import { userIds } from './constants';
import { listFetch } from './utils/listFetch';

const App = () => {
  const [userData, setUserData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    const res = listFetch(userIds);
    Promise.all(res).then(list => setUserData(list))
  },[])

  useEffect(() => {
    console.log("Filter text - ",filterText);
    console.log("userData",userData);
    const filteredData = userData?.filter(info => info?.name?.toLowerCase()?.includes(filterText));
    setFilterData(filteredData);
  },[filterText])

  return (



    <>
      <Header setFilterText={setFilterText} />
      <Container data={filterText ? filterData : userData} />
    </>
  )
}

export default App