import React, {useState, useEffect} from 'react';
import Chip from '@mui/material/Chip';
import { MDBIcon } from 'mdb-react-ui-kit';
import { useSelector } from 'react-redux';
import { Navigate } from "react-router-dom";
import { deleteUser } from './action/userAction';
import { listUsersMethod } from './slice/userSlice';
import { useDispatch } from 'react-redux';

const BatchWrapper = ({ open, batchSelectedCount, onClose, selectedUser }) => {
  const [nav, setNav] = useState(false);
  const [openBatch, setOpenBatch] = useState(false);
  const { userType, listUsers } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const onClickUpdate = () => {
    setNav(true);
  }

  useEffect(() => {
    setOpenBatch(open);
  }, [open]);

  useEffect(() => {
    setOpenBatch(openBatch);
  }, [openBatch]);

  const onDelete = () => {
    setNav(false);
    setOpenBatch(false);
    
    dispatch(deleteUser(selectedUser))
      .unwrap()
      .then(({ data }) => {
        const newUser = listUsers.filter(list => list.email !== selectedUser.email);
        dispatch(listUsersMethod(newUser));
      })
      .catch(err => {
        console.log(err);
      });
  }

  console.log(selectedUser, 'selectedUser');

  return (
    <div className={`batch-wrapper ${openBatch ? 'active' : ''}`}>
      {nav && (
          <Navigate to="/register-new-customer" replace={true} />
      )}
      <div className="batch-wrapper-div">
        <div className="wrapper-icons">
            <span className="actions-label">Actions:</span>
            <Chip icon={<MDBIcon fas icon="pen" color="white"/>} label="Update" variant="outlined" onClick={onClickUpdate} /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Chip icon={<MDBIcon fas icon="trash-alt" color="white" />} label="Delete" variant="outlined" onClick={onDelete} /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            { userType === 'admin' ? <><Chip icon={<MDBIcon fas icon="registered" size='29' color="white" />} label="Register" variant="outlined" />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</> : null }
        </div>
        <div className="text-right">
          <span className="items-selected">
            <span className="items">{batchSelectedCount}</span> items selected
          </span>
          <button
            onClick={onClose}
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
            data-automation-id="batch-wrapper-close-icon"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BatchWrapper;
