import React, { useState, useEffect } from "react";
import Footer from "@/components/layout/footer";
import { Stack, Box, Typography, Divider, Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import { List, ListItem, ListItemText } from "@mui/material";

declare global {
     interface Window {
          google: any;
          initMap?: () => void;
     }
}

export default function Home() {
     const [googleMap, setGoogleMap] = useState<any>(null);
     const [pineconeMarker, setPineconeMarker] = useState<any>(null); 
     const apiKey = "AIzaSyCqaNzlb7sW2j3Bskt5KvxZqlc6boL6m34";

     useEffect(() => {
          const script = document.createElement("script");
          script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
          script.async = true;
          script.defer = true;
          window.initMap = () => {
               const map = new window.google.maps.Map(
                    document.getElementById("google-map-iframe"),
                    {
                         center: {
                              lat: 47.9123970797613,
                              lng: 106.90358506202938,
                         },
                         zoom: 14,
                    }
               );
               setGoogleMap(map);
          };
          document.head.appendChild(script);

          return () => {
               document.head.removeChild(script);
               window.initMap = undefined;
          };
     }, [apiKey]);

     const handleUlaanbaatarClick = () => {
          if (googleMap) {
               googleMap.setCenter({ lat: 47.9221, lng: 106.9155 });
               googleMap.setZoom(13);
               if (pineconeMarker) {
                    pineconeMarker.setMap(null);
                    setPineconeMarker(null);
               }
          }
     };

     const handlePineconeClick = () => {
          if (googleMap) {
               const pineconeCoords = {
                    lat: 47.9143267606655,
                    lng: 106.91666043786164,
               };
               googleMap.setCenter(pineconeCoords);
               googleMap.setZoom(20);
               if (pineconeMarker) {
                    pineconeMarker.setMap(null);
               }
               const marker = new window.google.maps.Marker({
                    position: pineconeCoords,
                    map: googleMap,
                    title: "Pinecone",
               });
               setPineconeMarker(marker);
          }
     };

     const zoneArr: string[] = [
          "Нархан хотхон",
          "26-р байр",
          "26-р байр",
          "45-р байр",
          "3-р байр",
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
                    <div
                         id="google-map-iframe"
                         style={{ width: "1200px", height: "616px" }}
                    ></div>
                    <Button onClick={handleUlaanbaatarClick}>
                         Ulaanbaatar
                    </Button>
                    <Button onClick={handlePineconeClick}>Pinecone</Button>
               </Box>
               <Box></Box>
               <Stack
                    height="59vh"
                    alignItems={"center"}
                    justifyContent={"start"}
               >
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
                                                  <Box
                                                       component={"div"}
                                                       sx={{
                                                            display: "flex",
                                                            flexDirection:
                                                                 "column",
                                                            width: "45%",
                                                            padding: "20px",
                                                            gap: "10px",
                                                       }}
                                                  >
                                                       {" "}
                                                       {zoneArr.map(
                                                            (
                                                                 el
                                                            ): JSX.Element => {
                                                                 return (
                                                                      <Typography
                                                                           sx={{
                                                                                cursor: "pointer",
                                                                                "&:hover":
                                                                                     {
                                                                                          backgroundColor:
                                                                                               "#18BA51",
                                                                                          borderRadius:
                                                                                               "5px",
                                                                                          paddingLeft:
                                                                                               "10px",
                                                                                     },
                                                                           }}
                                                                      >
                                                                           {el}
                                                                      </Typography>
                                                                 );
                                                            }
                                                       )}
                                                  </Box>
                                                  <Box
                                                       component={"div"}
                                                       sx={{
                                                            display: "flex",
                                                            flexDirection:
                                                                 "column",
                                                            width: "45%",
                                                            padding: "20px",
                                                            gap: "10px",
                                                       }}
                                                  >
                                                       {" "}
                                                       {zoneArr.map(
                                                            (
                                                                 el
                                                            ): JSX.Element => {
                                                                 return (
                                                                      <Typography
                                                                           sx={{
                                                                                cursor: "pointer",
                                                                                "&:hover":
                                                                                     {
                                                                                          backgroundColor:
                                                                                               "#18BA51",
                                                                                          borderRadius:
                                                                                               "5px",
                                                                                          paddingLeft:
                                                                                               "10px",
                                                                                     },
                                                                           }}
                                                                      >
                                                                           {el}
                                                                      </Typography>
                                                                 );
                                                            }
                                                       )}
                                                  </Box>
                                             </Stack>
                                        </CardContent>
                                   </CardActionArea>
                              </Card>
                              <Card sx={{ width: "49%" }}>
                                   <CardActionArea>
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
                                                  <Box
                                                       component={"div"}
                                                       sx={{
                                                            display: "flex",
                                                            flexDirection:
                                                                 "column",
                                                            width: "45%",
                                                            padding: "20px",
                                                            gap: "10px",
                                                       }}
                                                  >
                                                       {" "}
                                                       {zoneArr.map(
                                                            (
                                                                 el
                                                            ): JSX.Element => {
                                                                 return (
                                                                      <Typography
                                                                           sx={{
                                                                                cursor: "pointer",
                                                                                "&:hover":
                                                                                     {
                                                                                          backgroundColor:
                                                                                               "#18BA51",
                                                                                          borderRadius:
                                                                                               "5px",
                                                                                          paddingLeft:
                                                                                               "10px",
                                                                                     },
                                                                           }}
                                                                      >
                                                                           {el}
                                                                      </Typography>
                                                                 );
                                                            }
                                                       )}
                                                  </Box>
                                                  <Box
                                                       component={"div"}
                                                       sx={{
                                                            display: "flex",
                                                            flexDirection:
                                                                 "column",
                                                            width: "45%",
                                                            padding: "20px",
                                                            gap: "10px",
                                                       }}
                                                  >
                                                       {" "}
                                                       {zoneArr.map(
                                                            (
                                                                 el
                                                            ): JSX.Element => {
                                                                 return (
                                                                      <Typography
                                                                           sx={{
                                                                                cursor: "pointer",
                                                                                "&:hover":
                                                                                     {
                                                                                          backgroundColor:
                                                                                               "#18BA51",
                                                                                          borderRadius:
                                                                                               "5px",
                                                                                          paddingLeft:
                                                                                               "10px",
                                                                                     },
                                                                           }}
                                                                      >
                                                                           {el}
                                                                      </Typography>
                                                                 );
                                                            }
                                                       )}
                                                  </Box>
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
