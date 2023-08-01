import {categories} from "./pieces";
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
import {useState} from "react";
import {Transition} from "@headlessui/react";


function Sidebar({onClick}:{onClick?: ()=>void}): JSX.Element {
    const {currentCategory} = useValues(coreLogic)
    const {setCategory} = useActions(coreLogic)

    return (
        <>
            {categories.map(category =>
                <a
                    key={category}
                    className={clsx(
                        `px-1 cursor-cell`,
                        category === currentCategory ? "text-white bg-blue-700 font-semibold text-lg" : `text-sm dark:text-gray-500 text-gray-500 dark:hover:text-white hover:text-white hover:bg-blue-700`
                    )}
                    href={`#${category}`}
                    onClick={() => {
                        setCategory(category)
                        onClick?.()
                    }}
                >
                    {category}
                </a>)}
        </>
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
                className="md:hidden h-screen w-screen bg-white dark:bg-black fixed z-20"
                unmount
                enter="transition-transform ease-in-out duration-150"
                enterFrom="-translate-y-full"
                enterTo="translate-y-0"
                leave="transition-transform ease-in-out duration-150"
                leaveFrom="translate-y-0"
                leaveTo="-translate-y-full"
            >
                <div className="p-3">
                    <PiArrowsInSimple onClick={() => setMenuOpen(false)}
                                      className={clsx("w-[30px] h-[30px] shrink-0 rotate-[135deg] text-3xl md:text-3xl cursor-cell dark:fill-white")}/>
                </div>
                <div
                    className="flex flex-col px-6 pt-3 pb-6 justify-start items-start gap-1"
                >
                    <Sidebar onClick={() => {
                        setMenuOpen(false)
                    }}/>
                </div>
            </Transition>
            <div
                className="flex flex-row justify-between items-center h-14 md:h-16 md:mr-1 w-full md:w-auto fixed z-10 top-0 left-0 right-0 shrink-0 bg-white dark:bg-black md:bg-transparent dark:md:bg-transparent duration-75 transition-colors">
                <div className="md:invisible p-3 rounded-full bg-inherit"
                     onTouchStart={() => setMenuHovered(true)}
                     onTouchEnd={() => setMenuHovered(false)}
                     onMouseEnter={() => setMenuHovered(true)}
                     onMouseLeave={() => setMenuHovered(false)}
                     onClick={() => setMenuOpen(true)}
                >
                    <VisibleMenuIcon className={clsx("shrink-0 text-3xl md:text-3xl cursor-cell dark:fill-white")}/>
                </div>
                <div className="p-3 rounded-full bg-inherit"
                     onTouchStart={() => setPresentationHovered(true)}
                     onTouchEnd={() => setPresentationHovered(false)}
                     onMouseEnter={() => setPresentationHovered(true)}
                     onMouseLeave={() => setPresentationHovered(false)}
                     onClick={() => setPresentationMode(!presentationMode)}

                >
                    <VisiblePresentationIcon
                        className={clsx("shrink-0 text-3xl md:text-3xl cursor-cell dark:fill-white")}/>
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
                className={clsx("flex flex-col relative transition-colors duration-75 justify-start items-center py-16 md:py-24 grow gap-6 md:gap-12 dark:bg-black bg-white")}>
                <Gallery images={filteredPieces}/>
            </div>
        </div>
    )
}

export default App
