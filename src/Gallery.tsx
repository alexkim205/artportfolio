import {PieceType} from "./pieces";
import {LazyLoadComponent, LazyLoadImage} from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/black-and-white.css';
import {Fragment, useEffect, useRef, useState} from "react";
import {Transition} from '@headlessui/react'
import useOnScreen from "./useOnScreen";
import {useActions, useValues} from "kea";
import {coreLogic} from "./coreLogic";
import clsx from "clsx";

function Media({image}: { image: PieceType }): JSX.Element {
    const [loaded, setLoaded] = useState(false)
    const ref = useRef<HTMLDivElement>(null)
    const isVisible = useOnScreen(ref)
    const isImage = image.file.toLowerCase().endsWith(".png") || image.file.toLowerCase().endsWith(".jpg")

    const {addVisiblePiece, removeVisiblePiece} = useActions(coreLogic)
    const {presentationMode} = useValues(coreLogic)

    useEffect(() => {
        if (isVisible) {
            addVisiblePiece(image.id)
        } else {
            removeVisiblePiece(image.id)
        }
    }, [isVisible])

    return (
        <div id={image.id} ref={ref} key={image.id}
             className={clsx("flex flex-col md:flex-row justify-center gap-4 md:gap-8 w-full p-0 md:p-6 max-w-[85rem] transition-opacity cursor-cell last:pb-[225px]", isVisible ? "opacity-100" : "opacity-30")}>
            <div className="shrink-0 w-0 md:w-[100px] lg:w-[200px]">
                <Transition
                    as={Fragment}
                    show={!presentationMode}
                    enter="transition-transform duration-75"
                    enterFrom="translate-x-full"
                    enterTo="translate-x-0"
                    leave="transition-transform duration-75"
                    leaveFrom="translate-x-0"
                    leaveTo="translate-x-full"
                >
                    <div className="shrink-0 min-w-0"/>
                </Transition>
            </div>
            <div className="w-full flex justify-center items-center duration-75">
                {isImage ? (
                    <LazyLoadImage key={image.id} className="max-h-[450px]" style={image.style} afterLoad={() => {
                        setLoaded(true)
                    }} effect="black-and-white" src={image.file} alt={image.alt}/>
                ) : (
                    <LazyLoadComponent key={image.id} afterLoad={() => {
                        setLoaded(true)
                    }}>
                        <video autoPlay muted loop playsInline style={image.style}>
                            <source src={image.file} type="video/webm"/>
                            <source src={image.file} type="video/mp4"/>
                        </video>
                    </LazyLoadComponent>
                )}
            </div>
            <Transition
                as={Fragment}
                show={loaded}
                enter="transition-opacity duration-75"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-75"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="shrink-0 md:w-[200px] dark:md:w-[100px] dark:lg:w-[200px] lg:w-[200px]">
                    <Transition
                        as="div"
                        className="flex flex-col gap-1.5 shrink-0 md:p-0 p-4"
                        show={!presentationMode}
                        enter="transition-transform duration-75"
                        enterFrom="translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition-transform duration-75"
                        leaveFrom="translate-x-0"
                        leaveTo="translate-x-full"
                    >

                        <p className="text-xs sm:text-sm text-gray-400">{image.date.format("MMM D, YYYY")}</p>
                        <p className="text-sm grow">{image.blurb}</p>
                    </Transition>
                </div>
            </Transition>
        </div>
    )
}

export function Gallery({images}: { images: PieceType[] }) {
    return (
        <>
            {images.map((image) => (
                <Media key={image.id} image={image}/>
            ))}
        </>
    )
}