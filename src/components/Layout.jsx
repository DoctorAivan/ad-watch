import { Outlet } from "react-router-dom";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faServer,
    faHome,
    faTowerCell,
    faFileAudio,
    faUsers,
    faGear,
    faAudioDescription
} from '@fortawesome/free-solid-svg-icons'

import Footer from "./Footer";

const Layout = () => {

    const buttons = [
        {
            id: 1,
            link: '#',
            title: 'Home',
            icon: faHome
        },
        {
            id: 2,
            link: '#',
            title: 'Radios',
            icon: faTowerCell
        },
        {
            id: 3,
            link: '#',
            title: 'Compare Audio',
            icon: faFileAudio
        },
        {
            id: 4,
            link: '#',
            title: 'Users',
            icon: faUsers,
        },
        {
            id: 5,
            link: '#',
            title: 'Settings',
            icon: faGear
        }
    ]

    return (
        <div className="bg-slate-800 grid grid-cols-[300px_1fr] h-screen font-ubuntu">

            <div className="z-10 bg-gradient-to-tr from-slate-600 to-slate-700/50 shadow-2xl shadow-slate-900/80">
                <div className="fixed w-[300px]">
                    <div className="flex px-10 pt-9 text-base font-light">
                        <div className="flex-none inline-block align-middle mr-3 pt-[5px]">
                            <FontAwesomeIcon icon={faAudioDescription} className='text-3xl text-slate-200' />
                        </div>
                        <div className="flex-none font-semibold font-regular text-4xl text-slate-200 tracking-wider">
                            Watch
                        </div>
                    </div>
                    <div className="px-10 pt-1 text-slate-400 text-xs font-light">
                        Monitoring broadcast system
                    </div>
                    <div className="px-10 pt-1 pb-4 text-slate-500 text-xs font-thin">
                        Berserker Group
                    </div>
                    <div className="px-10 text-slate-400 text-base font-light">
                        {
                            buttons.map((button) => (
                                <Link key={button.id} to={button.link}>
                                    <div className="hover:text-indigo-400 hover:font-normal pt-3 pb-4 border-b border-slate-600"><FontAwesomeIcon className="mr-4 w-4" icon={button.icon} />
                                        {button.title}
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className="z-1">

                <div className="py-6 px-10 bg-gradient-to-tl from-indigo-900 to-indigo-700">
                    <div className="grid justify-items-end">
                        <div className="flex">
                        <div className="flex-0 rounded-full relative bg-white w-8 h-8"></div>
                        <div className="flex-0 text-indigo-100 ml-5 mt-0.5">Username</div>
                        </div>
                    </div>
                </div>

                <Outlet />

                <Footer />

            </div>

        </div>
    )
}

export default Layout