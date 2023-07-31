import {actions, kea, reducers, path, selectors} from "kea";

import type {coreLogicType} from "./coreLogicType";
import {categoryToPieces, pieces} from "./pieces";

export const coreLogic = kea<coreLogicType>([
    path(["", "", "", "src", "coreLogic"]),
    actions(() => ({
        setCategory: (category: string) => ({category})
    })),
    reducers({
        currentCategory: [
            "all" as string,
            {
                setCategory: (_, {category}) => category
            }
        ]
    }),
    selectors(() => ({
        filteredPieces: [
            (s) => [s.currentCategory],
            (currentCategory: string) => {
                return currentCategory === "all" ? pieces : categoryToPieces[currentCategory]
            }
        ]
    }))
])