import { Stack, Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddIcon from "@mui/icons-material/Add";
import { useState, useContext, useEffect } from "react";
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
import { AdminDiscountFoodCard } from "@/components/foodMenu/foodCard/AdminDiscountFoodCart";
import { useRouter } from "next/router";

type TCategoryData = {
  _id: string;
  name: string;
};
type TNewCategoryInfo = {
  _id: string;
  name: string;
};
type TFoodItem = {
  name: string;
  price: number;
  image: string;
  category: string;
  discountRate: number;
  _id: string;
  ingredients: string;
};
const AdminHome = () => {
  const router = useRouter();
  const { push } = router;
  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role !== "admin") {
      push("/");
    }
  }, []);
  const [selectedCategoryy, setSelectedCategoryy] = useState("");
  const [openCreateFood, setOpenCreateFood] = useState(false);
  const [openCreateCategory, setOpenCreateCategory] = useState(false);
  const [openEditCategoryName, setOpenEditCategoryName] = useState(false);
  const {
    newCategoryInfo,
    setNewCategoryInfo,
    newFoodInfo,
    setNewFoodInfo,
    deletedFoodId,
    setDeletedFoodId,
    editedFoodInfo,
    setEditedFoodInfo,
    editedCategoryInfo,
    setEditedCategoryInfo,
  } = useContext(AdminContext);
  const [categoryTitle, setCategoryTitle] = useState("All food");
  const [allCategory, setAllCategory] = useState<TCategoryData[]>([]);
  const [allFood, setAllFood] = useState<TFoodItem[]>([]);
  const [filteredFood, setFilteredFood] = useState<TFoodItem[]>([]);

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
      setAllFood(data);
      setFilteredFood(data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleEditCategoryButton = async () => {
    try {
      const data = await fetch(`${ENDPOINT_URL}/category`, {
        method: "PUT",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedCategoryInfo),
      });
      if (data.ok) {
        setAllCategory(
          allCategory.map((el) =>
            el.name === editedCategoryInfo.name
              ? { ...el, ...editedCategoryInfo }
              : el
          )
        );
      } else {
        console.error("Failed to delete category");
      }
      handleCloseEditCategoryName();
    } catch (err) {
      console.log(err);
    }
  };
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
      if (data.ok) {
        setAllCategory((prevCategories) =>
          prevCategories.filter((category) => category.name !== menuItem)
        );
      } else {
        console.error("Failed to delete category");
      }
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

  const pushNewCategoryToAllCategory = (newCategory: TNewCategoryInfo) => {
    setAllCategory((prevCategories: TCategoryData[]) => [
      ...prevCategories,
      { _id: "", name: capitalizeFirstLetter(newCategory.name) },
    ]);
    setNewCategoryInfo({
      _id: "",
      name: "",
    });
  };
  const pushNewFoodToAllFood = (newFood: TFoodItem) => {
    setFilteredFood((prev: TFoodItem[]) => [
      ...prev,
      {
        _id: newFood?._id,
        name: newFood?.name,
        price: newFood.price,
        image: newFood.image,
        category: newFood.category,
        discountRate: newFood.discountRate,
        ingredients: newFood.ingredients,
      },
    ]);
  };
  const dropDeletedFoodFromAllFood = (id: string) => {
    setFilteredFood(filteredFood.filter((el) => el._id !== id));
  };
  const updateFoodFromAllFood = (editedFoodInfo: TFoodItem) => {
    setFilteredFood(
      filteredFood.map((el) =>
        el._id === editedFoodInfo._id ? { ...el, ...editedFoodInfo } : el
      )
    );
    setEditedFoodInfo({
      _id: "",
      name: "",
      image: "",
      ingredients: "",
      price: 0,
      discountRate: 0,
      category: "",
    });
  };
  const updateCategoryFromAllCategory = (editedCategoryInfo: TCategoryData) => {
    // setAllCategory(
    //   allCategory.map((el) =>
    //     el.name === editedCategoryInfo.name ? { ...el, ...editedCategoryInfo } : el
    //   )
    // );
    setAllCategory(
      allCategory.map((category) =>
        category._id === editedCategoryInfo._id
          ? { ...category, ...editedCategoryInfo }
          : category
      )
    );
  };

  const handleCategory = (categoryName: string) => {
    setSelectedCategoryy(categoryName);
    setCategoryTitle(categoryName);
    const filteredFoods = allFood.filter((el) => el.category === categoryName);
    setFilteredFood(filteredFoods);
  };
  useEffect(() => {
    if (deletedFoodId !== "") {
      dropDeletedFoodFromAllFood(deletedFoodId);
      setDeletedFoodId("");
    }
  }, [deletedFoodId]);
  useEffect(() => {
    if (deletedFoodId !== "") {
      dropDeletedFoodFromAllFood(deletedFoodId);
      setDeletedFoodId("");
    }
  }, [allCategory]);

  useEffect(() => {}, [allCategory]);
  useEffect(() => {
    if (editedCategoryInfo.name !== "") {
      updateCategoryFromAllCategory(editedCategoryInfo);
    }

    console.log(" useeffect ajillaaa");
  }, [editedCategoryInfo]);
  useEffect(() => {
    if (
      newCategoryInfo.name !== "" &&
      !allCategory.some(
        (category) =>
          category.name === capitalizeFirstLetter(newCategoryInfo.name)
      )
    ) {
      pushNewCategoryToAllCategory(newCategoryInfo);
    }
  }, [newCategoryInfo]);
  useEffect(() => {
    if (newFoodInfo.name !== "") {
      pushNewFoodToAllFood(newFoodInfo);
      setNewFoodInfo({
        _id: "",
        name: "",
        image: "",
        ingredients: "",
        price: 0,
        discountRate: 0,
        category: "",
      });
    }
  }, [newFoodInfo]);
  useEffect(() => {
    fetchCategoryData();
    fetchFoodData();
  }, []);
  useEffect(() => {}, [filteredFood]);
  return (
    <Stack
      width="100%"
      minHeight="94vh"
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
                      selectedCategoryy === el.name ? "#18BA51" : "white",
                    color: selectedCategoryy === el.name ? "white" : "black",
                  }}
                >
                  <Typography variant="subtitle1">{el.name}</Typography>
                  <Dropdown>
                    <MenuButton
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        backgroundColor:
                          selectedCategoryy === el.name ? "#18BA51" : "white",
                        borderColor:
                          selectedCategoryy === el.name ? "#18BA51" : "white",
                        height: "22px",
                        ":active": {
                          cursor: "grabbing",
                        },
                      }}
                    >
                      <MoreVertIcon
                        sx={{
                          color:
                            selectedCategoryy === el.name ? "white" : "black",
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
                        handleEditCategoryButton={handleEditCategoryButton}
                        open={openEditCategoryName}
                        _id={el._id}
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
                setNewFoodInfo={setNewFoodInfo}
                newFoodInfo={newFoodInfo}
              ></CreateFood>
            </Stack>
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
                {filteredFood.length > 0 ? (
                  filteredFood.map((el) =>
                    el.discountRate === 0 || !el.discountRate ? (
                      <AdminFoodCard
                        foodIngredients={el.ingredients}
                        foodCategory={el.category}
                        id={el._id}
                        foodName={el.name}
                        foodPrice={el.price}
                        foodImage={el.image}
                        discountRate={el.discountRate}
                      />
                    ) : (
                      <AdminDiscountFoodCard
                        foodIngredients={el.ingredients}
                        foodCategory={el.category}
                        id={el._id}
                        foodName={el.name}
                        foodPrice={el.price}
                        foodImage={el.image}
                        discountRate={el.discountRate}
                      />
                    )
                  )
                ) : (
                  <EmptyMenu></EmptyMenu>
                )}
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
