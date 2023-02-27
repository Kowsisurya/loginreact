import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Box,
    IconButton,
    Typography,
  } from '@material-ui/core';
  
  const ConfirmDialog = (props) => {
    return (
      <Dialog open={true} maxWidth="sm" fullWidth>
        <DialogTitle></DialogTitle>
        <Box position="absolute" top={0} right={0}>
          
        </Box>
        <DialogContent>
          <Typography>Are you sure you want to delete?</Typography>
        </DialogContent>
        <DialogActions>
          <Button color="primary" variant="contained" onClick={props.confirmClose}>
            Cancel
          </Button>
          <Button color="secondary" variant="contained" onClick={props.confirmDelete}>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    );
  };
  
  export default ConfirmDialog;