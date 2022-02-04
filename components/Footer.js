import React from 'react';
import Link from 'next/link'
import styled from "styled-components";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='bg-gray-900  px-4 sm:px-16  flex flex-col sm:flex-row w-full justify-between text-white py-4'>
            <div className='font-semibold tracking-wider'>
                <div>
                    &copy; PluralForms  {new Date().getFullYear()}
                </div>
                <div className='h-2'></div>
                <div className='text-sm tracking-widest uppercase'>
                    Made with love only for you.
                </div>
            </div>
            <div>
                <div>Feel free to reach out..</div>
                <nav className="flex gap-10 sm:gap-6 mt-4 sm:mt-1 text-white space-y-1">
                    <SocialIcons>
                        <SocialIconLink href="https://linkedin.com/" aria_label="Linkedin" target="_blank"
                            rel="noreferrer" data-name="Linkedin" title="PluralForms on Linkedin">
                            <FaLinkedin />
                        </SocialIconLink>
                        <SocialIconLink href="https://facebook.com/pluralforms" aria_label="Facebook"
                            target="_blank" rel="noreferrer" data-name="Facebook" title="PluralForms on Facebook">
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href="https://instagram.com/" aria_label="Instagram" target="_blank"
                            rel="noreferrer" data-name="Instagram" title="PluralForms on Instagram">
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href="https://twitter.com/" aria_label="Twitter" target="_blank"
                            rel="noreferrer" data-name="Twitter" title="PluralForms on Twitter">
                            <FaTwitter />
                        </SocialIconLink>



                    </SocialIcons>
                </nav>

            </div>
        </footer>
    )
};

export default Footer;

export const FooterContainer = styled.footer`
    background-color: #101522;
`
export const FooterWrap = styled.div`
    padding: 48px  24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`

export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;
    @media screen and (max-width: 768px){
        padding-top: 32px;
    }
`
export const FooterLinksWrapper = styled.div`
    display: flex;
    @media screen and (max-width:820px){
        flex-direction: column;
    }
`
export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: #FFF;
    @media screen and (max-width:420px){
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`
export const FooterLinkTitle = styled.h1`
    font-size: 14px;
    margin-bottom: 16px;
`
export const FooterLink = styled(Link)`
    color: #FFF;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;

    &:hover{
        color:#01BF71;
        transition: 0.3s ease-in-out;
    }
`
export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`
export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;

    @media screen and (max-width:820px){
        flex-direction: column;
    }
`
export const SocialLogo = styled(Link)`
    color: #FFF;
    justify-content: center;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;

`
export const WebsiteRights = styled.small`
    color: #FFF;
    margin-bottom: 16px;
`
export const SocialIcons = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;
    & > * + *{
        margin-left: 2rem;
    }
    /* align-items: center; */
`
export const SocialIconLink = styled.a`
    color: #FFF;
    font-size: 24px;    

`