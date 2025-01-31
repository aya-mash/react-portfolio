import React from "react";
import { Avatar, Heading, Text, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A Frontend Developer";
const bio2 = "Specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack justify="center" align="center" height="full" spacing="6">
      <Avatar
        src="https://i.pravatar.cc/150?img=7"
        shape="rounded"
        size="lg"
      />
      <Heading as="h1">{greeting}</Heading>
      <Text fontSize='3xl'>{bio1}</Text>
      <Text>{bio2}</Text>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
