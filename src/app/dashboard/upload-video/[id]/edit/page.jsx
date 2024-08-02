"use client"
import React from 'react'

import EditVideoComponents from '@/components/dashboard/resources/uploadVideoList/edit';
import { useParams } from 'next/navigation';

function EditVideoPage() {
    const { id } = useParams();
    console.log(id, "idddd")
    
  return (
    <EditVideoComponents  id={id}  />
  )
}

export default EditVideoPage
