import React, { useEffect, useState } from 'react';
import { collection, getDocs, updateDoc, doc, deleteDoc } from 'firebase/firestore';
import Cookies from 'universal-cookie';
import { Link, useNavigate } from 'react-router-dom';
import { db } from '../../firebase-config';

import { Navigate } from 'react-router-dom';
import DataTable from './Table';
import Nav from './Nav';
import ResponsiveAppBar from './DashNav';
const Dashboard = () => {
    const cookies = new Cookies();
    const cookieValue = cookies.get('auth');
    const [data, setData] = useState([]);
    const fetchData = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'profile_user'));
            const profileData = querySnapshot.docs.map((doc,index) => ({
                id: doc.id,
                serialNo: index + 1,
                ...doc.data(),
            }));
            setData(profileData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        if (cookieValue) {

            fetchData();
        }
    }, [cookieValue]);
    
    const handleDelete = async (id) => {
        try {
            // Delete the document from Firestore
            await deleteDoc(doc(db, 'profile_user', id));
            // Remove the deleted item from the state
            setData((prevState) => prevState.filter((item) => item.id !== id));
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };

    const handleResume = async (id) => {
        try {
            // Update the document's status to 'Live'
            await updateDoc(doc(db, 'profile_user', id), {
                status: 'Live',
                displayParam: true,
            });

            // Update the item's status and displayParam in the state
            setData((prevState) =>
                prevState.map((item) => {
                    if (item.id === id) {
                        item.status = 'Live';
                        item.displayParam = true;
                    }
                    return item;
                })
            );
            fetchData()
        } catch (error) {
            console.error('Error resuming item:', error);
        }
    };
    const handleSuspend = async (id) => {
        try {
            // Update the document's displayParam to false
            await updateDoc(doc(db, 'profile_user', id), {
                displayParam: false,
                status: 'Suspended', // Update the status to 'Suspended'
            });

            // Update the item's status in the state
            setData((prevState) =>
                prevState.map((item) => {
                    if (item.id === id) {
                        item.displayParam = false;
                        item.status = 'Suspended';
                    }
                    return item;
                })
            );
            fetchData()
        } catch (error) {
            console.error('Error suspending item:', error);
        }
    };

    const getStatusBadge = (status) => {
        if (status === 'Suspended') {
            return <span className="badge bg-danger text-white">Suspend</span>;
        }
        return <span className="badge bg-success text-white">Ongoing</span>;
    };
    return (
        <>
            {cookieValue ? (

                <>
                <ResponsiveAppBar/>
                   <DataTable
                        data={data}
                        handleDelete={handleDelete}
                        handleResume={handleResume}
                        handleSuspend={handleSuspend}
                        getStatusBadge={getStatusBadge}
                    />
                </>
            ) : (
                <Navigate to="/admin" />
            )}
        </>

    )
}

export default Dashboard