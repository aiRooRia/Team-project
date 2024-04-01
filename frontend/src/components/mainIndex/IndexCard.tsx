import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Box } from "@mui/material";
import { Icon1, Icon2, Icon3, Icon4 } from "@/components/mainIndex/IndexIcons";
import { ReactNode } from "react";
interface IndexCardProps {
  id: number; // Use ReactNode type for icon prop
  p1: string;
  p2: string;
}
export const IndexCard: React.FC<IndexCardProps> = ({ id, p1, p2 }) => {
  //   console.log(icon);

  return (
    <Card sx={{ width: "22%", height: "100%", borderRadius: "15px" }}>
      <CardActionArea sx={{ height: "100%" }}>
        <CardContent sx={{ height: "100%" }}>
          <Box sx={{ padding: 1 }} height={"30%"}>
            {id === 1 && <Icon1></Icon1>}
            {id === 2 && <Icon2></Icon2>}
            {id === 3 && <Icon3></Icon3>}
            {id === 4 && <Icon4></Icon4>}
          </Box>
          <Box height={"50%"}>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              {p1}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {p2}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
