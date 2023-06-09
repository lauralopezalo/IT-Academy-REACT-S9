import React from "react";
import { Logo } from 'GlobalStyles';
import { FooterSection, SubSection } from "./Footer.style";

const Footer = () => {

    return (
        <FooterSection >
            <div className="flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div className="w-1/3 py-20 md:mx-0 mx-auto md:pl-20 text-center md:text-left">
                    <Logo>Sardenya CoWorks</Logo>
                    <p className="pt-12 pb-4">Calle Sardenya 662<br /> 08025 Barcelona</p>
                    <p>+34 93 123 45 67</p>
                </div>

                <div className="w-full md:w-2/3 md:mx-0 mx-auto">
                    <iframe
                        title="googleMaps"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2146.5738275003373!2d2.1599634568914072!3d41.413362902889006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2b704b7b331%3A0x51ae749ab841e32c!2sC%2F%20de%20Sardenya%2C%20661%2C%2008024%20Barcelona!5e0!3m2!1ses!2ses!4v1683585164749!5m2!1ses!2ses"
                        width="100%" 
                        height="400" 
                        style={{ border: '0' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>

            <SubSection>
                <div className="py-4 flex flex-col items-center lg:flex-row justify-between">

                    <span className="inline-flex sm:mt-0 mt-2 justify-center sm:justify-start">
                        <a href="https://es-es.facebook.com/">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                        </a>
                        <a href="https://twitter.com/home">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                            </svg>
                        </a>
                        <a href="https://www.instagram.com/">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/feed/">
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                            </svg>
                        </a>
                    </span>
                    <div className="flex flex-col lg:flex-row lg:gap-12">
                        <span className="text-center">Política de cookies</span>
                        <span className="text-center">Política de privacidad</span>
                    </div>
                    <span className="text-center sm:text-left">© 2023 - Laura López Alonso</span>
                </div>
            </SubSection>
        </FooterSection>
    )
}

export default Footer;