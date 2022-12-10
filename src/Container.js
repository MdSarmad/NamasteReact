import React from 'react'
import InfoCard from './components/Cards/InfoCard'


const Container = () => {
  const data = [
    {
      id: 1,
      name: "Rasika",
      company: "Accenture",
      experience: 3,
      location: "Khamgaon",
      isEmployee: true,
      gender: "Female"
    },
    {
      id: 2,
      name: "Md Sarmad",
      company: "Onesingleview",
      experience: 1,
      location: "Hyderabad",
      isEmployee: true,
      gender: "Male"
    },
    {
      id: 3,
      name: "Shreya",
      college: "RTU Kota ",
      year: "IV",
      location: "Kota",
      isEmployee: false,
      gender: "Female"
    },
    {
      id: 4,
      name: "Swati",
      company: "Netspi",
      experience: 5.5,
      location: "Seattle",
      isEmployee: true,
      gender: "Female"
    },
    {
      id: 5,
      name: "Ankita Negi",
      company: "Infosys",
      experience: 4,
      location: "Dehradun",
      isEmployee: true,
      gender: "Female"
    },
    {
      id: 6,
      name: "Mayank Parakh",
      company: "Microsoft",
      experience: 5,
      location: "Hyderabad",
      isEmployee: true,
      gender: "Male"
    },
    {
      id: 7,
      name: "Tarun Kumar Vella",
      company: "Capgemini",
      experience: 7,
      location: "Hyderabad",
      isEmployee: true,
      gender: "Male"
    },
    {
      id: 8,
      name: "Ashish Rathod",
      company: "AFT",
      experience: 2,
      location: "Gwalior",
      isEmployee: true,
      gender: "Male"
    },
    {
      id: 9,
      name: "Karan Mehta",
      company: "MoEngage",
      experience: 8,
      location: "Mumbai",
      isEmployee: true,
      gender: "Male"
    },
    {
      id: 10,
      name: "Abhishek Rai",
      company: "Amazon",
      experience: 2,
      location: "Baltikara",
      isEmployee: true,
      gender: "Male"
    },
  ]
  return (
    <div className='app-container'>
      {
        data.map((info) => <InfoCard data={info} />)
      }
    </div>
  )
}

export default Container