import { Box, Flex, Container, Heading, Stack, Text, Button, Icon, Center, Switch, Link } from '@chakra-ui/react';

export default function Subscription() {
  return (
    <Container maxW={'9xl'}>
      <Stack textAlign={'center'} align={'center'} spacing={6} py={10}>
        <Heading fontWeight={700} color={'black'} fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }} lineHeight={'110%'}>
          Choose your plan
        </Heading>
        <Text color={'gray.500'} maxW={'xl'}>
          Select the best plan to secure your internet experience and enjoy uninterrupted, private, and safe browsing. Our flexible options ensure you get the perfect balance of speed and security tailored to your needs.
        </Text>
      </Stack>
      <Box className="max-w-full">
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card className="gradient" heading={'Starter'} info={'🎉more than enough'} description={'Comes with Lastinng VPN and is perfect for ensuring your daily browsing security.'} pricing={'2$'} button={'Get Starter'} />
          <Card className="gradient" heading={'One'} info={'🛡️more armor for your device'} description={'Ideal for those seeking comprehensive security for browsing, devices, and identity.'} pricing={'4.99$'} button={'Get One'} />
          <Card className="onePlus" heading={'One Plus'} info={'🚀One for all internet service'} description={'Safeguards your online activities and devices, with additional emphasis on identity protection.'} pricing={'9$'} button={'Get One Plus'} />
        </Flex>
      </Box>
    </Container>
  );
}

const Card = ({ heading, description, pricing, info, className, button }) => {
  return (
    <>
      <Box maxW={{ base: 'full', md: '350px' }} w={'full'} borderWidth="1px" borderRadius="lg" overflow="hidden" className={`relative shadow-[0px_-16px_24px_0px_rgba(255,255,255,0.25)_inset] ${className}`}>
        <Box p={5} zIndex={10}>
          <Stack align={'start'} spacing={2}>
            <Box mt={2}>
              <Heading className="uppercase" size="lg">
                {heading}
              </Heading>
              <Text mt={1} fontSize={'sm'}>
                {description}
              </Text>
            </Box>
            <Flex gap={2} justify={'center'}>
              <Box p={1} rounded={'full'} fontSize={'xs'} bg={'#e9e8fb'}>
                {info}{' '}
              </Box>
            </Flex>
            <Flex gap={1} justifyContent={'center'} alignItems={'center'}>
              <Text fontSize="4xl" fontWeight={800}>
                {pricing}
                <Text as={'span'} fontWeight={600} color={'Slate.300'} fontSize="xs">
                  /month
                </Text>
              </Text>
            </Flex>
          </Stack>
        </Box>
        <Flex py={4} px={8} justifyContent={'center'}>
          <Link href="/payment" minW={'full'}>
            <Button  rounded={'full'} minW={'full'} colorScheme="blue">
              {button}
            </Button>
          </Link>
        </Flex>
      </Box>
    </>
  );
};
