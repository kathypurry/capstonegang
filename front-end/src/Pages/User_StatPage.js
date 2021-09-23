import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { apiURL } from '../util/apiURL';
import styled from 'styled-components';

const StatContainer = styled.div`
    display: flex;

`
const MainStats = styled.li`
    color: neongreen;

`


const User_StatPage = () => {
    const [userStats, setUserStats] = useState({})
    const API = apiURL()
    useEffect(() => {
        axios
            //call to the end point for that specific user's stats
            .get(`${API}`)
            .then(
                (res) => {
                    setUserStats(res.data)
                },
                (error) => console.log('get', error)
            )
    })
        
    return (
        <div>
            <div>Fastest WPM</div>
            <div>Average mistakes per minute</div>
            <div>Hours played</div>
            <div>Hightest Score</div>
            <div>Rank</div>
            <div>Keyboard type</div>
            
        </div>
    )
}

export default User_StatPage
