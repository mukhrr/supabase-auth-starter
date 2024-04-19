'use client'

import {useEffect} from "react";

export default function AuthTemplate({children}) {

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const url = window.location.origin + window.location.pathname;

            window.history.replaceState({}, document.title, url);
        }
    }, []);

    return children
}