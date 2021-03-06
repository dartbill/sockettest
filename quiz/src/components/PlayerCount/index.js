import React from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
export const PlayerCount = () => {

  let navigate = useNavigate();
  const routeChange = (path) => {
    navigate(path);
  }

  const dispatch = useDispatch();

  const updatePlayers = (p) => {
    p === 1
      ? dispatch({ type: 'SET_PLAYER_COUNT', payload: 1 })
      : dispatch({ type: 'SET_PLAYER_COUNT', payload: 2 });
    routeChange('/newgame');
  }

  return (
    <>

    <div className="player-count-container">
        <h2>Select Player Count</h2>
        <div className="player-count-btns">
          <button className='coolbutton'id="coolbutton" onClick={()=> updatePlayers(1)}>One</button>
          <button className='coolbutton'id="coolbutton" onClick={()=> updatePlayers(2)}>Two</button>
        </div>
        {/* <button>High Scores</button> */}
    </div>
    </>
  )
}
