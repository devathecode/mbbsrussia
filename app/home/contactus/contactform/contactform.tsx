"use client";
import React, {useEffect} from 'react';

const Contactform = () => {
    useEffect(() =>{
        let headers = new Headers();
        headers.append("X-CSCAPI-KEY", "API_KEY");
        let requestOptions = {
            method: 'GET',
            headers: headers,
            redirect: 'follow'
        };
        // fetch('https://api.countrystatecity.in/v1/countries', requestOptions).then((res) =>{
        //     console.log('res', res);
        // })
    })
    return (
        <>
            <div className="col-span-12 my-10">
                <div className="grid grid-cols-12 gap-2">
                    <div className="col-span-12 md:col-span-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            First Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username" type="text" placeholder="First name"/>
                    </div>
                    <div className="col-span-12 md:col-span-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Last Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username" type="text" placeholder="Last name"/>
                    </div>
                </div>
            </div>
            <div className="col-span-12">
                <button type="button" className="w-full rounded-md px-2 py-1 bg-green-600 hover:bg-green-800 text-white">Send OTP</button>
            </div>
        </>
    );
};

export default Contactform;