import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Image, Text, Box } from '@chakra-ui/react';
export default function ModalPayment({ isOpen, onClose }) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign={'center'}>Transfer Succesful</ModalHeader>
          <ModalCloseButton />
          <div className="flex w-full items-center justify-center flex-col gap-2 my-4">
            <Image src="./yes.png" boxSize="150px" />

            <Text className="flex flex-col mt-6 justify-center items-center">
              You have sent <Text as={'span'}>300$</Text>
            </Text>
          </div>

          <ModalFooter textAlign={'center'} px={'20'}>
            <Button colorScheme="blue" className="w-full" bg="blue.100" >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
