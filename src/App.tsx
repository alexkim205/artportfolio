import {categories, categoryToPieces} from "./pieces";
import {Gallery} from "./Gallery";
import {useActions, useValues} from 'kea'
import {coreLogic} from "./coreLogic";
import clsx from "clsx";
import {
    PiArrowsInSimple,
    PiArrowsVertical,
    PiDotOutline,
    PiEyeClosedDuotone,
    PiEyeDuotone
} from "react-icons/pi";
import {CSSProperties, useState} from "react";
import {Transition} from "@headlessui/react";
import {LazyLoadImage} from "react-lazy-load-image-component";
import Logo from "../public/alex.png"


function Sidebar({onClick}:{onClick?: ()=>void}): JSX.Element {
    const {currentCategory} = useValues(coreLogic)
    const {setCategory} = useActions(coreLogic)

    return (
        <>
            <LogoIcon iconClassName="w-24" className="hidden md:block dark:hover:bg-blue-700 hover:bg-blue-700 mb-1" interactive/>

            {categories.map(category =>
                <a
                    key={category}
                    className={clsx(
                        `px-1 cursor-cell flex items-center gap-3`,
                        category === currentCategory ? "text-white bg-blue-700 font-semibold text-lg" : `text-sm dark:text-gray-500 text-gray-500 dark:hover:text-white hover:text-white hover:bg-blue-700`
                    )}
                    href={`#${category}`}
                    onClick={() => {
                        setCategory(category)
                        onClick?.()
                    }}
                >
                    {category} <span className={clsx(category === currentCategory ? "text-lg text-white" : "text-xs")}>{categoryToPieces[category]?.length}</span>
                </a>)}
        </>
    )
}

function LogoIcon({iconClassName, className, interactive, style}:{iconClassName?: string, className?: string, interactive?: boolean, style?: CSSProperties}): JSX.Element{
    const { presentationMode} = useValues(coreLogic)
    const [logoHovered, setLogoHovered] = useState(false)

    return (
        <a
            onMouseEnter={() => setLogoHovered(true)}
            onMouseLeave={() => setLogoHovered(false)}
            onTouchStart={() => setLogoHovered(true)}
            onTouchEnd={() => setLogoHovered(false)}
            className={clsx(className, "cursor-cell overflow-hidden transition duration-75 dark:bg-inherit")} href="https://www.instagram.com/alex.illustrates.k/" target="_blank">
            <LazyLoadImage src={Logo} className={clsx(iconClassName, "cursor-cell aspect-square px-2 p-0.5 pb-2")} style={{
                filter: style || interactive && logoHovered ? "invert(100%) sepia(33%) saturate(0%) hue-rotate(231deg) brightness(106%) contrast(101%)" : presentationMode ? "invert(47%) sepia(9%) saturate(581%) hue-rotate(182deg) brightness(93%) contrast(91%)" : undefined
            }}/>
        </a>
    )
}

function Header(): JSX.Element {
    const {presentationMode} = useValues(coreLogic)
    const {setPresentationMode} = useActions(coreLogic)
    const PresentationIcon = presentationMode ? PiEyeDuotone : PiEyeClosedDuotone
    const PresentationOppositeIcon = presentationMode ? PiEyeClosedDuotone : PiEyeDuotone
    const [presentationHovered, setPresentationHovered] = useState(false)

    const [menuOpen, setMenuOpen] = useState(false)
    const [menuHovered, setMenuHovered] = useState(false)

    const VisibleMenuIcon = menuHovered ? PiArrowsVertical : PiDotOutline
    const VisiblePresentationIcon = presentationHovered ? PresentationOppositeIcon : PresentationIcon

    return (
        <>
            <Transition
                show={menuOpen}
                as="div"
                className="flex flex-col justify-end items-start md:hidden bg-white dark:bg-black fixed inset-0 z-20"
                unmount
                enter="transition-transform ease-in-out duration-150"
                enterFrom="translate-y-full"
                enterTo="translate-y-0"
                leave="transition-transform ease-in-out duration-150"
                leaveFrom="translate-y-0"
                leaveTo="translate-y-full"
            >
                <div
                    className="flex flex-col px-6 pt-6 pb-3 justify-start items-start gap-1"
                >
                    <Sidebar onClick={() => {
                        setMenuOpen(false)
                    }}/>
                </div>
                <div className="flex justify-center items-center p-3 rounded-full bg-inherit h-[72px] ">
                    <PiArrowsInSimple onClick={() => setMenuOpen(false)}
                                      className={clsx("shrink-0 rotate-[135deg] text-4xl cursor-cell dark:fill-white")}/>
                </div>
            </Transition>
            <div
                className="border-t md:border-t-0 flex flex-row justify-between items-center md:h-16 md:mr-1 w-full md:w-auto fixed z-10 md:top-0 bottom-0 left-0 right-0 shrink-0 bg-white dark:bg-black md:bg-transparent dark:md:bg-transparent duration-75 transition-colors">
                <div className="md:invisible p-3 rounded-full bg-inherit"
                     onTouchStart={() => setMenuHovered(true)}
                     onTouchEnd={() => setMenuHovered(false)}
                     onMouseEnter={() => setMenuHovered(true)}
                     onMouseLeave={() => setMenuHovered(false)}
                     onClick={() => setMenuOpen(true)}
                >
                    <VisibleMenuIcon className={clsx("shrink-0 text-4xl md:text-3xl cursor-cell dark:fill-white")}/>
                </div>
                <LogoIcon iconClassName="w-16" className="md:hidden block dark:hover:scale-110 hover:scale-110" style={presentationMode ? {filter: "invert(100%) sepia(33%) saturate(0%) hue-rotate(231deg) brightness(106%) contrast(101%)"} : undefined}/>
                <div className="p-3 rounded-full bg-inherit"
                     onTouchStart={() => setPresentationHovered(true)}
                     onTouchEnd={() => setPresentationHovered(false)}
                     onMouseEnter={() => setPresentationHovered(true)}
                     onMouseLeave={() => setPresentationHovered(false)}
                     onClick={() => setPresentationMode(!presentationMode)}

                >
                    <VisiblePresentationIcon
                        className={clsx("shrink-0 text-5xl md:text-3xl cursor-cell dark:fill-white")}/>
                </div>
            </div>
        </>
    )
}

function App() {
    const {filteredPieces, presentationMode} = useValues(coreLogic)

    return (
        <div className={clsx("w-full flex overflow-hidden flex-row bg-transparent", presentationMode && "dark")}>
            <div className={clsx(
                "transition-colors hidden w-auto dark:bg-black bg-white duration-75 md:flex flex-nowrap flex-col top-0 left-0 justify-center items-start p-6 shrink-0 fixed z-20 gap-0.5",
            )}>
                <Sidebar/>
            </div>
            <div
                className="flex flex-col fixed bg-white dark:bg-black h-screen w-screen overflow-x-hidden overflow-y-auto">

            </div>
            <Header/>
            <div
                className={clsx("flex flex-col relative transition-colors duration-75 justify-start items-center pb-16 md:py-32 grow gap-6 md:gap-12 dark:bg-black bg-white")}>
                <Gallery images={filteredPieces}/>
            </div>
        </div>
    )
}

export default App
