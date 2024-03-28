import { Box, Typography, Button } from "@mui/material";
import Textfield from "@mui/material/TextField";
import Checkbox from "@mui/joy/Checkbox";

export default function SignUpSection() {
     return (
          <Box
               sx={{
                    width: "100%",
                    height: "800px",
                    backgroundColor: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
               }}
          >
               <Box
                    sx={{
                         display: "flex",
                         flexDirection: "column",
                         gap: "20px",
                    }}
               >
                    <Typography
                         sx={{
                              color: "#000000",
                              width: "400px",
                              display: "flex",
                              justifyContent: "center",
                              fontSize: "28px",
                         }}
                    >
                         Бүртгүүлэх
                    </Typography>
                    <Box
                         sx={{
                              display: "flex",
                              flexDirection: "column",
                              gap: "20px",
                         }}
                    >
                         <Box>
                              <Typography sx={{ color: "#000000" }}>
                                   Нэр
                              </Typography>
                              <Textfield
                                   type="text"
                                   placeholder="Нэрээ оруулна уу"
                                   sx={{
                                        backgroundColor: "#F7F7F8",
                                        borderWidth: "1px",
                                        borderColor: "#ECEDF0",
                                        width: "400px",
                                        borderRadius: "4px",
                                   }}
                              ></Textfield>
                         </Box>
                         <Box>
                              <Typography sx={{ color: "#000000" }}>
                                   И-мэйл
                              </Typography>
                              <Textfield
                                   type="text"
                                   placeholder="И-мэйл хаягаа оруулна уу"
                                   sx={{
                                        backgroundColor: "#F7F7F8",
                                        borderWidth: "1px",
                                        borderColor: "#ECEDF0",
                                        width: "400px",
                                        borderRadius: "4px",
                                   }}
                              ></Textfield>
                         </Box>
                         <Box>
                              <Typography sx={{ color: "#000000" }}>
                                   Хаяг
                              </Typography>
                              <Textfield
                                   type="text"
                                   placeholder="Та хаягаа оруулна уу"
                                   sx={{
                                        backgroundColor: "#F7F7F8",
                                        borderWidth: "1px",
                                        borderColor: "#ECEDF0",
                                        width: "400px",
                                        borderRadius: "4px",
                                   }}
                              ></Textfield>
                         </Box>
                         <Box>
                              <Typography sx={{ color: "#000000" }}>
                                   Нууц үг
                              </Typography>
                              <Textfield
                                   type="password"
                                   placeholder="Нууц үгээ оруулна уу"
                                   sx={{
                                        backgroundColor: "#F7F7F8",
                                        borderWidth: "1px",
                                        borderColor: "#ECEDF0",
                                        width: "400px",
                                        borderRadius: "4px",
                                   }}
                              ></Textfield>
                         </Box>
                         <Box>
                              <Typography sx={{ color: "#000000" }}>
                                   Нууц үг давтах
                              </Typography>
                              <Textfield
                                   type="password"
                                   placeholder="Нууц үгээ оруулна уу"
                                   sx={{
                                        backgroundColor: "#F7F7F8",
                                        borderWidth: "1px",
                                        borderColor: "#ECEDF0",
                                        width: "400px",
                                        borderRadius: "4px",
                                   }}
                              ></Textfield>
                         </Box>
                    </Box>
                    <Box
                         sx={{
                              display: "flex",
                              flexDirection: "column",
                              gap: "40px",
                         }}
                    >
                         <Box sx={{ display: "flex", gap: "10px" }}>
                              <Checkbox
                                   label="Үйлчилгээний нөхцөл зөвшөөрөх"
                                   sx={{}}
                              />
                         </Box>
                         <Button
                              sx={{
                                   width: "400px",
                                   backgroundColor: "#18BA51",
                                   height: "48px",
                                   color: "#FFFFFF",
                              }}
                         >
                              Бүртгүүлэх
                         </Button>
                    </Box>
               </Box>
          </Box>
     );
}
