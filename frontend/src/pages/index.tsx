import Footer from "@/components/layout/footer";
import { DiscountFoodCard } from "@/components/foodMenu/foodCard/DiscountFoodCard";
import { MainFoodCard } from "@/components/foodMenu/foodCard/MainFoodCard";
import { Stack, Box, Divider } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Icon1, Icon2, Icon3, Icon4 } from "@/components/mainIndex/IndexIcons";
import { IndexCard } from "@/components/mainIndex/IndexCard";
import { Image1, Image2 } from "@/components/mainIndex/Images";
import { IndexAllMenu } from "@/components/mainIndex/IndexAllMenu";
import { getUserLayout } from "@/components/layout/UserLayout";

const Home = () => {
  const cardInfo = [
    {
      icon: Icon1,
      id: 1,
      p1: "Хүргэлтийн төлөв хянах",
      p2: "Захиалга бэлтгэлийн явцыг хянах",
    },
    {
      icon: Icon2,
      id: 2,
      p1: "Шуурхай хүргэлт",
      p2: "Захиалга бэлтгэлийн явцыг хянах",
    },
    {
      icon: Icon3,
      id: 3,
      p1: "Эрүүл, баталгаат орц",
      p2: "Захиалга бэлтгэлийн явцыг хянах",
    },
    {
      icon: Icon4,
      id: 4,
      p1: "Хоолны өргөн сонголт",
      p2: "Захиалга бэлтгэлийн явцыг хянах",
    },
  ];
  return (
    <>
      <Stack height="" alignItems={"center"}>
        <Stack
          sx={{
            width: "100%",
            backgroundColor: "#18BA51",
            backgroundImage: `url(https://i.ibb.co/HVcsPm2/background.png)`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "70vh",
          }}
          alignItems="center"
          justifyContent="center"
        >
          <Stack
            alignItems="center"
            justifyContent="space-between"
            direction={"row"}
            width={"1200px"}
          >
            <Stack alignItems="start" justifyContent="center" spacing={2}>
              <Typography color={"white"} variant="h3">
                Pinecone <br /> Food delivery
              </Typography>
              <Divider sx={{ borderColor: "white", width: "100% " }}></Divider>
              <Typography color={"white"} variant="h5">
                Horem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
            </Stack>
            <Stack sx={{ position: "relative", width: "100%", height: "59vh" }}>
              <Stack
                sx={{
                  position: "absolute",
                  top: "50%",
                  right: 0,
                  transform: "translate(0%, -50%)",
                }}
              >
                {/* <Image1 /> */}
                <img
                  style={{ width: "550px", height: "550px" }}
                  src="/tomports.png"
                  alt=""
                />
              </Stack>
              <Stack
                sx={{
                  position: "absolute",
                  top: "calc(50% + 50px)",
                  right: 0,
                  transform: "translate(0%, -50%)",
                }}
              >
                {/* <Image2 /> */}
                <img
                  style={{ width: "250px", height: "250px" }}
                  src="/goyhool.png"
                  alt=""
                />
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Stack width="1200px" height={"100%"}>
          <Stack
            height={"26vh"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              width={"100%"}
              height={"60%"}
            >
              <IndexCard
                id={cardInfo[0].id}
                p1={cardInfo[0].p1}
                p2={cardInfo[0].p2}
              ></IndexCard>
              <IndexCard
                id={cardInfo[1].id}
                p1={cardInfo[1].p1}
                p2={cardInfo[1].p2}
              ></IndexCard>
              <IndexCard
                id={cardInfo[2].id}
                p1={cardInfo[2].p1}
                p2={cardInfo[2].p2}
              ></IndexCard>
              <IndexCard
                id={cardInfo[3].id}
                p1={cardInfo[3].p1}
                p2={cardInfo[3].p2}
              ></IndexCard>
            </Stack>
          </Stack>
          <IndexAllMenu></IndexAllMenu>
          {/* <MainFoodCard></MainFoodCard>
          <DiscountFoodCard></DiscountFoodCard> */}
        </Stack>
      </Stack>
    </>
  );
};

Home.getLayout = getUserLayout;

export default Home;
