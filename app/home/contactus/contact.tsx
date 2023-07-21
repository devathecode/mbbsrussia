import React from 'react';
import ContactForm from "@/app/home/contactus/contactform/ContactForm";
import Image from "next/image";

const Contact = () => {
    return (
        <div className="">
            <div className="grid grid-cols-12 gap-0">
                <div className="col-span-12 md:col-span-6 bg-[#c13584]/80 p-3 order-2 md:order-1">
                    <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-center mt-24">Not Able to Connect With Us?</h1>
                    <h2 className="text-sm sm:text-lg text-white text-center">No Worries we will get in touch with you soon.</h2>
                    <ContactForm/>
                </div>
                <div className="col-span-12 md:col-span-6 place-self-end order-1 md:order-2">
                    <Image src="https://i.postimg.cc/HsHjK8Hm/contact-Us.png" height="500" width="700" alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Contact;