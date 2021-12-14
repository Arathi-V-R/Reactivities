import { useContext } from "react";
import ActivityStore from "./activityStore";
import { createContext } from "react";

interface Store {
    activityStore: ActivityStore
}

export const store: Store = {
    activityStore: new ActivityStore()
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}