import React from "react";
import { toast } from "react-toastify";

function initLocalStorage(): void {
    try {
        
    } catch (error) {
        console.error(error);
        toast.error(`${error}`);
    }
}

export default initLocalStorage;