import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
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
import Grid from '@mui/material/Grid';
import numeral from 'numeral';
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

const cates = [
    {
        idc: 1,
        name: 'Sinh hoạt',
    },
    {
        idc: 2,
        name: 'Ăn uống',
    },
    {
        idc: 3,
        name: 'Giải trí',
    },
    {
        idc: 4,
        name: 'Mua sắm',
    },
    {
        idc: 5,
        name: 'Du lịch',
    },
    {
        idc: 6,
        name: 'Giáo dục',
    },
    {
        idc: 7,
        name: 'Vật nuôi',
    },
    {
        idc: 8,
        name: 'Thể thao',
    },
    {
        idc: 9,
        name: 'Khác',
    },
];

const TableData = ({ columns, datarows, titleTable, delid, pageLink }) => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [rows, setRows] = useState(datarows);
    const [open, setOpen] = useState(false);

    const [showAlert, setShowAlert] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [idDelete, setIdDelete] = useState();
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
            {rows.length === 0 ? (
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <h3> Chưa tạo {titleTable}</h3>
                    </Grid>
                    <Grid item xs={12}>
                        <NavLink
                            to={`add`}
                            style={{
                                textDecoration: 'underline',
                                color: '#fff',
                                display: 'flex',
                                width: '100%',
                                height: '100%',
                                justifyContent: 'center',
                                alignItems: 'center',
                                fontWeight: '600',
                                color: '#1976d2',
                            }}
                        >
                            Bấm đây để tạo
                        </NavLink>
                    </Grid>
                </Grid>
            ) : (
                <>
                    <Typography variant="h5" gutterBottom>
                        Bảng {titleTable}
                        <Fab style={{ float: 'right' }} size="small" color="primary" aria-label="add">
                            <NavLink
                                to={`add`}
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
                            </NavLink>
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
                                        <TableCell style={{ fontSize: '15px' }}>
                                            {index + page * rowsPerPage + 1}
                                        </TableCell>
                                        <TableCell style={{ fontSize: '15px' }}>{row.name}</TableCell>
                                        <TableCell style={{ fontSize: '15px' }}>{row.adddate}</TableCell>
                                        {row.idc && (
                                            <TableCell style={{ fontSize: '15px' }}>
                                                {cates.find((cat) => cat.idc === row.idc)?.name}
                                            </TableCell>
                                        )}
                                        <TableCell style={{ fontSize: '15px' }}>
                                            {numeral(row.value).format('0,0')}
                                        </TableCell>
                                        <TableCell style={{ fontSize: '15px' }}>{row.desc}</TableCell>
                                        <TableCell style={{ fontSize: '15px', minxWidth: '250px' }}>
                                            <Tooltip title="Edit">
                                                <NavLink
                                                    style={{ textDecoration: 'none', color: '#fff' }}
                                                    to={`edit/${row.id}`}
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
                                                </NavLink>
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
                        <DialogTitle id="alert-dialog-title">{'Bạn có chắc chắn muốn xóa không?'}</DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                Một khi xóa sẽ thì dữ liệu trong database sẽ bị mất bạn vẫn muốn xóa?
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Hủy</Button>
                            <Button onClick={handleDeleteItem} autoFocus>
                                Xóa
                            </Button>
                        </DialogActions>
                    </Dialog>
                </>
            )}
        </div>
    );
};

export default TableData;
