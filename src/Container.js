import React from 'react'
import InfoCard from './components/Cards/InfoCard'


const Container = ({data}) => {

  return (
    <div className='app-container'>
      {
        data.map((info) => <InfoCard key={info?.id} data={info} />)
      }
    </div>
  )
}

export default Container