import Footer from "@/components/layout/footer";
import { Stack, Box, Typography, Divider } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import { List, ListItem, ListItemText } from "@mui/material";
import DeliveryMap from "@/components/layout/footer/DeliveryMap";

export default function Home() {
     const list = [
          "Нархан хотхон",
          "26-р байр",
          "26-р байр",
          "45-р байр",
          "45-р байр",
          "Хоймор хотхон ",
          "Хоймор хотхон ",
     ];
     return (
          <>
               <Box
                    sx={{
                         display: "flex",
                         justifyContent: "center",
                         my: "40px",
                    }}
               >
                    <DeliveryMap />
               </Box>
               <Box></Box>
               <Stack
                    height="59vh"
                    alignItems={"center"}
                    justifyContent={"start"}
               >
                    {/* <Box
          sx={{
            width: "1200px",
            height: "100%",
          }}
        >
          <img style={{ width: "100%", height: "55%" }} src="/map.png" alt="" />
        </Box> */}
                    <Stack
                         width={"1200px"}
                         alignItems={"start"}
                         justifyContent={"start"}
                    >
                         <Stack
                              direction={"row"}
                              alignItems={"center"}
                              justifyContent={"center"}
                              spacing={1}
                         >
                              <svg
                                   width="22"
                                   height="22"
                                   viewBox="0 0 22 22"
                                   fill="none"
                                   xmlns="http://www.w3.org/2000/svg"
                              >
                                   <path
                                        d="M8.18645 2.60351C9.15292 -0.00834179 12.8471 -0.00833988 13.8136 2.60351L14.8427 5.38482C15.1466 6.20598 15.794 6.85341 16.6152 7.15727L19.3965 8.18645C22.0083 9.15292 22.0083 12.8471 19.3965 13.8136L16.6152 14.8427C15.794 15.1466 15.1466 15.794 14.8427 16.6152L13.8136 19.3965C12.8471 22.0083 9.15292 22.0083 8.18644 19.3965L7.15727 16.6152C6.85341 15.794 6.20598 15.1466 5.38482 14.8427L2.60351 13.8136C-0.00834179 12.8471 -0.00833988 9.15292 2.60351 8.18645L5.38482 7.15727C6.20598 6.85341 6.85341 6.20598 7.15727 5.38482L8.18645 2.60351Z"
                                        fill="#18BA51"
                                   />
                              </svg>
                              <Typography
                                   variant="h6"
                                   sx={{ fontWeight: "bold" }}
                              >
                                   Хүргэлтийн бүс дэх хаягууд
                              </Typography>
                         </Stack>
                         <Stack
                              width={"100%"}
                              direction={"row"}
                              justifyContent={"space-between"}
                         >
                              <Card sx={{ width: "49%" }}>
                                   <CardActionArea>
                                        {/* <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        /> */}
                                        <CardContent sx={{ margin: 3 }}>
                                             <Typography
                                                  gutterBottom
                                                  variant="h5"
                                                  component="div"
                                             >
                                                  А бүс
                                             </Typography>
                                             <Divider
                                                  sx={{ borderColor: "green" }}
                                             ></Divider>
                                             <Stack
                                                  direction={"row"}
                                                  justifyContent={
                                                       "space-between"
                                                  }
                                             >
                                                  <List sx={{ width: "45%" }}>
                                                       {list.map(
                                                            (el, index) => (
                                                                 <ListItem
                                                                      key={
                                                                           index
                                                                      }
                                                                      sx={{
                                                                           padding: 0,
                                                                      }}
                                                                 >
                                                                      <ListItemText
                                                                           primary={
                                                                                el
                                                                           }
                                                                      />
                                                                 </ListItem>
                                                            )
                                                       )}
                                                  </List>
                                                  <List sx={{ width: "45%" }}>
                                                       {list.map(
                                                            (el, index) => (
                                                                 <ListItem
                                                                      key={
                                                                           index
                                                                      }
                                                                      sx={{
                                                                           padding: 0,
                                                                      }}
                                                                 >
                                                                      <ListItemText
                                                                           primary={
                                                                                el
                                                                           }
                                                                      />
                                                                 </ListItem>
                                                            )
                                                       )}
                                                  </List>
                                             </Stack>
                                        </CardContent>
                                   </CardActionArea>
                              </Card>
                              <Card sx={{ width: "49%" }}>
                                   <CardActionArea>
                                        {/* <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        /> */}
                                        <CardContent sx={{ margin: 3 }}>
                                             <Typography
                                                  gutterBottom
                                                  variant="h5"
                                                  component="div"
                                             >
                                                  Б бүс
                                             </Typography>
                                             <Divider
                                                  sx={{ borderColor: "green" }}
                                             ></Divider>
                                             <Stack
                                                  direction={"row"}
                                                  justifyContent={
                                                       "space-between"
                                                  }
                                             >
                                                  <List sx={{ width: "45%" }}>
                                                       {list.map(
                                                            (el, index) => (
                                                                 <ListItem
                                                                      key={
                                                                           index
                                                                      }
                                                                      sx={{
                                                                           padding: 0,
                                                                      }}
                                                                 >
                                                                      <ListItemText
                                                                           primary={
                                                                                el
                                                                           }
                                                                      />
                                                                 </ListItem>
                                                            )
                                                       )}
                                                  </List>
                                                  <List sx={{ width: "45%" }}>
                                                       {list.map(
                                                            (el, index) => (
                                                                 <ListItem
                                                                      key={
                                                                           index
                                                                      }
                                                                      sx={{
                                                                           padding: 0,
                                                                      }}
                                                                 >
                                                                      <ListItemText
                                                                           primary={
                                                                                el
                                                                           }
                                                                      />
                                                                 </ListItem>
                                                            )
                                                       )}
                                                  </List>
                                             </Stack>
                                        </CardContent>
                                   </CardActionArea>
                              </Card>
                         </Stack>
                    </Stack>
               </Stack>
               <Footer />
          </>
     );
}
