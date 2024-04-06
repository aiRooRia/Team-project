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
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { BootstrapDialog } from "@/components/utils/styles";

export const DiscountFoodCard = () => {
  const [open, setOpen] = React.useState(false);
  const [quantity, setQuantity] = useState(0);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const foodInfo = [
    {
      imgUrl: "/goyhool2.png",
      foodName: "Өглөөний хоол",
      foodPrice: "4800",
      foodIngredients: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр ",
      quantity: "",
      discount: 20,
    },
  ];
  let discountedPrice =
    ((100 - foodInfo[0].discount) / 100) * parseFloat(foodInfo[0].foodPrice);
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
            src={foodInfo[0].imgUrl}
            // loading="lazy"
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
              {foodInfo[0].discount}%
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
          <Typography variant="h6">{foodInfo[0].foodName}</Typography>
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <Typography sx={{ color: "#18BA51" }}>
              {discountedPrice}₮
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#272727", textDecoration: "line-through" }}
            >
              {foodInfo[0].foodPrice}₮
            </Typography>
          </Stack>
        </CardContent>
      </Card>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent
          dividers
          sx={{
            display: "flex",
            direction: "row",
            height: "100%",
            alignItems: "center",
          }}
        >
          <Stack
            justifyContent={"center"}
            alignItems={"center"}
            width="70%"
            height="100%"
          >
            <Box
              component={"img"}
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: "10px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.25)",
              }}
              src={foodInfo[0].imgUrl}
              alt=""
            ></Box>
          </Stack>
          <Stack sx={{ m: 0, p: 2 }} spacing={2}>
            <Stack sx={{ m: 0, p: 1 }} spacing={2}>
              <Stack>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold" }}
                  id="customized-dialog-title"
                >
                  {foodInfo[0].foodName}
                </Typography>
                <Typography color={"#18BA51"} gutterBottom>
                  {foodInfo[0].foodPrice}₮
                </Typography>
              </Stack>

              <Stack>
                <Typography sx={{ fontWeight: "bold" }} variant="body1">
                  Орц
                </Typography>
                <Box
                  sx={{
                    backgroundColor: "#F6F6F6",
                    color: "#767676",
                    padding: 1,
                    borderRadius: "8px",
                  }}
                >
                  <Typography variant="body2">
                    {foodInfo[0].foodIngredients}
                  </Typography>
                </Box>
              </Stack>
              <Stack>
                <Typography sx={{ fontWeight: "bold" }} variant="body1">
                  Тоо
                </Typography>
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Stack
                    alignItems={"center"}
                    justifyContent={"center"}
                    onClick={() =>
                      quantity !== 0
                        ? setQuantity(quantity - 1)
                        : setQuantity(0)
                    }
                    sx={{
                      backgroundColor: "#18BA51",
                      color: "white",
                      width: "35px",
                      height: "35px",
                      borderRadius: "10px",
                      ":active": {
                        scale: "97%",
                      },
                    }}
                  >
                    <RemoveIcon fontSize="small"></RemoveIcon>
                  </Stack>
                  <Typography>{quantity}</Typography>
                  <Stack
                    alignItems={"center"}
                    justifyContent={"center"}
                    onClick={() => setQuantity(quantity + 1)}
                    sx={{
                      backgroundColor: "#18BA51",
                      color: "white",
                      width: "35px",
                      height: "35px",
                      borderRadius: "10px",
                      ":active": {
                        scale: "97%",
                      },
                    }}
                  >
                    <AddIcon fontSize="small"></AddIcon>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
            <DialogActions
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                disabled={quantity == 0}
                sx={{
                  width: "100%",
                  backgroundColor: "#18BA51",
                  color: "white",
                  textTransform: "capitalize",
                  // padding: 0!,
                }}
                onClick={handleClose}
              >
                Сагслах
              </Button>
            </DialogActions>
          </Stack>
        </DialogContent>
      </BootstrapDialog>
    </>
  );
};
