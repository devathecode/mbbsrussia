import React from 'react';
import Infobanner from "@/app/home/Infobanner/infobanner";
import Whatsapp from "@/app/home/whatsapp/whatsapp";
import Contact from "@/app/home/contactus/contact";
import Carousel from "@/app/home/carousel/carousel";

const Page = () => {
    return (
        <div>
            <Infobanner/>
            <Carousel/>
            <Contact/>
            <Whatsapp/>
        </div>
    );
};

export default Page;