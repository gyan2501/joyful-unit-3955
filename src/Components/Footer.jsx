import { Box, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Flex
        lineHeight={"30px"}
        fontSize={"16px"}
        padding={"20px 0px"}
        bg={"#003380"}
        color={"white"}
        justifyContent={"space-evenly"}
        height={"420px"}
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}
        >
          <Heading as="h6" size="xs" onClick={() => navigate("/laptops")}>
            PRODUCT CATEGORIES
          </Heading>
          <p onClick={() => navigate("/smartphone")}>Smartphones</p>
          <p onClick={() => navigate("/laptops")}>Laptops</p>
          <p onClick={() => navigate("/laptops")}>DSLR Cameras</p>
          <p onClick={() => navigate("/topsellers")}>Televisions</p>
          <p onClick={() => navigate("/laptops")}>Air Conditioners</p>
          <p onClick={() => navigate("/laptops")}>Refrigerators</p>
          <p onClick={() => navigate("/laptops")}>Kitchen Appliances</p>
          <p onClick={() => navigate("/laptops")}>Accessories</p>
          <p onClick={() => navigate("/laptops")}>Personal Care & Grooming</p>
          <Heading as="h6" size="sm" marginTop={"15px"}>
            FOLLOW US
          </Heading>
          <div
            style={{
              display: "flex",
              width: "70px",
              justifyContent: "space-between",
              marginTop:"12px"
            }}
          >
            <i class="fa-brands fa-facebook-square"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-youtube"></i>
          </div>
          <br />
          <br />
        </Box>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            marginRight: "-100px",
          }}
        >
          <Heading as="h6" size="sm">
            SITE INFO
          </Heading>
          <p>About Reliance Digital</p>
          <p>resQ Services</p>
          <p>Site Map</p>
          <p>Gift Cards</p>
          <p>Corporate Enquires</p>
          <p>Contact Us</p>
          <br />
          <br />
          <br />
          <Heading as="h6" size="sm" mb={"10px"}>
            EXPERIENCE RELIANCE DIGITAL APP ON MOBILE
          </Heading>
          <Box style={{ display: "flex", width: "180px", gap: "1rem" }}>
            <img
              style={{
                backgroundColor: "#1f4985",
                cursor: "pointer",
                width: "120",
                height: "40px",
              }}
              src="https://www.reliancedigital.in/build/client/images/google_play_store.png"
              alt="no"
            />
            <img
              style={{
                backgroundColor: "#1f4985",
                cursor: "pointer",
                width: "120",
                height: "40px",
              }}
              src="https://www.reliancedigital.in/build/client/images/ios_app_store_icon.png"
              alt="no"
            />
          </Box>
          <br />
        </Box>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-between",
            lineHeight: "12px",
          }}
        >
          <Heading as="h6" size="sm">
            RESOURCE CENTRE
          </Heading>
          <p>Product Reviews</p>
          <p>Buying Guides</p>
          <p>How Tos</p>
          <p>Featured Stories</p>
          <p>Events & Happenings</p>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </Box>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}
        >
          <Heading as="h6" size="sm">
            POLICIES
          </Heading>
          <p>Terms of Use</p>
          <p>FAQs</p>
          <p>Cancellation and Return Policy</p>
          <p>Pricing and Payments Policy</p>
          <p>Privacy Policy</p>
          <p>E-waste Policy</p>
          <p>EMI and Additional Cashback T&C</p>
          <p>RelianceOne Loyalty Program T&C </p>
          <br />
          <br />
        </Box>
      </Flex>

      <Box textAlign={"center"} bg={"#0a244a"} color={"white"}>
        <Heading p={"8px"} textDecoration={"underline"} as="h6" size="sm">
          Disclaimer
        </Heading>
        <Text padding={"0px 100px 10px 100px"} fontSize={"14px"}>
          Product prices, offers and availability are subject to change from
          time to time. All prices are inclusive of taxes. Product colours &
          images are only for illustration and they may not exactly match with
          the actual product. Product specs are subject to change & may vary
          from actual product. While every care is taken to avoid inaccuracies
          in content, these are provided as is, without warranty of any kind.
        </Text>

        <Divider color={"grey"} />
        <Box height="50px" paddingTop={"8px"} color={"white"} fontSize={"14px"}>
          <p>© 2022 Reliance Digital. All Rights Reserved.</p>
        </Box>
      </Box>
    </div>
  );
};

