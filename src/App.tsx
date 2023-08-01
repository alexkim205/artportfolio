import {categories} from "./pieces";
import {Gallery} from "./Gallery";
import {useActions, useValues} from 'kea'
import {coreLogic} from "./coreLogic";
import clsx from "clsx";
import {PiEyeClosedDuotone, PiEyeDuotone} from "react-icons/pi";
import {useState} from "react";


function Sidebar(): JSX.Element {
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
    const Icon = presentationMode ? PiEyeDuotone : PiEyeClosedDuotone
    const OppositeIcon = presentationMode ? PiEyeClosedDuotone : PiEyeDuotone
    const [hovered, setHovered] = useState(false)

    const VisibleIcon = hovered ? OppositeIcon : Icon

    return (
        <div className="flex flex-row justify-end items-center h-12 md:h-16 md:mr-1 w-full md:w-auto fixed z-10 top-0 left-0 right-0 shrink-0 bg-white dark:bg-black md:bg-transparent dark:md:bg-transparent duration-75 transition-colors">
            <div className="p-3 rounded-full bg-inherit" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
                 onClick={() => setPresentationMode(!presentationMode)}>
                <VisibleIcon className={clsx("shrink-0 text-3xl md:text-3xl cursor-cell dark:fill-white")}/>
            </div>
        </div>
    )
}

function App() {
    const {filteredPieces, presentationMode} = useValues(coreLogic)

    return (
        <div className={clsx("w-full flex flex-row bg-transparent", presentationMode && "dark")}>
            <div className={clsx(
                "transition-colors dark:bg-black bg-white duration-75 flex flex-row md:flex-nowrap flex-wrap md:flex-col top-10 md:top-0 left-0 justify-center md:justify-start md:w-52 md:items-start items-center px-3 pt-0 pb-3 py-3 md:px-6 md:py-6 shrink-0 w-full fixed z-20 gap-1 md:gap-0.5",
            )}>
                <Sidebar/>
            </div>
            <Header/>
            <div
                className={clsx("flex flex-col relative transition-colors duration-75 justify-start items-center pt-32 pb-32 md:pt-24 md:pb-24 grow gap-6 md:gap-12 dark:bg-black bg-white")}>
                <Gallery images={filteredPieces}/>
            </div>
        </div>
    )
}

export default App
