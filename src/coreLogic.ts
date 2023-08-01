import {actions, kea, reducers, path, selectors} from "kea";

import type {coreLogicType} from "./coreLogicType";
import {categoryToPieces, pieces, PieceType} from "./pieces";

export const coreLogic = kea<coreLogicType>([
    path(["", "", "", "src", "coreLogic"]),
    actions(() => ({
        setCategory: (category: string) => ({category}),
        addVisiblePiece: (id: PieceType["id"]) => ({id}),
        removeVisiblePiece: (id: PieceType["id"]) => ({id})
    })),
    reducers({
        currentCategory: [
            "all" as string,
            {
                setCategory: (_, {category}) => category
            }
        ],
        visiblePieces: [
            new Set(),
            {
                addVisiblePiece: (oldSet, {id}) => new Set([...oldSet, id]),
                removeVisiblePiece: (oldSet, {id}) => new Set([...oldSet].filter(x => x !== id))
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