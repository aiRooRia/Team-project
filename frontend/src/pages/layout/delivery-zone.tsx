import { Box } from "@mui/material";
import Footer from "@/components/layout/footer";
export default function DeliveryZone() {
     return (
          <Box>
               <Box
                    sx={{
                         width: "800px",
                         height: "800px",
                         backgroundImage:
                              "url(https://s3-alpha-sig.figma.com/img/eef0/4a9f/fcc4a2bce9bd256b5eb53b5b527de457?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Lf7V7HsoNPBSw98ulFILowtRfrlheUAwKW4AIITqIiCmAp3qUBndH5akm~dZ6FSFYoxndQ5N-DBYsf1zZZYI7PrT5kJmgg4wgOAvj4nqHI95UPUCA88XJXbJgpORMTYgnSBOpFBy2Kh2wJOlAdCqQLX2-1X2pouyvCjuWz1352NC8WcvT7bITVBREozTcxGyPABEpL4i-VFzR7ZkQsJsltA1azhAGDNwwM4SvRJK5hYRgv0qBDnrB0YFAzpqNxhoE6rS6V7aRSelZbGGp4ynNatZ10yfzz3mkYxsMP33WNnwI8-Ze2XGZ5hF1q2V-t3b1wXKmvSrAXcq89TOrqclNQ__)",
                         backgroundSize: "cover",
                         backgroundRepeat: "no-repeat",
                    }}
               ></Box>
               <Footer/>
          </Box>
     );
}
