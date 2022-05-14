import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material'
import "./TechnicianDashboard.css";


const TechnicianDashboard = () => {
    const navigate = useNavigate();

    const navLookForRepair = (e) => {
        //navigate('/');
    }

    const navRepairHistory = (e) => {
        //navigate('/');
    }

    const navUpdateDetails = (e) => {
        //navigate('/');
    }

    const navUpdatePayDetails = (e) => {
        //navigate('/');
    }

    return (
        <div id='container'>
            <Button variant="outlined" size='large' style={{ height: "20.25%"}} onClick={navLookForRepair}>Look for Repairs</Button><br />

            <Button variant="outlined" size="large" style={{ height: "20.25%"}} onClick={navRepairHistory}>Repair History</Button><br />

            <Button variant="outlined" size='large' style={{ height: "20.25%"}} onClick={navUpdateDetails}>Update My Details</Button><br />

            <Button variant="outlined" size='large' style={{ height: "20.25%"}} onClick={navUpdatePayDetails}>Update Payment Details</Button><br />
        </div>
    );
}

export default TechnicianDashboard;