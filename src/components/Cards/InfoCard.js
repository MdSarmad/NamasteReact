import React from 'react'
import boy from '../../asset/boy.svg';
import girl from '../../asset/girl.svg';

const InfoCard = ({data}) => {
  console.log(boy);
  return (
    <div className='info-card-body'>
      <img src={data?.gender === "Male" ? boy : girl} alt="" />
      <div className='card-name'>{data?.name}</div>
      {data.isEmployee
        ? 
        <div className="card-inst-name">{data?.company + " - " + data?.experience + " Exp."}</div>
        : 
        <div className="card-inst-name">{data?.college + " - " + data?.year + " yr."}</div>
      }
      <div className="card-location">{data?.location}</div>
      <div className="card-know-more">Know More</div>
    </div>
  )
}

export default InfoCard