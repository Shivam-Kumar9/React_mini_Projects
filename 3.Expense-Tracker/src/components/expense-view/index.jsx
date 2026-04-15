import { Flex, Heading ,Box,Text} from "@chakra-ui/react";

export default function ExpensiveView({type , data}){
     return (<Box flex={1} w='full' bg={'white'} mr={'4'} mt={'10'} p={'5'} pb={'4'} 
     border={'1px solid'} borderColor={'gray.100'} borderRadius={'12'}> 
       <Flex justifyContent={'space-between'} alignItems={'center'} >
         <Heading size={'md'} color={'red.700'}> 
          {type === 'income' ? 'Income' : 'Expense'}
         </Heading>
       </Flex>
       {
           data.map(item=> <>
           <Flex justifyContent={'space-between'} alignItems={'center'} border={'1px solid'} bg={type === 'expense' ? 'red.50' : 'blue.50' } borderColor={type === 'expense' ? 'red.50' : 'blue.50'} mt={'4'}
            p={'3'} borderRadius={'8'}>
                        <Flex alignItems={'center'} justifyContent={'center'} >
                         <Text ml='3' frontweight='bold' color='gray.600'>{item.description}</Text>
                         </Flex>  
                         <Flex>
                              <Text>${item.amount}</Text>
                         </Flex>
           </Flex>
          </>)
       }
         </Box>)
}