import { Box, Flex, Container, Heading, Stack, Text, Button, Icon, Center, Switch } from '@chakra-ui/react';

export default function Subscription() {
  return (
    <Container maxW={'9xl'}>
      <Stack textAlign={'center'} align={'center'} spacing={6} py={10}>
        <Heading fontWeight={800} fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }} lineHeight={'110%'}>
          Choose your{' '}
          <Text as={'span'} color={'orange.400'}>
            plan
          </Text>
        </Heading>
        <Text color={'gray.500'} maxW={'xl'}>
          Select the best plan to secure your internet experience and enjoy uninterrupted, private, and safe browsing. Our flexible options ensure you get the perfect balance of speed and security tailored to your needs.
        </Text>
      </Stack>
      <Box className="max-w-full">
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card heading={'Heading'} description={'Lorem ipsum dolor sit amet catetur, adipisicing elit.'} />
          <Card heading={'Heading'} description={'Lorem ipsum dolor sit amet catetur, adipisicing elit.'} />
          <Card heading={'Heading'} description={'Lorem ipsum dolor sit amet catetur, adipisicing elit.'} />
        </Flex>
      </Box>
    </Container>
  );
}

const Card = ({ heading, description, pricing }) => {
  return (
    <>
      <Box maxW={{ base: 'full', md: '350px' }} w={'full'} borderWidth="1px" borderRadius="lg" overflow="hidden" className="relative gradient  shadow-[0px_-16px_24px_0px_rgba(255,255,255,0.25)_inset]">
        {/* <div className=" opacity-50 rounded-md  absolute w-full -z-1 h-8" ></div> */}
        {/* <div className="bg-gradient-to-tr from-blue-100 to-blue-200 opacity-50 rounded-md  absolute w-full -z-1 h-8" ></div> */}
        <Box p={5} zIndex={10}>
          <Stack align={'start'} spacing={2}>
            <Box mt={2}>
              <Heading size="md">{heading}</Heading>
              <Text mt={1} fontSize={'sm'}>
                {description}
              </Text>
            </Box>
            <Flex gap={2} justify={'center'}>
              <Text>Monthly</Text>
              <Switch size="md" colorScheme="red" />
              <Text>Annual</Text>
            </Flex>
            <Flex gap={1} justifyContent={'center'} alignItems={'center'}>
              <Text fontSize="4xl" fontWeight={800}>
                $400
                <Text as={'span'} fontWeight={600} color={'Slate.300'} fontSize="xs">
                  /month
                </Text>
              </Text>
            </Flex>
          </Stack>
        </Box>
        <Flex py={4} px={8} justifyContent={'center'}>
          <Button rounded={'full'} minW={'full'} colorScheme='blue' >Upgrade Now</Button>
        </Flex>
      </Box>
    </>
  );
};
