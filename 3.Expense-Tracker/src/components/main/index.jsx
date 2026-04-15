import { Flex, Heading, Button, useDisclosure } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import Summary from "../summary";
import ExpensiveView from "../expense-view";
import { GlobalContext } from "../../context";

function Main() {
   
 const {  open, setOpen} = useDisclosure();
 const { totalExpense,
        setTotalExpense,    
        totalIncome,
        setTotalIncome, allTransactions} = useContext(GlobalContext)
   
     useEffect(()=>{
          let income = 0;
          let expense =0;
          
  
        allTransactions.forEach((item)=>{
           item.type ==='income' ? income = income + parseFloat(item.amount) :
            expense = expense + parseFloat(item.amount) 
        })
         setTotalExpense(expense);
         setTotalIncome(income);

     },[allTransactions])   

console.log("Main:", open);  return (
    <Flex textAlign={"center"} flexDirection={"column"} pr={"5"} pl={"5"}>
      <Flex alignItems={"center"} justifyContent={"space-between"} mt={"12"}>
        <Heading
          color={"blue.400"}
          display={["none", "block", "block", "block", "block"]}
        >
          Expense Tracker
        </Heading>
        <Flex alignItems={"center"}>
          <Button onClick={ ()=>setOpen(true)} bg={"blue.300"} color={"black"} ml={"4"}>
            Add New Transaction
          </Button> 
        </Flex>
      </Flex>
<Summary totalExpense={totalExpense} totalIncome={totalIncome} isOpen={open} onClose={() => setOpen(false)} />        
      <Flex w='full' alignItems={'flex-start'} justifyContent={'space-evenly'} flexDirection={['column','column','column','row','row']}>
    <ExpensiveView data = {allTransactions.filter(item=> item.type === 'expense')} 
     type={'expense'} />
    <ExpensiveView data={allTransactions.filter((item)=>  item.type ==='income')}
      type={'income'}/>
      </Flex>
    </Flex>
  );
}

export default Main;
