import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

function FoodCard() {
     return (
          <Card
               sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "282px",
               }}
          >
               <CardMedia
                    component="img"
                    alt="Өглөөний хоол"
                    src="https://s3-alpha-sig.figma.com/img/669a/97ce/f4ad7e823b2a1cb020f7b7e74bce1ed7?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n0jNBYyczhGluK3Prb23MnjPmNH6wFkuP4sirYt7MqMa2IyCpzAUr7c5UrTKXXMyYu6rGrdKA3EaKq~KFak7AKT8kZwziYFilLfO05D8Ykh0hrG0Qn6c9W5h1od3y2cnrY1C49JZ1cOhGgyr8wGoExKjemN0gw6AEPKM1R-92spdUjQ6guO--D8j6ZoG5b3Erm5vTQG6DmIyEMP4MVQfnsg-2CQlLlXRuNtowTlFt6HuXxvKCCw8tMDicDlSCm-W7SwjIhsCys7qOCR3VZomatwh5NEe~Ypm6VhDh~3TJC8mHgLxFPNxVdMgvGzABI4NJy1Ew-PNwT2ey0shyaU~og__"
                    loading="lazy"
                    sx={{
                         width: "282px",
                         height: "186px",
                         borderRadius: "10px",
                    }}
               />
               <CardContent
                    sx={{
                         display: "flex",
                         flexDirection: "column",
                    }}
               >
                    <Typography variant="h6">Өглөөний хоол</Typography>
                    <Typography sx={{ color: "#18BA51" }}>4,800₮</Typography>
               </CardContent>
          </Card>
     );
}

export default FoodCard;
