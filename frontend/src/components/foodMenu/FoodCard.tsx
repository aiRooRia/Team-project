import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Stack,
} from "@mui/material";
import { Box } from "@mui/system";
import { EditFood } from "../admin/EditFood";
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));


export const AdminFoodCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [openEditFood, setOpenEditFood] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setTimeout(() => {
      setIsVisible(true);
    }, 2);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsVisible(false);
  };
  const handleCloseEditFood: () => void = () => {
    setOpenEditFood(false);
  };
  const handleClickOpenEditFood = () => {
    setOpenEditFood(true);
  };
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "255px",
        backgroundColor: "transparent",
        height: "230px",
        boxShadow: 0,
      }}
    >
      <Box
        sx={{
          position: "relative",
          backgroundColor: "black",
          borderRadius: "10px",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <CardMedia
          component="img"
          alt="Өглөөний хоол"
          src="https://i.ibb.co/M5kGkcy/unsplash-fdl-ZBWIP0a-M.png"
          loading="lazy"
          sx={{
            width: "100%",
            height: "150px",
            borderRadius: "10px",
            backgroundColor: isHovered ? "black" : "transparent",
            opacity: isHovered ? 0.5 : 1,
            transition: "background-color 0.3s, opacity 0.3s",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.25)",
          }}
        />
        {isVisible && (
          <>
            <Box
              onClick={handleClickOpenEditFood}
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "50%",
                height: "30px",
                borderRadius: "20px",
                transition: "background-color 0.5s, opacity 0.3s",

                opacity: "80%",
                border: "none",
                cursor: "pointer",
                zIndex: 1,
                color: "black",
                backgroundColor: "white",
                ":hover": {
                  cursor: "pointer",
                },
                ":active": {
                  cursor: "grabbing",
                  scale: ".99",
                },
              }}
            >
              <Typography
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Edit
              </Typography>
            </Box>
            <EditFood
              handleClose={handleCloseEditFood}
              open={openEditFood}
            ></EditFood>
          </>
        )}
      </Box>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: null,
        }}
      >
        <Typography variant="h6">Өглөөний хоол</Typography>
        <Typography sx={{ color: "#18BA51" }}>4,800₮</Typography>
      </CardContent>
    </Card>
  );
};
export const MainFoodCard = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const foodInfo = [
    
  ]
  return (
    <>
    <Card
    onClick={handleClickOpen}
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "255px",
        backgroundColor: "transparent",
        height: "230px",
        boxShadow: 0,
        ":hover": {
          cursor: "pointer",
          scale: "101%",
        },
        ":active": {
          scale: "99%",
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          backgroundColor: "black",
          borderRadius: "10px",
        }}
      >
        <CardMedia
          component="img"
          alt="Өглөөний хоол"
          src="https://s3-alpha-sig.figma.com/img/27cb/2c3b/60df84dc4dd7d808ba224aff01eeb6d8?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f87uEFXfE8E3RtXjlMsxOJoXkiBCyZQQTsBU9sP8SI6F-IPn97T8kmSpbQ5KF9HwpEGRklY8drlNBB2inBJ-HtADnsk17DG7yHlCCGgQr~JWz25IJCUDWalZsP9dAMoFrifB~z6jdLai1jNgkmmKDTcmTgl~OCoUY9ZyIl5DzzCA3-hSMzeCSc6gJz~A~OtD1JG3jgboHm4fHkVlKrYzV1fi0GMiFHlgT7ji2VO4OKDhjaJQGVDZ6gSe7KG4ow4TjmahHNgbCpY9yB6xFgOZF2Yb00IR5GEZRLPyrh3eInoXxZXuijEOoEHmvr~ysBkcrw5oFxPD~xx~fMIssdB-Pw__"
          loading="lazy"
          sx={{
            width: "100%",
            height: "150px",
            borderRadius: "10px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.25)",
          }}
        />
      </Box>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: null,
        }}
      >
        <Typography variant="h6">Өглөөний хоол</Typography>
        <Typography sx={{ color: "#18BA51" }}>4,800₮</Typography>
      </CardContent>
    </Card>
    <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Modal title
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </Typography>
          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
            magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
            ullamcorper nulla non metus auctor fringilla.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </>
  );
};
export const DiscountFoodCard = () => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "255px",
        backgroundColor: "transparent",
        height: "230px",
        boxShadow: 0,
        ":hover": {
          cursor: "pointer",
          scale: "101%",
        },
        ":active": {
          scale: "99%",
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          backgroundColor: "black",
          borderRadius: "10px",
        }}
      >
        <CardMedia
          component="img"
          alt="Өглөөний хоол"
          src="https://i.ibb.co/M5kGkcy/unsplash-fdl-ZBWIP0a-M.png"
          loading="lazy"
          sx={{
            width: "100%",
            height: "150px",
            borderRadius: "10px",
            transition: "background-color 0.3s, opacity 0.3s",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.25)",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "10px",
            right: "10px",
            width: "20%",
            height: "30px",
            borderRadius: "20px",
            borderStyle: "solid",
            // transition: "background-color 0.5s, opacity 0.3s",
            borderWidth: "1px",
            borderColor: "white",
            cursor: "pointer",
            zIndex: 1,
            color: "white",
            backgroundColor: "#18BA51 ",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            20%
          </Typography>
        </Box>
      </Box>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: null,
        }}
      >
        <Typography variant="h6">Өглөөний хоол</Typography>
        <Stack direction={"row"} alignItems={"center"} spacing={2}>
          <Typography sx={{ color: "#18BA51" }}>4,800₮</Typography>
          <Typography
            variant="body2"
            sx={{ color: "#272727", textDecoration: "line-through" }}
          >
            5,800₮
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};
