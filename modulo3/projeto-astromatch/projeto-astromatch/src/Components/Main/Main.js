import React, { useState } from "react";
import { AppBar } from "../AppBar/AppBar";
import { ProfilePage } from "../ChooseProfilePage/ProfilePage";
import { MatchListPage } from "../MatchListPage/MatchListPage";
import { MainConteiner } from "./Style";

export function Main () {
  const [selectPage, setSelectPage] = useState('profile-page')

  const renderSelectPage = () => {
    switch(selectPage) {
      case 'profile-page':
        return <ProfilePage/>
        case 'match-list':
          return <MatchListPage/>
          default:
            return <ProfilePage/>
    }
  }

  const goToProfilePage = () => {
    setSelectPage('profile-page')
  }

  const goToMatchListPage = () => {
    setSelectPage('match-list')
  }
      return(
        <MainConteiner>
          <AppBar goToProfilePage={goToProfilePage} goToMatchListPage={goToMatchListPage} />
         {renderSelectPage()}

        </MainConteiner>
        
    )
}