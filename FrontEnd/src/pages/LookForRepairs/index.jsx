import React, { useEffect, useState } from 'react'
import { getAllNullJobsRequest, technicianGetNearbyJobsRequest } from '../../api';
import Banner from '../../components/Banner'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./LookForRepairs.css"
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { TextField } from '@mui/material';

export default function LookForRepairs() {
    const [jobs, setJobs] = useState([]);
    const navigate = useNavigate();
    const history = useLocation();
    const [id, setId] = useState(history.state.id);
    const [lat, setLat] = useState("");
    const [lon, setLon] = useState("")
    const [flag, setFlag] = useState(false);

    const onLatChange = e => setLat(e.target.value)
    const onLonChange = e => setLon(e.target.value)

    // useEffect(
    //     () => getAllNullJobsRequest().then(
    //         response => {
    //             console.log(response.data);
    //             setJobs(response.data)
    //         }
    //     ).catch(
    //         err => alert(err)
    //     )
    //     , []);

    const toJobDetails = (id, job) => () => navigate("/JobDetails", { state: { id, job } });

    const submitLocation = () => {
        technicianGetNearbyJobsRequest(lat, lon).then(
            response => {
                setJobs(response.data);
                setFlag(true);
            }
        ).catch(
            err => alert(err)
        );
    }

    return (
        <div className='look-for-repairs'>
            <Banner />
            {flag ?
                jobs.map(job => {
                    return <Card sx={{ minWidth: 500 }} key={job.id}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Job {job.id}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Customer: {`${job.customer.firstName} ${job.customer.lastName}`}
                            </Typography>
                            <Typography variant="body1">
                                Category: {job.repairCategory}
                            </Typography>
                            <Typography variant="body2">
                                Distance: 2km
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" variant='outlined' onClick={toJobDetails(id, job)}>Detail</Button>
                        </CardActions>
                    </Card>
                })
                :
                <div className='input-field'>
                    <TextField id="lat" label="Latitude" variant="outlined" sx={{minWidth: 500}} onChange={onLatChange} />
                    <TextField id="lon" label="Longtitude" variant="outlined" sx={{minWidth: 500}} onChange={onLonChange}/>
                    <Button sx={{minWidth: 300}} variant="contained" onClick={submitLocation}>Submit</Button>
                </div>
            }
        </div>
    )
}
