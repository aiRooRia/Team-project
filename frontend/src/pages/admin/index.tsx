import { Box, Stack, Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddIcon from "@mui/icons-material/Add";
import * as React from "react";
import { useState } from "react";

export default function Home() {
  const [selected, setSelected] = useState("");
  return (
    <Stack
      width="100%"
      height="100vh"
      sx={{ flexDirection: "row", position: "relative" }}
    >
      <Stack
        width="30%"
        height="100%"
        sx={{ backgroundColor: "white", alignItems: "end" }}
      ></Stack>
      <Stack
        width="70%"
        height="100%"
        sx={{ backgroundColor: "#EEEFF2" }}
      ></Stack>

      <Stack
        width="100%"
        height="100vh"
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        <Stack
          maxWidth="lg"
          height="100vh"
          direction="row"
          sx={{ width: "1200px" }}
        >
          <Stack
            direction="column"
            spacing={2}
            width="30%"
            height="100vh"
            sx={{ overflow: "auto", backgroundColor: "white", pr: 2 }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Food menu
            </Typography>
            <Stack direction="column" spacing={2}>
              <Stack
                onClick={() => setSelected("Breakfast")}
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{
                  cursor: "default",
                  ":hover": {
                    cursor: "pointer",
                  },
                  ":active": {
                    cursor: "grabbing",
                    transform: "scale(0.97)",
                  },
                  border: 1,
                  borderColor: "lightgray",
                  borderRadius: 2,
                  padding: 1,
                  backgroundColor:
                    selected === "Breakfast" ? "#18BA51" : "white",
                  color: selected === "Breakfast" ? "white" : "black",
                }}
              >
                <Typography variant="subtitle1">Breakfast</Typography>
                <MoreVertIcon
                  sx={{ color: selected === "Breakfast" ? "white" : "black" }}
                ></MoreVertIcon>
              </Stack>
              <Stack
                onClick={() => setSelected("Soup")}
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{
                  cursor: "default",
                  ":hover": {
                    cursor: "pointer",
                  },
                  ":active": {
                    cursor: "grabbing",
                    transform: "scale(0.97)",
                  },
                  border: 1,
                  borderColor: "lightgray",
                  borderRadius: 2,
                  padding: 1,
                  backgroundColor: selected === "Soup" ? "#18BA51" : "white",
                  color: selected === "Soup" ? "white" : "black",
                }}
              >
                <Typography variant="subtitle1">Soup</Typography>
                <MoreVertIcon
                  sx={{ color: selected === "Soup" ? "white" : "black" }}
                ></MoreVertIcon>
              </Stack>
              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
                sx={{
                  cursor: "default",
                  ":hover": {
                    cursor: "pointer",
                  },
                  ":active": {
                    cursor: "grabbing",
                    transform: "scale(0.97)",
                  },
                  border: 1,
                  borderColor: "lightgray",
                  borderRadius: 2,
                  padding: 1,
                }}
              >
                {" "}
                <AddIcon style={{ color: "gray" }}></AddIcon>
                <Typography variant="subtitle1" style={{ color: "gray" }}>
                  Create new category
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          <Stack width="70%">
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{ ml: 3, mt: 4 }}
            >
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Breakfast
              </Typography>
              <Stack
                justifyContent="space-between"
                alignItems="center"
                sx={{
                  cursor: "pointer",
                  ":active": {
                    cursor: "grabbing",
                    transform: "scale(0.97)",
                  },
                  border: 1,
                  borderColor: "lightgray",
                  borderRadius: 2,
                  padding: 1,
                  backgroundColor: "#18BA51",
                  color: "white",
                }}
              >
                {" "}
                <Typography variant="subtitle1">Add new food</Typography>
              </Stack>
            </Stack>
            <Stack></Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
