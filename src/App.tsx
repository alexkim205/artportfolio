import {categories} from "./pieces";
import {Gallery} from "./Gallery";
import {useActions, useValues} from 'kea'
import {coreLogic} from "./coreLogic";
import clsx from "clsx";


function App() {
    const {currentCategory, filteredPieces} = useValues(coreLogic)
    const {setCategory} = useActions(coreLogic)

    return (
        <div className="w-full h-full flex flex-row">
            <div className="flex flex-col justify-center items-start p-6 gap-0.5 shrink-0 w-32 fixed z-10">
                {categories.map(category =>
                    <a
                        key={category}
                        className={clsx(
                            `text-sm px-1 cursor-cell`,
                            category === currentCategory ? "text-white bg-indigo-800 font-semibold text-lg" : "text-gray-500 hover:text-white hover:bg-indigo-800"
                        )}
                        href={`#${category}`}
                        onClick={() => {
                            setCategory(category)
                        }}
                    >
                        {category}
                    </a>)}
            </div>
            <Gallery images={filteredPieces}/>
        </div>
    )
}

export default App
