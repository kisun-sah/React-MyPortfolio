


import { useDisclosure } from '@mantine/hooks';
import { Drawer, Burger } from '@mantine/core';
import { IconHexagonLetterK, IconX } from '@tabler/icons-react';
import { navLinks } from './Header';


const  Sidebar = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
  

      <Drawer.Root opened={opened} onClose={close}        size="50vw"    className='md:hidden !-z-10'        position='right'>
        <Drawer.Overlay className='!-z-0' style={{ backgroundOpacity: 0.5, blur: 4 }} />
        <Drawer.Content className='!-z-0' bg="#0A192F">
          <Drawer.Body className='mt-20 flex flex-col gap-5' bg="#0A192F" >
               {navLinks(true)}
          </Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>


      <Burger 
      className='md:!hidden !z-10 ' 
      color='#64FFDA'
      size="lg" 
      opened={opened}  
      onClick={opened ? close : open}
      />
      

    </>
  );
}
export default Sidebar;
