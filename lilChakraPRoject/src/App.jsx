import {
  ExploreGPTIcon,
  NewChatIcon,
  SidebarIcon,
  SmallGPTIcon,
  UpgradeIcon,
} from "./icons/sidebar-icons";
import { Tooltip } from "./components/ui/tooltip";
import "./App.css";
import { Box, Center, Flex, IconButton, Stack ,Menu, Portal ,Button} from "@chakra-ui/react";
import { MenuIcon } from "./icons/other-icons";

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
                    <Menu.Item value="new-txt">New Text File</Menu.Item>
 
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
