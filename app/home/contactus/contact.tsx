import React from 'react';
import ContactForm from "@/app/home/contactus/contactform/ContactForm";

const Contact = () => {
    return (
        <div className="grig gri-cols-12 py-10 max-w-4xl mx-auto px-3 md:px-0">
            <div className="col-span-12">
                <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-center">Not Able to Connect With Us?</h1>
                <h2 className="text-sm sm:text-lg text-green-700 text-center">No Worries we will get in touch with you soon.</h2>
                <ContactForm/>
            </div>
        </div>
    );
};

export default Contact;