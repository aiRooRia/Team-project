import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import { MenuItem as BaseMenuItem } from "@mui/base/MenuItem";


export const BootstrapDialog = styled(Dialog)(({ theme }) => ({
     "& .MuiDialogContent-root": {
       padding: theme.spacing(2),
     },
     "& .MuiDialogActions-root": {
       padding: theme.spacing(1),
     },
   }));
   export const grey = {
     50: "#F3F6F9",
     100: "#E5EAF2",
     200: "#DAE2ED",
     300: "#C7D0DD",
     400: "#B0B8C4",
     500: "#9DA8B7",
     600: "#6B7A90",
     700: "#434D5B",
     800: "#303740",
     900: "#1C2025",
   };
   export const MenuItem = styled(BaseMenuItem)(
     ({ theme }) => `
        list-style: none;
        padding: 8px;
        border-radius: 8px;
        user-select: none;
     
        &:last-of-type {
          border-bottom: none;
        }  
        &:focus {  
          background-color: ${
            theme.palette.mode === "dark" ? grey[800] : grey[100]
          };
          color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
        }
        &:active {
          cursor: "grabbing",
          transform: "scale(.80)",
        }   
        `
   );

   export const focusedInputBorderColor = {
     "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
       {
         borderColor: "green",
       },
   }

  export const ListboxCategory = styled("ul")(
     ({ theme }) => `
        padding: 0;
        min-width: 200px;   
        font-family: "Roboto"
        overflow: auto;
        outline: 0px;
        &:focus {
             border-color: "red";
           }
        typography: {
          fontFamily: 'Roboto',
       },
      
        z-index: 1;
        
        `
   );