import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

export default function DataTable({ data, handleSuspend, handleResume, handleDelete, handleEdit }) {
    const columns = [
        { field: 'serialNo', headerName: 'S.No', width: 70 },

        {
            field: 'image',
            headerName: 'Profile Image',
            width: 120,
            renderCell: (params) => (
                <Avatar alt="Profile Image" src={params.row.image} />
            ),
        },
        { field: 'username', headerName: 'Username', width: 150 },
        { field: 'category', headerName: 'Category', width: 150 },
        { field: 'chatPrices', headerName: 'Chat Prices', width: 120 },
        { field: 'callPrices', headerName: 'Call Prices', width: 120 },
        { field: 'videoCallPrices', headerName: 'VideoCall Prices', width: 120 },
        { field: 'languages', headerName: 'Languages', width: 200 },
        {
            field: 'displayParam',
            headerName: 'Status',
            width: 120,
            renderCell: (params) => (
                <>
                    {params.row.displayParam ? (
                        <span className="badge bg-success text-white">Ongoing</span>
                    ) : (
                        <span className="badge bg-danger text-white">Suspended</span>
                    )}
                </>
            ),
        },
        {
            field: 'operations',
            headerName: 'Actions',
            width: 200,
            renderCell: (params) => (
                <>
                    {params.row.displayParam ? (
                        <Button  variant="contained" color="error"
                        size='small'
                            style={{ marginRight: '10px' }}
                            onClick={() => handleSuspend(params.row.id)}
                        >
                            Block
                        </Button>
                    ) : (
                        <Button  variant="contained" color="success"
                        size='small'
                            style={{ marginRight: '8px' }}
                            onClick={() => handleResume(params.row.id)}
                        >
                            Resume
                        </Button>
                    )}
                    <Link to={`/update/${params.row.id}`}><button style={{ marginRight: '8px' }} >Edit</button></Link>
                    <button style={{ marginRight: '8px' }} onClick={() => handleDelete(params.row.id)}>Delete</button>

                </>
            ),
        },

    ];



    return (
        <div style={{ height: '610px', width: '100%', textAlign: 'center' }}>
            <DataGrid rows={data} columns={columns} pageSize={5} checkboxSelection />
        </div>
    );
}
