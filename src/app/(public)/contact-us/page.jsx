"use client"
import Contact from '@/components/public/contactUs'
import { notifyFailure, notifySuccess } from '@/components/toast/toast';
import { useCreateContactMutation } from '@/redux/services/contactAPI';
import React, { useState } from 'react'

function ContactUs() {
  const [format, setFormatData] = useState(null);

  const handleContactTypeChange = (e) => {
    setFormatData({ ...format, [e.target.name]: e.target.value });
  };

  const [CreateContact, { data, isLoading }] =
  useCreateContactMutation();

const ContactValueHandler = async (e) => {
  e.preventDefault();
  try {
    await CreateContact(format).unwrap();
    setFormatData({})
    notifySuccess("your request submitted!");
  } catch (err) {
    console.error("Failed to create program:", err);
    notifyFailure(err.data.message);
  }
};

console.log(format , "format")


  return (
   <Contact format={format}  isLoading={isLoading} ContactValueHandler={ContactValueHandler} handleContactTypeChange={handleContactTypeChange} />
  )
}

export default ContactUs
