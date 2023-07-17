"use client";

import React, {useRef, useState} from 'react';
import {useRouter} from "next/navigation";
import {useFormik} from "formik";
import emailjs from '@emailjs/browser';
import {contactUsSchema} from "@/app/home/schema";

const ContactForm = () => {
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
            console.log('values', values)
            // emailjs.sendForm('service_x5kkkwn', 'template_y4tprfd', form.current, '97zstD9nZbHoIhjlC')
            //     .then((result: any) => {
            //         setLoading(false);
            //         useRouter.call('/thank-you')
            //     }, (error: any) => {
            //         console.error(error.text);
            //     });
        }
    })
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
                    disabled={loading}
                    className={`uppercase text-sm font-bold tracking-wide bg-green-600 flex justify-center items-center
                                     hover:bg-green-700 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline ${loading && 'cursor-not-allowed'}`}>
                    {loading ? <div
                        className="w-6 h-6 rounded-full animate-spin border-2 border-solid border-white border-t-transparent"></div> : 'Send Otp'}
                </button>
            </div>
        </form>
    );
};

export default ContactForm;