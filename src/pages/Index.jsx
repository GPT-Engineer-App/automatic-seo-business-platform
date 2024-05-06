import React from "react";
import { Container, VStack, Heading, Text, Button, Input, useToast } from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const handleTestSEO = () => {
    console.log("SEO Test button clicked");

    toast({
      title: "SEO Test Started",
      description: "The SEO test is running. Results will be displayed here once the test is complete.",
      status: "info",
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">
          3broz SEO
        </Heading>
        <Text>Automate your SEO tasks efficiently and boost your rankings!</Text>
        <Input placeholder="Enter your business name for SEO test" size="md" />
        <Button leftIcon={<FaRocket />} colorScheme="teal" variant="solid" onClick={handleTestSEO}>
          Test SEO
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
