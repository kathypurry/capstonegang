import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis
} from 'recharts';
import { apiURL } from '../util/apiURL';

const API = apiURL


const StatGraph = () => {
    //axios get for all user stats in back end by their id
    // const { id } = useParams();
    // const [stats, setStats] = useState()
    // useEffect(() => {
    //     // get user data from back end by id
    //     // convert to array of objects 
    //     // ^ will depend on the shape of the data we get from firebase so we can pass data into the graph

    //     axios
    //         .get(`${API}/users/id`)
    //         .then(response => setStats(response.data.payload))
    //         .catch((e)=>console.error(e))
    //     }, [id])
       
    
    //Test data    
    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ]

    // const data = stats
    
    return (
        <div>
            <LineChart
                width={600}
                height={400}
                data={data}
            >
                <Line
                    type="natural"
                    dataKey="uv"
                    stroke="#80FF00"
                    strokeWidth="4"
                />
                <CartesianGrid stroke="#FFFFFF"/>
                <XAxis dataKey="name"/>
                <YAxis />
            </LineChart>
        </div>
    )
};

export default StatGraph;




