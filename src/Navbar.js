import React from "react";
import { Box, Button, Flex, Image, Link, Spacer } from '@chakra-ui/react';
import Facebook from "./assets/social-media-icons/facebook_32x32.png";
import Twitter from "./assets/social-media-icons/twitter_32x32.png";
import Email from "./assets/social-media-icons/email_32x32.png";


const NavBar = ({ accounts, setAccounts}) => {
    const isConnected = Boolean(accounts[0]);

    async function connectAccount() {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            setAccounts(accounts);
        }
    }
    
    return (
        <Flex justify="space-between" align="center" padding="40px">
            {/* Left side - social media icons */}
            <Flex justify="space-around" width="50%" padding="75px">
                <Link href="https://www.facebook.com/">
                    <Image src={Facebook} boxSize="45px" margin="0 16px" />
                </Link>
                <Link href="https://www.twitter.com/">
                    <Image src={Twitter} boxSize="45px" margin="0 16px" />
                </Link>
                <Link href="https://www.gmail.com/">
                    <Image src={Email} boxSize="45px" margin="0 16px" />
                </Link>
            
            </Flex>

            {/* Right side - sections and connect */}
            <Flex 
                justify="space-around"
                align="center"
                width="40%"
                padding="35px">

                <Box margin="5 40px">About</Box>
                <Spacer />
                <Box margin="5 40px">Mint</Box>
                <Spacer />
                <Box margin="5 40px">Team</Box>
                <Spacer />

                {/* connect */}
                {isConnected ? ( 
                <Box margin="0 25px">Connected</Box>
                ) : (
                <Button
                background="#D6517D"
                borderRadius="5px"
                boxShadow="0px 2px 2px 1px #0F0F0F"
                color="white"
                cursor="pointer"
                fontFamily="inherit"
                padding="15px"
                margin="15px" 
                onClick={connectAccount}>Connect</Button>
                )}
            </Flex>
        </Flex>
             

                

    )
}

export default NavBar;