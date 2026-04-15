import { GlobalContext } from "../../context";
import {
  DialogRoot,
  DialogBackdrop,
  DialogContent,
  DialogHeader,
  DialogCloseTrigger,
  DialogBody,
  DialogFooter,
  Button,
  Input,
  RadioGroup,
  Stack
} from "@chakra-ui/react";
import { useContext } from "react";
 


export default function TransactionForm({ onClose, isOpen }) {
   
  const {formData, setFormData, value, setValue , handleFormSubmit} = useContext(GlobalContext)
  
  function handleFormChange(e){
    setFormData( {
      ...formData,
      [e.target.name] : e.target.value
    })
  }
  function handleSubmit(e){
    e.preventDefault()
    handleFormSubmit(formData)
  }

  return ( 
    <DialogRoot
      open={isOpen} 
      onOpenChange={(details) => {
        if (!details.open) onClose();
      }}
    >
      <DialogBackdrop />

      <DialogContent>
        <form onSubmit={handleSubmit}>
          <DialogHeader>Add New Transaction</DialogHeader>
          <DialogCloseTrigger />

          <DialogBody>
            <div>
              <label>Enter Description</label>
              <Input onChange={handleFormChange} name="description"  placeholder="Enter Description"/>
            </div>

            <div>
              <label>Enter Amount</label>
              <Input onChange={handleFormChange} name="amount" type="number" placeholder='Enter Amount'/>
            </div>



            <div>
              <label>Transaction Type</label>
<RadioGroup.Root defaultValue="expense" value={formData.type} onValueChange={(e) => setFormData({...formData, type: e.value})} mt={'5'}>
  <Stack direction="row" gap="4" >
    
    <RadioGroup.Item value="income">
      <RadioGroup.ItemHiddenInput />
      <RadioGroup.ItemControl/> 
      <RadioGroup.ItemText> Income</RadioGroup.ItemText>
    </RadioGroup.Item>

    <RadioGroup.Item value="expense">
      <RadioGroup.ItemHiddenInput />
      <RadioGroup.ItemControl/> 
      <RadioGroup.ItemText> Expense</RadioGroup.ItemText>
    </RadioGroup.Item>

  </Stack>
</RadioGroup.Root>
            </div>
            {/* <RadioGroup defaultValue="income">
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
            </RadioGroup> */}
          </DialogBody>

          <DialogFooter>
            <Button onClick={onClose} type="button">
              Cancel
            </Button>
            <Button onClick={onClose} type="submit">Add</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </DialogRoot>
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
