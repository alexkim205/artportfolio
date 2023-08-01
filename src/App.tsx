import {categories} from "./pieces";
import {Gallery} from "./Gallery";
import {useActions, useValues} from 'kea'
import {coreLogic} from "./coreLogic";
import clsx from "clsx";


function App() {
    const {currentCategory, filteredPieces, visiblePieces} = useValues(coreLogic)
    const {setCategory} = useActions(coreLogic)

    return (
        <div className="w-full h-full flex flex-row">
            <div className="flex flex-col justify-center items-start p-6 shrink-0 w-52 fixed h-screen z-10 gap-8">
                <div className="flex flex-col justify-center items-start gap-0.5">
                    {categories.map(category =>
                        <a
                            key={category}
                            className={clsx(
                                `px-1 cursor-cell`,
                                category === currentCategory ? "text-white bg-indigo-800 font-semibold text-lg" : "text-sm text-gray-500 hover:text-white hover:bg-indigo-800"
                            )}
                            href={`#${category}`}
                            onClick={() => {
                                setCategory(category)
                            }}
                        >
                            {category}
                        </a>)}
                </div>
                <div className="w-full flex flex-col justify-center items-start gap-1 grow h-full">
                    {/*{[0,1,2,3,4].map((offset) =>*/}
                    {/*    <div*/}
                    {/*        key={`${block.id}-block`}*/}
                    {/*        onClick={() => {*/}
                    {/*            document.getElementById(block.id)?.scrollIntoView()*/}
                    {/*        }}*/}
                    {/*        className={clsx(`flex justify-center items-center text-xs text-gray-400 w-8 h-2 rounded-sm hover:bg-gray-300 transition-colors cursor-cell bg-gray-100`, visiblePieces.has(block.id) && "bg-gray-200")}>*/}
                    {/*        {visiblePieces.has(block.id) && (index + 1)}*/}
                    {/*    </div>*/}
                    {/*)}*/}
                </div>
            </div>
            <Gallery images={filteredPieces}/>
        </div>
    )
}

export default App
