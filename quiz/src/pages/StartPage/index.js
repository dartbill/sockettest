import React from 'react'
import { PlayerCount } from '../../components/'
import { HighScoresButton } from '../../components/'

export const StartPage = () => {


  return (
    <div className='btn-container'>  
        <PlayerCount/>
        <HighScoresButton/>
    </div>
  )
}
