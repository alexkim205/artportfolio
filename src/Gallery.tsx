import {PieceType} from "./pieces";
import {LazyLoadImage} from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/black-and-white.css';
import {Fragment, useState} from "react";
import { Transition } from '@headlessui/react'

function Image({image}: {image: PieceType}): JSX.Element {
    const [loaded, setLoaded] = useState(false)
    return (
        <div key={image.id} className="flex flex-row justify-center gap-8 w-full min-w-[300px] p-4 max-w-7xl opacity-100 first:mt-[-225px] transition-opacity cursor-cell">
            <div className="w-full flex justify-center items-center">
                <LazyLoadImage key={image.id} className="max-h-[450px]" afterLoad={() => {setLoaded(true)}} effect="black-and-white" src={image.file} alt={image.alt}/>
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
                <div className="flex flex-col gap-1 w-[300px] shrink-0">
                    <p className="text-xs sm:text-sm text-gray-500">{image.date.format("MMM D, YYYY")}</p>
                    <p className="text-xs sm:text-sm grow leading-relaxed">{image.blurb}</p>
                </div>
            </Transition>
        </div>
    )
}

export function Gallery({images}: {images: PieceType[]}) {
    return (
        <div className="flex flex-col justify-start pt-[40vh] items-center grow h-screen gap-12">
            {images.map((image) => (
                <Image key={image.id} image={image}/>
            ))}
        </div>
    )
}