import {create} from "zustand";
import {persist} from "zustand/middleware";


type UserState = {
    view: string;
    setView: (val: string) => void;
};

const initialState = {
    view: "list",
};

export const useOrdersStore = create<UserState>()(
    persist(
        (set) => ({
            ...initialState,
            setView: (view:string) => set(() => ({view})),
        }),
        {name: "orders"}
    )
);