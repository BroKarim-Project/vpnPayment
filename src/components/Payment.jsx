import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Flex, Button, Text, Stack, Divider, AbsoluteCenter, Box, Input } from '@chakra-ui/react';
import { X } from 'lucide-react';
import { Apple, Paypal, Google } from './SvgComponent';
import Dropdown from './dropdown';
import Dropdown2 from './dropdown2';
import FlagsSelect from './FlagsSelect';
export default function Payment() {
  const [cardNumber, setCardNumber] = useState('');

  const handleInputChange = (event) => {
    // Remove all non-numeric characters from the input
    const input = event.target.value.replace(/\D/g, '');

    // Add a space after every 4 digits
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
      <div className="relative md:overflow-hidden ">
        <img src="https://images.pexels.com/photos/1910225/pexels-photo-1910225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="absolute inset-0 object-cover w-full h-full" alt="" />
        <div className="relative  bg-opacity-75">
          {/* <div className="   "> */}
          <div className="flex  flex-col md:px-24  items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                The quick, brown fox <br className="hidden md:block" />
                jumps over a <span className="text-teal-accent-400">lazy dog</span>
              </h2>
              <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudan, totam rem aperiam, eaque ipsa quae.</p>
              <a href="/" aria-label="" className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700">
                Learn more
                <svg className="inline-block w-3 ml-2" fill="currentColor" viewBox="0 0 12 12">
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </a>
            </div>

            <div className=" py-8 ">
              <Card maxW={'sm'} className="bg-white  rounded shadow-2xl  min-h-[90vh] p-4 px-8">
                <Flex justifyContent={'space-between'} alignItems={'center'}>
                  <h3 className="mb-4 text-xl font-semibold sm:mb-6">Sign up for updates</h3>
                  <X size={16} />
                </Flex>
                <Text fontSize={'sm'}>Billing Plan</Text>
                <Flex justifyContent={'space-between'} gap={2}>
                  <div className="flex items-center flex-col justify-center w-full  py-2 px-4 border border-gray-400 rounded-lg ">
                    <Text fontSize={'xs'}>Monthly</Text>
                    <Text fontSize={'md'} fontWeight={'600'}>
                      $22.99
                      <Text as={'span'} fontWeight={600} color={'Slate.300'} fontSize="xs">
                        /month
                      </Text>
                    </Text>
                  </div>
                  <div className="flex items-center flex-col justify-center w-full  py-2 px-4 border-2 border-blue-400 rounded-lg ">
                    <Text fontSize={'xs'}>
                      Yearly{' '}
                      <Text as={'span'} fontWeight={400} color={'white'} className="p-1 bg-black  rounded-full" fontSize="xs">
                        70% save
                      </Text>{' '}
                    </Text>
                    <Text fontSize={'md'} fontWeight={'600'}>
                      $22.99
                      <Text as={'span'} fontWeight={600} color={'Slate.300'} fontSize="xs">
                        /month
                      </Text>
                    </Text>
                  </div>
                </Flex>
                <Box py="3">
                  <Text>Paywith</Text>
                  <Flex justifyContent={'space-between'} gap={2}>
                    <div className="py-2 px-6 bg-[#f2f4f9] rounded-md flex flex-1 justify-center items-center">
                      <Paypal />
                    </div>
                    <div className="py-2 px-6 bg-[#f2f4f9] text-xs rounded-md flex flex-1  justify-center items-center gap-2">
                      <Google /> Pay
                    </div>
                    <div className="py-2 px-6 bg-[#f2f4f9] text-xs rounded-md flex  flex-1 justify-center items-center gap-2">
                      <Apple />
                      Pay
                    </div>
                  </Flex>
                </Box>
                <Box position="relative" py="3">
                  <Divider size="lg" borderWidth="1px" borderColor="gray.400" orientation="horizontal" />
                  <AbsoluteCenter bg={'white'} px="2">
                    <Text fontSize={'xs'}>or pay using credit card</Text>
                  </AbsoluteCenter>
                </Box>
                <form className="mt-4">
                  <div className="w-full  ">
                    <label className="relative cursor-pointer">
                      <input
                        type="text"
                        value={cardNumber}
                        id="cardNumber"
                        maxLength="19"
                        placeholder=" "
                        onChange={handleInputChange}
                        className="flex h-10 w-full rounded-md border-2 px-4 py-1.5 text-lg ring-offset-background focus-visible:outline-none focus-visible:border-purple-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mb-4"
                      />
                      <span className="uppercase text-black text-opacity-80 bg-white absolute left-1 top-3 px-1 transition duration-200 text-xs input-text">card information</span>
                    </label>
                  </div>
                  <div className="w-full  ">
                    <label className="relative cursor-pointer">
                      <input
                        type="text"
                        placeholder=" "
                        className="flex h-10 w-full rounded-md border-2 px-4 py-1.5 text-lg ring-offset-background focus-visible:outline-none focus-visible:border-purple-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mb-4"
                      />
                      <span className="uppercase text-black text-opacity-80 bg-white absolute left-1 top-3 px-1  transition duration-200 text-xs input-text">name on card</span>
                    </label>
                  </div>
                  <div className="w-full flex justify-between gap-2">
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
                </form>
                <Divider orientation="horizontal" size="lg" borderWidth="1px" borderColor="gray.400" />
                <div className="flex justify-between items-center mt-4">
                  <h1 className="font-semibold">Total</h1>
                  <p className="font-semibold">$555</p>
                </div>
                <div className="mt-4">
                  <Button className="w-full " fontSize={'14'} bg="button.100">
                    Complete Purchase
                  </Button>
                </div>
              </Card>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </>
  );
}

/*
yang belum
- isi paket
- klo paket di tekan, harga akan ditampilkan di payment
- klo ada satu kolom yang ga keiisi, bakal muncul merah saat button di tekan

- jika succes bakal muncul popup
- tulisan di kanan

*/