import { Container, VStack, HStack, Box, Text, Avatar, IconButton } from "@chakra-ui/react";
import { FaRobot } from "react-icons/fa";

const ChatCard = ({ message, isBot }) => {
  return (
    <HStack spacing={4} align="start" w="100%">
      {isBot && <Avatar icon={<FaRobot />} />}
      <Box bg={isBot ? "gray.100" : "blue.100"} p={4} borderRadius="md" w="100%">
        <Text>{message}</Text>
      </Box>
      {!isBot && <Avatar name="User" />}
    </HStack>
  );
};

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} w="100%">
        <ChatCard message="Hello! How can I assist you today?" isBot={true} />
        <ChatCard message="I need help with my order." isBot={false} />
      </VStack>
    </Container>
  );
};

export default Index;
