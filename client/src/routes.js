import React from "react"
import {Routes, Route, Navigate} from "react-router-dom"
import {AuthPage} from "./pages/AuthPage"
import {LinksPage }from "./pages/LinksPage"
import {CreatePage }from "./pages/CreatePage"
import {DetailPage} from "./pages/DetailPage"


export const useRoutes = IsAuthenticated => {
    if(IsAuthenticated) {
        return (
            <Routes>
                <Route path="*" element={<Navigate to ="/create" />}/>

                <Route path="/links" element={<LinksPage />}/>

                <Route path="/create" element={<CreatePage />}/>

                <Route path="/detail/:id" element={<DetailPage />}/>
                {/*/!*<Route path="/detail" element={<DetailPage />}/>*!/*/}


            </Routes>
        )
    }
    return (
        <Routes>
            <Route path="*" element={<Navigate to ="/" />}/>
            <Route path="/" element={<AuthPage />}/>



        </Routes>
    )
}