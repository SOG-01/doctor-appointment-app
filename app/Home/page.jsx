"use client"
import React from 'react'
import { useEffect, useState } from "react";
import CategorySearch from '../_components/CategorySearch';
import DoctorList from '../_components/DoctorList';
import GlobalApi from '../_utils/GlobalApi';


export default function Page(){
    
  const [doctorList,setDoctorList]=useState([]);
  useEffect(()=>{
    getDoctorList();
  },[])
  const getDoctorList=()=>{
    GlobalApi.getDoctorList().then(resp=>{
      console.log(resp.data.data);
      setDoctorList(resp.data.data);
    })
  }
  return (
    <div> 

        {/* Search bar + Categories  */}
        <CategorySearch/>
        {/* Popular Doctor List  */}
        <DoctorList doctorList={doctorList}/>

        
    </div>
  )
}


