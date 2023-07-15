import React from 'react';
import Contactform from "@/app/home/contactus/contactform/contactform";

const Contact = () => {
    return (
        <div className="grig gri-cols-12 py-10 max-w-4xl mx-auto px-3 md:px-0">
            <div className="col-span-12">
                <h1 className="text-4xl text-center">Not Able to Connect With Us?</h1>
                <h2 className="text-green-700 text-center">No Worries we'll get in touch with you soon.</h2>
                <Contactform/>
            </div>
        </div>
    );
};

export default Contact;