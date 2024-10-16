import clipboardCopy from 'clipboard-copy';
import { useState } from 'react';
import { WhatsappShareButton, TwitterShareButton, LinkedinShareButton } from 'react-share';
import plus from '../assets/images/plus.svg';

const SocialShare = () => {
    const [copied, setCopied] = useState(false);
    const shareURL = 'https://dailystoicreminders.uk/#wisdom';
    const handleCopyLink = () => {
        const url = 'https://dailystoicreminders.uk/#wisdom';
        clipboardCopy(url);

        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 1000);
    };
    return (
        <div className="flex text-center flex-col lg:my-20 my-6 lg:w-6/12 w-12/12 mx-auto gap-6 justify-evenly">
            <p className="lg:text-4xl text-xl font-playfair">
                <span className="font-gothic">S</span>hare quote:
            </p>
            <div className="leading-tight lg:text-xl sm:text-xl text-md font-playfair justify-center gap-6 lg:w-8/12 mx-auto mb-10 w-10/12">
                <ul className="social-links lg:text-xl sm:text-xl text-md">
                    <li className="flex align-center">
                        <p className="">01.</p>
                        <div className="social-link" onClick={handleCopyLink}>
                            {copied ? 'Link copied!' : 'Copy link'}
                            <img src={plus} alt="Plus Sign" className="social-plus" />
                        </div>
                    </li>
                    <li className="flex align-center">
                        <p className="">02.</p>
                        <WhatsappShareButton url={shareURL} className="social-link">
                            Whatsapp
                            <img src={plus} alt="Plus Sign" className="social-plus" />
                        </WhatsappShareButton>
                    </li>
                    <li className="flex align-center">
                        <p className="">03.</p>
                        <TwitterShareButton url={shareURL} className="social-link">
                            Twitter
                            <img src={plus} alt="Plus Sign" className="social-plus" />
                        </TwitterShareButton>
                    </li>
                    <li className="flex align-center">
                        <p className="">04.</p>
                        <LinkedinShareButton url={shareURL} className="social-link">
                            LinkedIn
                            <img src={plus} alt="Plus Sign" className="social-plus" />
                        </LinkedinShareButton>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SocialShare;
