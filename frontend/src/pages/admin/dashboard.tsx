import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Divider, Typography } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import { Search } from "@mui/icons-material";
import { getAdminLayout } from "@/components/layout/AdminLayout";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];
const AdminDashboard = () => {
  return (
    <Stack
      alignItems="center"
      sx={{
        height: "94vh",
        backgroundColor: "#EEEFF2",
      }}
    >
      <Stack
        alignItems="center"
        justifyContent="space-between"
        height="100%"
        sx={{ width: "1024px", marginTop: "50px", marginBottom: "50px" }}
      >
        <Stack bgcolor="white" sx={{ borderRadius: "10px", width: "100%" }}>
          <TableContainer component={Paper} sx={{ borderRadius: "10px" }}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              margin={2}
            >
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Admin dashboard
              </Typography>
              <FormControl sx={{ width: "35%" }} variant="outlined">
                <OutlinedInput
                  sx={{ height: "40px", padding: 1 }}
                  placeholder="Search"
                  startAdornment={
                    <InputAdornment position="start">
                      <Search></Search>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Stack>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead sx={{ backgroundColor: "#EEEFF2" }}>
                <TableRow>
                  <TableCell>Dessert (100g serving)</TableCell>
                  <TableCell align="right">Calories</TableCell>
                  <TableCell align="right">Fat&nbsp;(g)</TableCell>
                  <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                  <TableCell align="right">Protein&nbsp;(g)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Stack>
        <Stack width="100%" alignItems="center">
          <Divider
            sx={{ marginTop: 3, marginBottom: 3, width: "100%" }}
          ></Divider>
          <Pagination count={10} shape="rounded" />
        </Stack>
      </Stack>
    </Stack>
  );
}


AdminDashboard.getLayout = getAdminLayout;

export default AdminDashboard;