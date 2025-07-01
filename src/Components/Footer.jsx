import React from "react";

function Footer() {
    return (
        <>
            <div className="bg-gray-900 text-white py-12 items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg-px:8">
                    <div className=" grid grid-cols-1 gap-8  md:grid-cols-4 ">
                        <div>
                            <h2 className="items-center mb-4 font-bold text-xl">MANDIRMANZIL</h2>
                            <p className="text-gray-400 mb-4">
                                Your gateway to India's most sacred places guiding spiritual journeys and
                                connecting souls through divine experiences
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                <li><a href="" className="text-gray-400 hover:text-white">About Us</a></li>
                                <li><a href="" className="text-gray-400 space-y-2 hover:text-white">Worship Places</a></li>
                                <li><a href="" className="text-gray-400 hover:text-white">Pilgrimages</a></li>
                                <li><a href="" className="text-gray-400 hover:text-white">Prayer Guides</a></li>
                                <li><a href="" className="text-gray-400 hover:text-white">Blog</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-lg mb-4">Support</h4>
                            <ul className="space-y-2">
                                <li><a href="" className="text-gray-400 hover:text-white">Help Center</a></li>
                                <li><a href="" className="text-gray-400 hover:text-white">Booking Help</a></li>
                                <li><a href="" className="text-gray-400 hover:text-white">Cancellation Policy</a></li>
                                <li><a href="" className="text-gray-400 hover:text-white">Safety Guidelines</a></li>
                                <li><a href="" className="text-gray-400 hover:text-white">Contact us</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
                            <div className="space-y-3 text-gray-400">
                                <div className="flex items-center">
                                    <svg className="h-5 w-5 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                       <path fill="#ffffff" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
                                    </svg>
                                    <span>+91 8120280623</span>
                                </div>
                                <div className="flex items-center">
                                    <svg className="h-5 w-5 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                      <path fill="#ffffff" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
                                    </svg>
                                    <span>lekhikas2@gmail.com</span>
                                </div>
                                <div className="flex items-center">
                                    <svg className="h-5 w-5 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                      <path fill="#ffffff" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
                                    </svg>
                                    <span>123 Adventure City <br />
                                    Travel City, TC 12345</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center pt-8 border-gray-800 border-t mt-8">
                    <p className="text-gray-400">© 2025 MandirManzil. All rights reserved. | Privacy Policy | Terms Of Service</p>
                </div>
            </div>
        </>
    )
}

export default Footer;