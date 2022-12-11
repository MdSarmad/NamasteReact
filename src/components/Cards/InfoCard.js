import React from 'react'
import boy from '../../asset/boy.svg';
import girl from '../../asset/girl.svg';


const InfoCard = ({data}) => {
  console.log("data --- ",data)
  return (
    <div className='info-card-body'>
      <img src={data?.avatar_url} alt="" />
      <div className='card-name'>{data?.name ? data?.name : data?.login}</div>
      <div className='card-inst-name'>Followers - {data?.followers}</div>
      <div className="card-inst-name">Company - {data?.company}</div>
      <div className="card-location">Location - {data?.location}</div>
      <div className="card-know-more" ><a href={data?.html_url}>Know More</a></div>
    </div>
  )
}

export default InfoCard

// <img src={data?.gender === "Male" ? boy : girl} alt="" />
//       <div className='card-name'>{data?.name}</div>
//       {data.isEmployee
//         ? 
//         <div className="card-inst-name">{data?.company + " - " + data?.experience + " Exp."}</div>
//         : 
//         <div className="card-inst-name">{data?.college + " - " + data?.year + " yr."}</div>
//       }
//       <div className="card-location">{data?.location}</div>