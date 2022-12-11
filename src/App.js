import React, {useState, useEffect} from 'react'
import Header from './components/header/Header';
import Container from './Container';
import data from './data.json'

const App = () => {
  const [userData, setUserData] = useState([]);
  const [filterText, setFilterText] = useState("");
  useEffect(() => {setUserData(data)},[])
  useEffect(() => {
    const filteredData = data?.filter(info => info?.name?.toLowerCase()?.includes(filterText));
    setUserData(filteredData);
  },[filterText])
  return (
    <>
      <Header setFilterText={setFilterText} />
      <Container data={userData} />
    </>
  )
}

export default App