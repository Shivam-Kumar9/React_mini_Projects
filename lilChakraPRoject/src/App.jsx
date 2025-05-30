import {
  ExploreGPTIcon,
  NewChatIcon,
  SidebarIcon,
  SmallGPTIcon,
  UpgradeIcon,
} from "./icons/sidebar-icons";
import { Tooltip } from "./components/ui/tooltip";
import "./App.css";
import { Box, Center, Flex, IconButton, Stack ,Menu, Portal ,Button, HStack, Circle, Text, MenuSeparator, Switch} from "@chakra-ui/react";
import { ChartIcon, ChatGPTMenuIcon, ChatGPTPlusIcon, CheckIcon, MenuIcon, TemporaryChatIcon } from "./icons/other-icons";

function MenuItemDetail(props){
  const {icon, title, description, element, ...rest} = props;
  return(
    <HStack w='100%' outline='1px solid blue'>
      <Circle size='8' bg='bg.muted'>
       {icon}
      </Circle>
      <Stack gap='0' flex='1'>
        <Text>{title}</Text>    
        <Text fontSize='xs' color='fg.muted'>{description}</Text>    
      </Stack>
      <Box>{element}</Box>
    </HStack>
  )
}


function App() {
  return (
    <Flex minH="100dvh">
      <Box bg="bg.muted" w="260px">
        <Stack>
          <Flex justify="space-between">
            <Tooltip
              showArrow
              positioning={{ placement: "right" }}
              content="This is the tooltip content"
            >
              <IconButton variant="ghost" fontSize="3xl" color="fg.muted">
                <SidebarIcon></SidebarIcon>
              </IconButton>
            </Tooltip>

            <Tooltip showArrow content="This is the tooltip content">
              <IconButton variant="ghost" fontSize="3xl" color="fg.muted">
                <NewChatIcon />
              </IconButton>
            </Tooltip>
          </Flex>

          <Box>mid</Box>
          <Box>bottom</Box>
        </Stack>
      </Box>

      <Box>
        <Stack h="full" outline="1px solid gray">
          <Box>
            <Menu.Root>
              <Menu.Trigger asChild>
                <Button fontSize='md' fontWeight='bold' color='fg.muted' variant='ghost'>
                  Chat GPT <MenuIcon/>
                </Button>
              </Menu.Trigger>
              <Portal>
                <Menu.Positioner>
                  <Menu.Content>
                    <Menu.Item value="new-txt">
                    <MenuItemDetail 
                    icon ={<ChatGPTPlusIcon />}
                    title='ChatGPT Plus' 
                    description = 'Our smartest model & more' 
                    element={<Button variant='outline' size='xs' borderRadius='full'>Upgrade</Button>}/>
                       </Menu.Item>

                  <Menu.Item value="new-txt">
                    <MenuItemDetail 
                    icon ={<ChatGPTMenuIcon />}
                    title='ChatGPT' 
                    description = 'Great for everyday tasks' 
                    element={<ChartIcon />}/>
                  </Menu.Item>   
             
             <MenuSeparator/>

             <Menu.Item value="temporary-chat" py='2'>
                    <MenuItemDetail 
                    title='Temporary Chat' 
                    icon ={<TemporaryChatIcon/>}
                    element={<Switch size='sm'/>}/>
              </Menu.Item>   
             

                  </Menu.Content>
                </Menu.Positioner>
              </Portal>
            </Menu.Root>
          </Box>
          <Center flexGrow="1">middle</Center>
          <Box>end</Box>
        </Stack>
      </Box>
    </Flex>
  );
}

export default App;
