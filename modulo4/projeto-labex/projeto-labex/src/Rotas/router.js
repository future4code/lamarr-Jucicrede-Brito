import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AdminHomePage } from "../Pages/AdminHomePage";
import { ApplicationFormPage } from "../Pages/ApplicationFormPage";
import { CriateTripPage } from "../Pages/CriateTripPage";
import { HomePage } from "../Pages/HomePage";
import { ListTripsPage } from "../Pages/ListTripsPage";
import { LoginPage } from "../Pages/LoginPage";
import { TripDetailsPage } from "../Pages/TripDetailsPage";

export function Rotas(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/admin" element={<AdminHomePage/>}/>
            <Route path="/application" element={<ApplicationFormPage/>}/>
            <Route path="/criate" element={<CriateTripPage/>}/>
            <Route path="/list" element={<ListTripsPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/details" element={<TripDetailsPage/>}/>

        </Routes>
        
        </BrowserRouter>
    )
}