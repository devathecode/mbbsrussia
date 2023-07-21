"use client";

import React, {useEffect, useRef, useState} from 'react';
import {useRouter} from "next/navigation";
import {useFormik} from "formik";
import emailjs from '@emailjs/browser';
import {contactUsSchema} from "@/app/home/schema";
import axios from "axios";
import {toast} from "react-toastify";

const ContactForm = () => {
    const [disableButton, setDisableButton] = useState(false);
    const initialValues = {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        message: "",
    }
    const {values, errors, handleBlur, touched, handleChange, handleSubmit} = useFormik({
        initialValues: initialValues,
        validationSchema: contactUsSchema,
        onSubmit: (values, action) => {
            setLoading(true);
            getData().then((res) =>{
                console.log('huaa', res);
                setLoading(false);
                if(res){
                    setDisableButton(res);
                }
                else{
                    setDisableButton(false);
                    toast.error('Please allow us some time, we have already received your request. We will try to get in touch with you asap.');
                }
            });
            // emailjs.sendForm('service_x5kkkwn', 'template_y4tprfd', form.current, '97zstD9nZbHoIhjlC')
            //     .then((result: any) => {
            //         setLoading(false);
            //         useRouter.call('/thank-you')
            //     }, (error: any) => {
            //         console.error(error.text);
            //     });
        }
    });
    const getData = async () => {
        const res = await axios.get("https://api.ipify.org/?format=json");
        console.log('sessionStorage.getItem(\'IP\')', sessionStorage.getItem('IP'))
        console.log('sessionStorage.getItem(\'IP\')', res.data.ip)
        if(sessionStorage.getItem('IP')){
            if(sessionStorage.getItem('IP') === res.data.ip){
                return false
            }
        }
        else{
            sessionStorage.setItem('IP', res.data.ip);
            return true
        }
    };
    const form: any = useRef();
    const navigate = useRouter();
    const [loading, setLoading] = useState(false);
    const inputClass = 'w-full bg-opacity-50 rounded border border-gray-300 focus:border-green-500' +
        ' focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-0.5 sm:py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
    return (
        <form ref={form} className="grid grid-cols-12 gap-2 sm:gap-5 my-10" onSubmit={handleSubmit}>
            <div className="col-span-12 sm:col-span-6">
                <label htmlFor="firstName" className="leading-7 text-xs sm:text-sm">First Name</label>
                <input type="text" className={inputClass} name="firstName" placeholder="Enter your first name"
                       value={values.firstName} onChange={handleChange} onBlur={handleBlur}/>
                {errors.firstName && touched.firstName &&
                    <p className="text-xs text-red-400 mt-1 capitalize">{errors.firstName}</p>}
            </div>
            <div className="col-span-12 sm:col-span-6">
                <label htmlFor="lastName" className="leading-7 text-xs sm:text-sm">Last Name</label>
                <input type="text" className={inputClass} name="lastName" placeholder="Enter your last name"
                       value={values.lastName} onChange={handleChange} onBlur={handleBlur}/>
                {errors.lastName && touched.lastName &&
                    <p className="text-xs text-red-400 mt-1 capitalize">{errors.lastName}</p>}
            </div>
            <div className="col-span-12">
                <label htmlFor="phoneNumber" className="leading-7 text-xs sm:text-sm">Phone Number</label>
                <input type="text" className={`${inputClass} invalid:border-red-700`} name="phoneNumber" placeholder="Enter your phone number"
                       value={values.phoneNumber} onChange={handleChange} onBlur={handleBlur}/>
                {errors.phoneNumber && touched.phoneNumber &&
                    <p className="text-xs text-red-400 mt-1 capitalize">{errors.phoneNumber}</p>}
            </div>
            <div className="col-span-12">
                <label htmlFor="message" className="leading-7 text-xs sm:text-sm">Message</label>
                <textarea className={inputClass} name="message" placeholder="Enter your message here"
                          value={values.message} onChange={handleChange} onBlur={handleBlur}/>
                {errors.message && touched.message &&
                    <p className="text-xs text-red-400 mt-1 capitalize">{errors.message}</p>}
            </div>
            <div className="col-span-12">
                <button
                    type="submit"
                    disabled={loading || disableButton}
                    className={`uppercase text-sm font-bold tracking-wide bg-black/80 text-white flex justify-center items-center
                                     hover:bg-black hover:text-white transition-all duration-500 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline ${loading && 'cursor-not-allowed'}`}>
                    {loading ? <div
                        className="w-6 h-6 rounded-full animate-spin border-2 border-solid border-white border-t-transparent"></div> : 'Send'}
                </button>
            </div>
        </form>
    );
};

export default ContactForm;