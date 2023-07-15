import React from 'react';
import Infobanner from "@/app/home/Infobanner/infobanner";
import Whatsapp from "@/app/home/whatsapp/whatsapp";
import Image from "next/image";
import Contact from "@/app/home/contactus/contact";

const Page = () => {
    return (
        <div>
            <Infobanner/>
            <Image height="500" width="1000" className="w-screen h-auto  md:h-[80vh]" src="/mbbs.jpeg" alt=""/>
            <Contact/>
            <Whatsapp/>
        </div>
    );
};

export default Page;