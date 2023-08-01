import {PieceType} from "./pieces";
import {LazyLoadComponent, LazyLoadImage} from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/black-and-white.css';
import {Fragment, useEffect, useRef, useState} from "react";
import {Transition} from '@headlessui/react'
import useOnScreen from "./useOnScreen";
import {useActions} from "kea";
import {coreLogic} from "./coreLogic";
import clsx from "clsx";

function Media({image}: { image: PieceType }): JSX.Element {
    const [loaded, setLoaded] = useState(false)
    const ref = useRef<HTMLDivElement>(null)
    const isVisible = useOnScreen(ref)
    const isImage = image.file.toLowerCase().endsWith(".png") || image.file.toLowerCase().endsWith(".jpg")

    const {addVisiblePiece, removeVisiblePiece} = useActions(coreLogic)

    useEffect(() => {
        if (isVisible) {
            addVisiblePiece(image.id)
        } else {
            removeVisiblePiece(image.id)
        }
    }, [isVisible])

    return (
        <div id={image.id} ref={ref} key={image.id}
             className={clsx("flex flex-row justify-center gap-8 w-full min-w-[400px] p-4 max-w-[85rem] transition-opacity cursor-cell last:pb-[225px]", isVisible ? "opacity-100" : "opacity-30")}>
            <div className="w-full flex justify-center items-center ml-[200px]">
                {isImage ? (
                    <LazyLoadImage key={image.id} className="max-h-[450px]" style={image.style} afterLoad={() => {
                        setLoaded(true)
                    }} effect="black-and-white" src={image.file} alt={image.alt}/>
                ) : (
                    <LazyLoadComponent key={image.id} afterLoad={() => {
                        setLoaded(true)
                    }}>
                        <video autoPlay muted loop playsInline style={image.style} >
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
                leave="transition-opacity duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="flex flex-col gap-1.5 w-[200px] shrink-0">
                    <p className="text-xs sm:text-sm text-gray-400">{image.date.format("MMM D, YYYY")}</p>
                    <p className="text-sm grow">{image.blurb}</p>
                </div>
            </Transition>
        </div>
    )
}

export function Gallery({images}: { images: PieceType[] }) {
    return (
        <div className="flex flex-col relative justify-start items-center py-24 h-screen grow gap-12">
            {images.map((image) => (
                <Media key={image.id} image={image}/>
            ))}
        </div>
    )
}