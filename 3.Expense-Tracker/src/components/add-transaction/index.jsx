import {
  Dialog,
  Button,
  Input,
  RadioGroup,
} from "@chakra-ui/react";

export default function TransactionForm({ onClose, isOpen }) {
  return (
    <Dialog.Root
      open={isOpen}
      onOpenChange={(details) => {
        if (!details.open) onClose();
      }}
    >
      <Dialog.Backdrop />

      <Dialog.Content>
        <form>
          <Dialog.Header>Add New Transaction</Dialog.Header>
          <Dialog.CloseTrigger />

          <Dialog.Body>
            <div>
              <label>Description</label>
              <Input name="description" />
            </div>

            <div>
              <label>Amount</label>
              <Input name="amount" type="number" />
            </div>

            <RadioGroup defaultValue="income">
              <RadioGroup.Item value="income">
                <RadioGroup.ItemHiddenInput />
                <RadioGroup.ItemIndicator />
                <RadioGroup.ItemText>Income</RadioGroup.ItemText>
              </RadioGroup.Item>

              <RadioGroup.Item value="expense">
                <RadioGroup.ItemHiddenInput />
                <RadioGroup.ItemIndicator />
                <RadioGroup.ItemText>Expense</RadioGroup.ItemText>
              </RadioGroup.Item>
            </RadioGroup>
          </Dialog.Body>

          <Dialog.Footer>
            <Button onClick={onClose} type="button">
              Cancel
            </Button>
            <Button type="button">Add</Button>
          </Dialog.Footer>
        </form>
      </Dialog.Content>
    </Dialog.Root>
  );
}



// import {
//    DialogBackdrop,
//   DialogContent,
//   DialogHeader,
//   DialogFooter,
//   DialogBody,
//   DialogCloseTrigger,
//    Button,
 
//   Input,
// } from "@chakra-ui/react";
// import {
//   DialogRoot as Dialog,
//   RadioGroup,
//    Field,
//  } from "@chakra-ui/react";

// export default function TransactionForm({ onClose, isOpen }) {
//   return (
//     <Dialog open={isOpen} onOpenChange={(details) => {
//   if (!details.open) onClose();
// }}>
//         <DialogBackdrop/>  
//         <DialogContent>
//       <form>
//           <DialogHeader>Add New Transaction</DialogHeader>
//           <DialogCloseTrigger />
//           <DialogBody>
//             <Field>
//               <Field.Label>Enter Description</Field.Label>
//               <Input
//                 placeholder="Enter Transaction Description"
//                 name="description"
//                 type="text"
//               />
//             </Field>
 
//             <Field>
//               <Field.Label>Enter Amount</Field.Label>
//               <Input
//                 placeholder="Enter Transaction Amount"
//                 name="amount"
//                 type="number"
//               />
//             </Field>
//             <RadioGroup mr={'4'} defaultValue="income">
//               <RadioGroup.Item value="income">
//                 <RadioGroup.ItemHiddenInput />
//                 <RadioGroup.ItemIndicator />
//                 <RadioGroup.ItemText>Income</RadioGroup.ItemText>
//               </RadioGroup.Item>

//               <RadioGroup.Item value="expense">
//                 <RadioGroup.ItemHiddenInput />
//                 <RadioGroup.ItemIndicator />
//                 <RadioGroup.ItemText>Expense</RadioGroup.ItemText>
//               </RadioGroup.Item>
//             </RadioGroup>
//           </DialogBody>
//           <DialogFooter>
//             <Button mr={"4"} onClick={onClose}>
//               Cancel
//             </Button>
//             <Button type="button">Add</Button>
//           </DialogFooter>
//       </form>
//         </DialogContent>
//     </Dialog>
 
//   );
// }
