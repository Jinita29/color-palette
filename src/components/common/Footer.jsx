import { Icon } from '@iconify/react';

const Footer = () => {
    return (
        <>
            <footer className="py-1 bg-light dark:bg-dark shadow">
                <div className="container">
                    <div className="grid grid-cols-1">
                        <div>
                            <p className="dark:text-white text-center py-1 text-sm flex items-center justify-end">
                                Made in <Icon icon="twemoji:flag-india" className={'mx-2 text-base'} /> &copy; 2022
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;