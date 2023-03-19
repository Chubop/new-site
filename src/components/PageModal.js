import { Box, Button, Modal, Typography } from '@mui/material';

function PageModal({ children, open, handleClose, title }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box
        sx={{
            overflowY: 'scroll',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: {xs: '80%', sm: '70%'},
            height: '80vh',
            bgcolor: 'pink',
            boxShadow: 24,
            borderRadius: 4,
            p: 4,
        }}
      >
        <Typography id="modal-title" variant="h2" component="h2" sx={{ mb: 2 }}>
            {title}
        </Typography>
        <Box id="modal-description" sx={{ mb: 2 }}>
            {children}
        </Box>
        <Button variant="contained" onClick={handleClose}>
            Close
        </Button>
      </Box>
    </Modal>
  );
}

export default PageModal;
