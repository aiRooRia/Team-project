import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import { Stack } from "@mui/material";
import { BasketFoodCard } from "./BasketFoodCard";
import { OrderContext } from "@/components/utils/context/orderContext";
import { useContext, useState, useEffect } from "react";
type Anchor = "right";
type TFoodArrayInfo = {
  foodId: string;
  quantity: number;
};
type TNewOrderInfo = {
  userId: string;
  foods: TFoodArrayInfo[];
  totalPrice: number;
};
type TBasketProps = {
  newOrderInfo: TNewOrderInfo;
  setNewOrderInfo: any;
};
// { newOrderInfo, setNewOrderInfo }: TBasketProps

export const Basket = () => {
  const { badgeContent, setBadgeContent, newOrderInfo, setNewOrderInfo } =
    useContext(OrderContext);
  const [state, setState] = useState({
    right: false,
  });
  console.log(badgeContent, "neworderinfo  basket");
  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setState({ ...state, [anchor]: open });
    };

  // useEffect(() => {
  //   console.log(newOrderInfo, "newOrderInfo updated in Basket");
  // }, [newOrderInfo]);

  const handleClickc = () => {
    console.log(newOrderInfo);
  };

  const list = (anchor: Anchor) => {
    console.log(anchor);
    return (
      <Box
        sx={{
          width: "60vh",
          display: "flex",
          height: "100vh",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
        role="presentation"
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "95%",
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
              borderBottom: "1px solid #D6D8DB",
              paddingBottom: "20px",
            }}
          >
            <Typography variant="h6" fontWeight={"bold"}>
              Таны сагс
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {" "}
            {newOrderInfo.foods?.map((el) => (
              <BasketFoodCard foodId={el.foodId} quantity={el.quantity} />
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
            marginTop: 2,
          }}
        >
          <Box sx={{ marginBottom: "40px" }}>
            <Typography>Нийт төлөх дүн</Typography>
            <Typography
              variant="body1"
              color={"green"}
              sx={{ fontWeight: "bold" }}
            >
              {new Intl.NumberFormat('en-US').format(newOrderInfo.totalPrice)}₮
            </Typography>
          </Box>
          <Button
            color="success"
            sx={{
              backgroundColor: "#18BA51",
              width: "45%",
              height: "50px",
              border: "1px solid",
              color: "white",
              "&:hover": {
                backgroundColor: "#18BA51",
                color: "white",
              },
            }}
            onClick={handleClickc}
          >
            Захиалах
          </Button>
        </Box>
      </Box>
    );
  };

  return (
    <Box sx={{ width: "70%" }}>
      {(["right"] as const).map((anchor) => (
        <Stack key={anchor}>
          <Stack
            onClick={toggleDrawer(anchor, true)}
            alignItems={"center"}
            direction={"row"}
            spacing={1}
          >
            <ShoppingBasketOutlinedIcon />
            <Typography sx={{ fontWeight: "bold" }}>Сагс</Typography>
          </Stack>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </Stack>
      ))}
    </Box>
  );
};
