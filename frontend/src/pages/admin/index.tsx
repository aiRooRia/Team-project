import { Stack, Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { Dropdown } from "@mui/base/Dropdown";
import { Menu } from "@mui/base/Menu";
import { MenuButton as BaseMenuButton } from "@mui/base/MenuButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import * as React from "react";
import { styled } from "@mui/material/styles";
import { CreateFood } from "@/components/admin/CreateFood";
import { AdminFoodCard } from "@/components/foodMenu/foodCard/AdminFoodCard";
import Grid from "@mui/material/Grid";
import { CreateCategory } from "@/components/admin/CreateNewCategory";
import { AdminContext } from "@/components/utils/context/adminContext";
import { EditCategoryName } from "@/components/admin/EditCategoryName";
import { EmptyMenu } from "@/components/admin/MenuIsEmpty";
import { MenuItem, grey } from "@/components/utils/styles";
import { getAdminLayout } from "@/components/layout/AdminLayout";
import { useContext } from "react";
import { useEffect } from "react";
import { AdminDiscountFoodCard } from "@/components/foodMenu/foodCard/AdminDiscountFoodCart";

type TCategotyData = {
  name: string;
};
type TFoodItem = {
  name: string;
  price: number;
  image: string;
  category:string;
  discountRate: number;
};
const AdminHome = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [openCreateFood, setOpenCreateFood] = useState(false);
  const [openCreateCategory, setOpenCreateCategory] = useState(false);
  const [openEditCategoryName, setOpenEditCategoryName] = useState(false);
  const { newCategoryInfo, setNewCategoryInfo } = useContext(AdminContext);
  const [categoryTitle, setCategoryTitle] = useState("All food");
  const [allCategory, setAllCategory] = useState<TCategotyData[]>([]);
  const [allFood, setAllFood] = useState<TFoodItem[]>([]);
  const [filteredFood, setFilteredFood] = useState<TFoodItem[]>([]);
  let filterByCategoryFoods =[];

  const handleClickOpenCreateFood: () => void = () => {
    setOpenCreateFood(true);
  };
  const handleCloseCreateFood: () => void = () => {
    setOpenCreateFood(false);
  };
  const handleClickOpenCreateCategory: () => void = () => {
    setOpenCreateCategory(true);
  };
  const handleCloseCreateCategory: () => void = () => {
    setOpenCreateCategory(false);
  };
  const handleCloseEditCategoryName: () => void = () => {
    setOpenEditCategoryName(false);
  };
  const handleClickOpenEditCategoryName: () => void = () => {
    setOpenEditCategoryName(true);
  };
  const ENDPOINT_URL = process.env.NEXT_PUBLIC_ENDPOINT;
  const fetchCategoryData = async () => {
    try {
      const data = await fetch(`${ENDPOINT_URL}/category/all-categories`, {
        method: "GET",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
      }).then((data) => data.json());
      setAllCategory(data);

      console.log(allCategory, "allcategory deer");
    } catch (error) {
      console.log(error);
    }
  };
  const fetchFoodData = async () => {
    try {
      const data = await fetch(`${ENDPOINT_URL}/food/all-foods`, {
        method: "GET",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
      }).then((data) => data.json());

      console.log(data, "allFooddata ");
      setAllFood(data);
      setFilteredFood(data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(allCategory, "allcategory door");

  const handleDeleteCategory = async (menuItem: string) => {
    try {
      const data = await fetch(`${ENDPOINT_URL}/category`, {
        method: "DELETE",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: menuItem }),
      }).then((data) => data.json());
    } catch (err) {
      console.log(err);
    }
    return () => {
      console.log(`deleted ${menuItem}`);
    };
  };
  function capitalizeFirstLetter(inputText: string) {
    if (!inputText || typeof inputText !== "string") {
      return "";
    }
    return inputText.charAt(0).toUpperCase() + inputText.slice(1).toLowerCase();
  }
  const pushNewCategoryToAllCategory = (newCategory: string) => {
    setAllCategory((prevCategories: TCategotyData[]) => [
      ...prevCategories,
      { name: capitalizeFirstLetter(newCategory) },
    ]);
    setNewCategoryInfo("");
  };
  const handleCategory = (categoryName: string) => {
    setSelectedCategory(categoryName);
 setCategoryTitle(categoryName);
 const filteredFoods = allFood.filter((el) => el.category === categoryName);
 setFilteredFood(filteredFoods);
  };
  useEffect(() => {
    console.log(newCategoryInfo, "useeffect, newcategoryinfo");
    if (
      newCategoryInfo !== "" &&
      !allCategory.some(
        (category) => category.name === capitalizeFirstLetter(newCategoryInfo)
      )
    ) {
      pushNewCategoryToAllCategory(newCategoryInfo);
      console.log(allCategory, "useeffect allcategory");
    }

    console.log("useeffect ajillaa");
  }, [newCategoryInfo]);
  useEffect(() => {
    fetchCategoryData();
    fetchFoodData();
  }, []);
  useEffect(()=>{},[filteredFood])
  return (
    <Stack
      width="100%"
      minHeight="94vh"
      // maxHeight={"150vh"}
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
        minHeight="94vh"
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
          minHeight="94vh"
          direction="row"
          sx={{ width: "1200px" }}
        >
          <Stack
            direction="column"
            spacing={2}
            width="28%"
            minHeight="94vh"
            sx={{
              overflow: "auto",
              backgroundColor: "white",
              pr: 2,
              paddingTop: "10px",
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", marginTop: "10px" }}
            >
              Food menu
            </Typography>
            <Stack direction="column" spacing={2}>
              {allCategory?.map((el, i) => (
                <Stack
                  key={i}
                  onClick={() => handleCategory(el.name)}
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{
                    cursor: "default",
                    ":hover": {
                      cursor: "pointer",
                    },
                    ":active": {
                      transform: "scale(.99)",
                    },
                    border: 1,
                    borderColor: "lightgray",
                    borderRadius: 2,
                    paddingX: 1,
                    paddingY: 0.75,
                    backgroundColor:
                      selectedCategory === el.name ? "#18BA51" : "white",
                    color: selectedCategory === el.name ? "white" : "black",
                  }}
                >
                  <Typography variant="subtitle1">{el.name}</Typography>
                  <Dropdown>
                    <MenuButton
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        backgroundColor:
                          selectedCategory === el.name ? "#18BA51" : "white",
                        borderColor:
                          selectedCategory === el.name ? "#18BA51" : "white",
                        height: "22px",
                        ":active": {
                          cursor: "grabbing",
                        },
                      }}
                    >
                      <MoreVertIcon
                        sx={{
                          color:
                            selectedCategory === el.name ? "white" : "black",
                        }}
                      ></MoreVertIcon>
                    </MenuButton>
                    <Menu slots={{ listbox: Listbox }}>
                      <MenuItem
                        sx={{ display: "flex", gap: 1 }}
                        onClick={handleClickOpenEditCategoryName}
                      >
                        <EditIcon></EditIcon>
                        <Typography variant="body1">Edit name</Typography>
                      </MenuItem>
                      <EditCategoryName
                        handleClose={handleCloseEditCategoryName}
                        open={openEditCategoryName}
                      ></EditCategoryName>
                      <MenuItem
                        sx={{ display: "flex", gap: 1 }}
                        onClick={() => handleDeleteCategory(el.name)}
                      >
                        <DeleteOutlineIcon
                          style={{ color: "red" }}
                        ></DeleteOutlineIcon>
                        <Typography color="red" variant="body1">
                          Delete category
                        </Typography>
                      </MenuItem>
                    </Menu>
                  </Dropdown>
                </Stack>
              ))}

              <Stack
                onClick={handleClickOpenCreateCategory}
                direction="row"
                alignItems="center"
                spacing={1}
                sx={{
                  height: "40px",
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
                  paddingX: 1,
                }}
              >
                {" "}
                <AddIcon style={{ color: "gray" }}></AddIcon>
                <Typography variant="subtitle1" style={{ color: "gray" }}>
                  Create new category
                </Typography>
              </Stack>
              <CreateCategory
                handleClose={handleCloseCreateCategory}
                open={openCreateCategory}
                newCategoryInfo={newCategoryInfo}
                setNewCategoryInfo={setNewCategoryInfo}
                capitalizeFirstLetter={capitalizeFirstLetter}
              ></CreateCategory>
            </Stack>
          </Stack>
          <Stack width="72%">
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{ ml: 3, mt: 3, mb: "4px", height: "6vh" }}
            >
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {categoryTitle}
              </Typography>
              <Stack
                onClick={handleClickOpenCreateFood}
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
                  paddingX: 1,
                  paddingY: 0.75,
                  backgroundColor: "#18BA51",
                  color: "white",
                }}
              >
                <Typography variant="subtitle1">Add new food</Typography>
              </Stack>
              <CreateFood
                handleClose={handleCloseCreateFood}
                open={openCreateFood}
              ></CreateFood>
            </Stack>
            {/* <EmptyMenu></EmptyMenu> */}
            <Stack
              direction="row"
              alignItems="start"
              sx={{ pl: 3, pt: 4, minHeight: "80vh" }}
            >
              <Grid
                container
                rowSpacing={1}
                columnSpacing={1}
                overflow="auto"
                gridColumn={3}
                columnGap="35.5px"
                rowGap="20px"
              >
                {filteredFood.length > 0 ? filteredFood.map((el) =>
                ( 
                  el.discountRate === 0 || !el.discountRate ? (
                    <AdminFoodCard foodName={el.name} foodPrice={el.price} foodImage={el.image} />
                  ) : (
                    <AdminDiscountFoodCard foodName={el.name} foodPrice={el.price} foodImage={el.image} discountRate={el.discountRate} />
                  ))
                ) : <EmptyMenu></EmptyMenu>}
              </Grid>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

const Listbox = styled("ul")(
  ({ theme }) => `

  box-sizing: border-box;
  padding: 6px;
  margin: 12px 0;
  min-width: 200px;
  border-radius: 12px;
  overflow: auto;
  outline: 0px;
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  box-shadow: 0px 4px 6px ${
    theme.palette.mode === "dark" ? "rgba(0,0,0, 0.50)" : "rgba(0,0,0, 0.05)"
  };
  z-index: 1;
  `
);

const MenuButton = styled(BaseMenuButton)(
  ({ theme }) => `
  border-radius: 8px;
  color: white;
  cursor: pointer;
  border: 1px solid;
  &:active {
    cursor: "grabbing",
    transform: "scale(.80)",
  }
  &:hover {
    background-color: "red"
  }  `
);

AdminHome.getLayout = getAdminLayout;

export default AdminHome;
