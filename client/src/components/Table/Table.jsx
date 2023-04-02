import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
    TablePagination,
    Typography,
} from '@mui/material';
import numeral from 'numeral';

import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Tooltip from '@mui/material/Tooltip';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Alert from '@mui/material/Alert';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const TableData = ({ columns, datarows, titleTable, delid, category }) => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [rows, setRows] = useState(datarows);
    const [open, setOpen] = useState(false);

    const [showAlert, setShowAlert] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [idDelete, setIdDelete] = useState();

    const [stt, setStt] = useState(1);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleShowDeleteDialog = (row) => {
        setIdDelete(row);
        setOpen(true);
    };
    const handleDeleteItem = () => {
        setRows(rows.filter((r) => r.id !== idDelete.id));
        delid(idDelete.id);
        setOpen(false);
        setSuccessMessage('Xóa thành công');
        // setShowAlert(true);
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 2000); // tự động tắt sau 2 giây
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div style={{ width: '100%' }}>
            {showAlert && (
                <Alert
                    style={{
                        position: 'fixed',
                        top: '8px',
                        left: '320px',
                        width: '300px',
                        boxShadow: '0px 0px 5px 1px #888888',
                    }}
                    severity="success"
                    onClose={() => setShowAlert(false)}
                >
                    {successMessage}
                </Alert>
            )}
            <Typography variant="h5" gutterBottom>
                {titleTable}
                <Fab style={{ float: 'right' }} size="small" color="primary" aria-label="add">
                    <Link
                        to="/revenues/add"
                        style={{
                            textDecoration: 'none',
                            color: '#fff',
                            display: 'flex',
                            width: '100%',
                            height: '100%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Tooltip title="Thêm mới">
                            <AddIcon />
                        </Tooltip>
                    </Link>
                </Fab>
            </Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell style={{ fontSize: '20px' }} key={column.id}>
                                    {column.name}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {(rowsPerPage > 0
                            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            : rows
                        ).map((row, index) => (
                            <TableRow key={`${row.id}`}>
                                <TableCell style={{ fontSize: '15px' }}>{index + page * rowsPerPage + 1}</TableCell>
                                <TableCell style={{ fontSize: '15px' }}>{row.name}</TableCell>
                                <TableCell style={{ fontSize: '15px' }}>{row.adddate}</TableCell>
                                {category && <TableCell style={{ fontSize: '15px' }}>{row.idc}</TableCell>}
                                <TableCell style={{ fontSize: '15px' }}>{numeral(row.value).format('0,0')}</TableCell>
                                <TableCell maxWidth={100} style={{ fontSize: '15px' }}>
                                    {row.desc}
                                </TableCell>
                                <TableCell style={{ fontSize: '15px', minxWidth: '250px' }}>
                                    <Tooltip title="Edit">
                                        <Link
                                            style={{ textDecoration: 'none', color: '#fff' }}
                                            to={`/revenues/edit/${row.id}`}
                                        >
                                            <Button
                                                style={{ margin: '0 30px 0 0' }}
                                                variant="contained"
                                                color="primary"
                                                size="small"
                                                startIcon={<EditIcon />}
                                            >
                                                Edit
                                            </Button>
                                        </Link>
                                    </Tooltip>
                                    <Tooltip title="Delete">
                                        <Button
                                            variant="outlined"
                                            color="error"
                                            size="small"
                                            onClick={() => handleShowDeleteDialog(row)}
                                            startIcon={<DeleteIcon />}
                                        >
                                            Delete
                                        </Button>
                                    </Tooltip>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </TableContainer>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{'Bạn có chắc chắn muốn xóa không'}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Một khi xóa sẽ không xem lại thông tin này được nữa bạn có xóa không
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Hủy</Button>
                    <Button onClick={handleDeleteItem} autoFocus>
                        Xóa
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default TableData;
