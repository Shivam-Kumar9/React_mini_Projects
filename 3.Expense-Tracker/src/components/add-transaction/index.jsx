import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  RadioGroup,
} from "@chakra-ui/react";

export default function TrasactionForm() {
  return (
    <Modal>
      <form>
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>Add New Transaction</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl>
                <FormLabel>Enter Description</FormLabel>
                <Input
                  placeholder="Enter Transaction Description"
                  name="description"
                  type="text"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Enter Description</FormLabel>
                <Input
                  placeholder="Enter Transaction Description"
                  name="description"
                  type="text"
                />
              </FormControl>
                            <FormControl>
                <FormLabel>Enter  Amount</FormLabel>
                <Input 
                  placeholder="Enter Transaction Description"
                  name="amount"
                  type="number"
                />
              </FormControl>
              <RadioGroup mt='5'>
                 <Radio value='income' colorScheme='blue' name='type'>Income</Radio>
                 <Radio value='expense' colorScheme='red'  name='type'>Expense</Radio>
              </RadioGroup>
            </ModalBody>
          </ModalContent>
        </ModalOverlay>
      </form>
    </Modal>
  );
}
