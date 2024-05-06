import React from "react";
import { Container, VStack, Heading, Text, Button, Input, useToast } from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const handleTestSEO = () => {
    // This function would ideally call your backend API to perform an SEO test
    // For now, it just shows a toast message
    toast({
      title: "SEO Test Initiated",
      description: "This is where the SEO test results would be displayed.",
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
