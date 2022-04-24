import { useState } from "react";
import { ethers, BigNumber } from "ethers";
import { Box, Button, Flex, Input, Text } from '@chakra-ui/react';
import GrimNFT from './GrimNFT.json';

const grimNFTAddress = "0x881478B521B34B4E8510caDD3e0fa43A5dC82053";

const MainMint = ({ accounts, setAccounts }) => {
    const [mintAmount, setMintAmount] = useState(1);
    const isConnected = Boolean(accounts[0]);

    async function handleMint() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                grimNFTAddress,
                GrimNFT.abi,
                signer
            );
            try {
                const response = await contract.mint(BigNumber.from(mintAmount), {
                    value: ethers.utils.parseEther((0.01 * mintAmount).toString())
                });
                console.log('response: ', response);
            } catch (err) {
                console.log("error: ", err)
            }
        }
    }

    const handleDecrement = () => {
        if (mintAmount <= 1) return;
        setMintAmount(mintAmount - 1);
    };

    const handleIncrement = () => {
        if (mintAmount >= 3) return;
        setMintAmount(mintAmount + 1);
    };


    return (
        <Flex justify="center" align="center" height="100hv" paddingBottom="150px">
            <Box width="520px">
            <div>
            <Text fontSize="48px" textShadow="0 5px #000000">Grim</Text>
            <Text 
            fontSize="32px" 
            letterSpacing="-5.5%" 
            fontFamily="VT323" 
            textShadow="0 2px 2px #000000">
                It's 2055. Can be Grim NFT csave the humans? Mint the Grim NFT ton find out.</Text>
            </div>
            
            {isConnected ? (
                <div>
                    <Flex align="center" justify="center">
                            <Button 
                            background="#D6517D"
                            borderRadius="5px"
                            boxShadow="0px 2px 2px 1px #0F0F0F"
                            color="white"
                            cursor="pointer"
                            fontFamily="inherit"
                            padding="15px"
                            margin="10px" 
                            onClick={handleDecrement}>-</Button>
                            <Input 
                            readOnly
                            fontFamily="inherit"
                            width="100px"
                            height="40px"
                            textAlign="center"
                            paddingLeft="19px"
                            marginTop="10px"
                            type="number" 
                            value={mintAmount} />
                            <Button 
                            background="#D6517D"
                            borderRadius="5px"
                            boxShadow="0px 2px 2px 1px #0F0F0F"
                            color="white"
                            cursor="pointer"
                            fontFamily="inherit"
                            padding="15px"
                            margin="10px"
                            onClick={handleIncrement}>+</Button>
                        </Flex>
                        <Button 
                        background="#D6517D"
                        borderRadius="5px"
                        boxShadow="0px 2px 2px 1px #0F0F0F"
                        color="white"
                        cursor="pointer"
                        fontFamily="inherit"
                        padding="15px"
                        margin="10px"
                        onClick={handleMint}>Mint Now</Button>
                </div>
                
            ) : (
                <Text  
                marginTop="70px"
                fontSize="30px"
                letterSpacing="-5.5%" 
                fontFamily="VT323"
                color="#D6517D" 
                textShadow="0 2px 2px #000000">You must be connected to Mint.</Text>
            )}
            </Box>
        </Flex>
    );
};

export default MainMint;