export default Footer;

// import React from 'react'
// // import { Text, Grid, GridItem, Flex, Spacer } from '@chakra-ui/react'
// import { useNavigate } from 'react-router-dom'
// const Footer = () => {
//   const navigate=useNavigate();
//   return (
//     <div>
//     <div style={{backgroundColor:"#1f4985",color:"white",height:"420px"}}>
// <br/>
// <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",width:"90%",margin:"auto"}}>
// <div style={{display:"flex", flexDirection:"column",alignItems:"flex-start",justifyContent:"space-between" }}>
// <button  onClick={()=>navigate("/laptops")}>PRODUCT CATEGORIES</button>
// <button onClick={()=>navigate("/smartphone")}>Smartphones</button>
// <button onClick={()=>navigate("/laptops")}>Laptops</button>
// <button onClick={()=>navigate("/laptops")}>DSLR Cameras</button>
// <button onClick={()=>navigate("/topsellers")}>Televisions</button>
// <button onClick={()=>navigate("/laptops")}>Air Conditioners</button>
// <button onClick={()=>navigate("/laptops")}>Refrigerators</button>
// <button onClick={()=>navigate("/laptops")}>Kitchen Appliances</button>
// <button onClick={()=>navigate("/laptops")}>Accessories</button>
// <button onClick={()=>navigate("/laptops")}>Personal Care & Grooming</button>
// <h2>FOLLOW US</h2>
// <div style={{display:"flex",width:"70px",justifyContent:"space-between"}}>
// <i class="fa-brands fa-facebook-square"></i>
// <i class="fa-brands fa-twitter"></i>
// <i class="fa-brands fa-youtube"></i>
// </div>
// <br/><br/>
// </div>
// <div style={{display:"flex", flexDirection:"column",alignItems:"flex-start",justifyContent:"space-between" }}>
// <p>SITE INFO</p>
// <p>About Reliance Digital</p>
// <p>resQ Services</p>
// <p>Site Map</p>
// <p>Gift Cards</p>
// <p>Corporate Enquires</p>
// <p>Contact Us</p>
// <br/><br/><br/>
// <h3>EXPERIENCE RELIANCE DIGITAL APP ON MOBILE</h3>
// <div style={{display:"flex",width:"120px",gap:"1rem",borderRadius:"10px"}}>
//     <img style={{backgroundColor:"#1f4985",cursor:"pointer"}} src='https://www.reliancedigital.in/build/client/images/google_play_store.png' alt='no' />
//     <img style={{backgroundColor:"#1f4985",cursor:"pointer"}} src="https://www.reliancedigital.in/build/client/images/ios_app_store_icon.png" alt="no"/>
// </div>
// <br/>
// </div>
// <div style={{display:"flex", flexDirection:"column",alignItems:"flex-start",justifyContent:"space-between" }}>
// <p>RESOURCE CENTRE</p>
// <p>Product Reviews</p>
// <p>Buying Guides</p>
// <p>How Tos</p>
// <p>Featured Stories</p>
// <p>Events & Happenings</p>
// <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
// </div>
// <div style={{display:"flex", flexDirection:"column",alignItems:"flex-start",justifyContent:"space-between" }}>
// <p>POLICIES</p>
// <p>Terms of Use</p>
// <p>FAQs</p>
// <p>Cancellation and Return Policy</p>
// <p>Pricing and Payments Policy</p>
// <p>Privacy Policy</p>
// <p>E-waste Policy</p>
// <p>EMI and Additional Cashback T&C</p>
// <p>RelianceOne Loyalty Program T&C </p>
// <br/><br/><br/><br/><br/><br/>
// </div>
// </div>
// </div>

//         <div style={{textAlign:"center", backgroundColor:"#0b254a",color:"white"}}>
//             <br/>
//             <h4>Disclaimer</h4>
//             <p>Product prices, offers and availability are subject to change from time to time. All prices are inclusive of taxes. Product colours & images are only for illustration and they may not exactly match with the actual product. Product specs are subject to change & may vary from actual product. While every care is taken to avoid inaccuracies in content, these are provided as is, without warranty of any kind.</p>
//             <br/>
//             <hr/>
//             <div style={{height:"50px",paddingTop:"1%"}}><p>© 2022 Reliance Digital. All Rights Reserved.</p></div>
//              </div>
//     </div>
//   )
// }

// export default Footer
