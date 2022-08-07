import {Outlet} from 'react-router-dom';
import Header from "../components/common/Header"
import Footer from './../components/common/Footer';

const PublicLayout = () => {
    return (
        <>
            <Header />
            <main className="main-content bg-[#f0f0f0] dark:bg-[#313151] text-dark dark:text-light min-h-[calc(100vh-66px)] pt-[54px]">
                <div className={'main-area flex-auto flex flex-col justify-between h-full min-h-[calc(100vh-54px)]'}>
                    <div className={'py-4'}>
                        <div className={'container'}>
                            <Outlet />
                        </div>
                    </div>
                    <Footer />
                </div>
            </main>
        </>
    )
}

export default PublicLayout;