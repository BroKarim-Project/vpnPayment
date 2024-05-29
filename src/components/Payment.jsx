import React, { useState, useR } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Flex, Button, Text,Divider, AbsoluteCenter, Box } from '@chakra-ui/react';
import { X } from 'lucide-react';
import { Apple, Paypal, Google } from './SvgComponent';

import Dropdown2 from './dropdown2';
import ModalPayment from './modal';

export default function Payment() {
  const [cardNumber, setCardNumber] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('--');
  const [isClicked, setIsClicked] = useState(null);

  //after click
  const handleClick = (index) => {
    setIsClicked(index);
  };

  // show selected price
  const handleSelectValue = (value) => {
    setSelectedValue(value);
  };
  // modal after payment
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // close modal payment
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  //formatting credit card numbers
  const handleInputChange = (event) => {
    const input = event.target.value.replace(/\D/g, '');

    let formattedInput = '';
    for (let i = 0; i < input.length; i++) {
      if (i % 4 === 0 && i > 0) {
        formattedInput += ' ';
      }
      formattedInput += input[i];
    }

    setCardNumber(formattedInput);
  };

  return (
    <>
      <Box className="relative md:overflow-hidden ">
        <img src="https://images.pexels.com/photos/1910225/pexels-photo-1910225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="absolute inset-0 object-cover w-full h-full" alt="" />
        <div className="relative  bg-opacity-75">
          {/* <div className="   "> */}
          <div className="flex  flex-col md:px-24  items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                Security yo can rely on.
                <br className="hidden md:block" />
                <span className="text-5xl">the vpn you can trust.</span>
              </h2>
              <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">Lasting VPN prioritize security and data protection, leveraging the latest tech insights gained from industry experts. .</p>
            </div>

            <div className=" py-8 ">
              <Card maxW={'sm'} className="bg-white  rounded shadow-2xl  min-h-[90vh] p-4 px-8">
                <Flex justifyContent={'space-between'} alignItems={'center'} mb={{ base: 6, md: 4 }}>
                  <h3 className=" text-xl font-semibold ">Sign up for updates</h3>
                  <X size={16} />
                </Flex>
                <Text fontSize={'sm'}>Billing Plan</Text>
                <Flex justifyContent={'space-between'} gap={2}>
                  <div onClick={() => handleSelectValue('$4.99')} className="cursor-pointer flex items-center flex-col justify-center w-full  py-2 px-4 border border-gray-400 rounded-lg ">
                    <Text fontSize={'xs'}>Monthly</Text>
                    <Text fontSize={'md'} fontWeight={'600'}>
                      $4.99
                      <Text as={'span'} fontWeight={600} color={'Slate.300'} fontSize="xs">
                        /month
                      </Text>
                    </Text>
                  </div>
                  <div onClick={() => handleSelectValue('$29.99')} className="flex items-center flex-col justify-center w-full  py-2 px-4 border-2 border-blue-400 rounded-lg ">
                    <Text fontSize={'xs'}>
                      Yearly{' '}
                      <Text as={'span'} fontWeight={400} color={'white'} bg="blue.100" className="p-1 bg-black  rounded-full" fontSize="xs">
                        50% save
                      </Text>{' '}
                    </Text>
                    <Text fontSize={'md'} fontWeight={'600'}>
                      $29.99
                      <Text as={'span'} fontWeight={600} color={'Slate.300'} fontSize="xs">
                        /month
                      </Text>
                    </Text>
                  </div>
                </Flex>
                <Box py="3">
                  <Text>Paywith</Text>
                  <Flex justifyContent={'space-between'} gap={2}>
                    <Box className="py-2 px-6 bg-[#f2f4f9] rounded-md flex flex-1 justify-center items-center" bg={isClicked === 0 ? 'red.100' : '#f2f4f9'} _hover={{ bg: 'red.100' }} onClick={() => handleClick(0)} cursor="pointer">
                      <Paypal />
                    </Box>
                    <Box className="py-2 px-6 bg-[#f2f4f9] text-xs rounded-md flex flex-1  justify-center items-center gap-2" bg={isClicked === 1 ? 'red.100' : '#f2f4f9'} onClick={() => handleClick(1)} cursor="pointer">
                      <Google /> Pay
                    </Box>
                    <Box className="py-2 px-6 bg-[#f2f4f9] text-xs rounded-md flex  flex-1 justify-center items-center gap-2" bg={isClicked === 2 ? 'red.100' : '#f2f4f9'} onClick={() => handleClick(2)} cursor="pointer">
                      <Apple />
                      Pay
                    </Box>
                  </Flex>
                </Box>
                <Box position="relative" py="3">
                  <Divider size="lg" borderWidth="1px" borderColor="gray.400" orientation="horizontal" />
                  <AbsoluteCenter bg={'white'} px="2">
                    <Text fontSize={'xs'}>or pay using credit card</Text>
                  </AbsoluteCenter>
                </Box>
                <form className="mt-4">
                  <div className="w-full  flex flex-col">
                    <label className="relative cursor-pointer">
                      <input
                        type="text"
                        value={cardNumber}
                        id="cardNumber"
                        maxLength="19"
                        placeholder=" "
                        onChange={handleInputChange}
                        className="flex h-10 w-full rounded-md border-2 px-4 py-1.5 text-lg ring-offset-background focus-visible:outline-none focus-visible:border-purple-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 "
                      />
                      <span className="uppercase text-black text-opacity-80 bg-white absolute left-1 top-3 px-1 transition duration-200 text-xs input-text">card information</span>
                    </label>
                  </div>
                  <div className="w-full  mt-2">
                    <label className="relative cursor-pointer">
                      <input
                        type="text"
                        placeholder=" "
                        className="flex h-10 w-full rounded-md border-2 px-4 py-1.5 text-lg ring-offset-background focus-visible:outline-none focus-visible:border-purple-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 "
                      />
                      <span className="uppercase text-black text-opacity-80 bg-white absolute left-1 top-3 px-1  transition duration-200 text-xs input-text">name on card</span>
                    </label>
                  </div>
                  <div className="w-full flex justify-between gap-2 mt-4">
                    <Dropdown2 />
                    <label className="relative w-1/2 cursor-pointer">
                      <input
                        type="text"
                        placeholder=" "
                        className="flex h-10 w-full rounded-md border-2 px-4 py-1.5 text-lg ring-offset-background focus-visible:outline-none focus-visible:border-purple-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mb-4"
                      />
                      <span className=" uppercase text-black text-opacity-80 bg-white absolute left-1 top-3 px-1 transition duration-200 text-xs input-text">zip code</span>
                    </label>
                  </div>

                  <Divider orientation="horizontal" size="lg" borderWidth="1px" borderColor="gray.400" />
                  <div className="flex justify-between items-center mt-4">
                    <h1 className="font-semibold">Total</h1>
                    <p className="font-semibold">{selectedValue}</p>
                  </div>
                  <div className="mt-4">
                    <Button className="w-full " fontSize={'14'} bg="button.100" _hover={{ bg: 'blue.100', color: 'white' }} onClick={handleOpenModal}>
                      Complete Purchase
                    </Button>
                  </div>
                </form>
              </Card>
            </div>
          </div>
          <ModalPayment isOpen={isModalOpen} onClose={handleCloseModal} />
        </div>
      </Box>
    </>
  );
}

