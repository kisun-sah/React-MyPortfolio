import { Card, Image, Text, Badge, Button, Group, Indicator } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import FullProjectModel from './FullProjectModel';

const ProjectCard = (props:any) => {
  const [opened, { open, close }] = useDisclosure(false);
    return (
      <>
       <div data-aos="fade-up" data-aos-duration="800"> 
        <Card onClick={open} className='w="665px" !bg-bgColor  mb-5 cursor-pointer transition-transform duration-300  hover:!scale-[1.02] hover:!shadow-[0_0_10px_0_#64FFDA]  !border-[#2f7b88] !border-2 ' shadow="lg" padding="sm" radius="lg" withBorder>
        <Card.Section className='p-3'>
          <Image
          className='rounded-xl !shadow-[0_0_5px_0_#64FFDA]'
            src={props.image}

            alt={props.image}
          />
        </Card.Section>
  
        <Group justify="space-between" mt="md" mb="xs">
  
          <Text className='!text-2xl gap-2 !font-bold !text-white flex items-center' >{props.title} {props.live ===true &&
             <Badge variant='outline' color="pink" rightSection={ <Indicator color="red" position='middle-end' size={7} processing ></Indicator>}>live</Badge> }
             </Text>

        </Group>

        {/* <Group justify="space-between" mt="xs" mb="sm">
             {props.technologies.map((tech:string ,index:number) => <Badge variant='light' color='red'>Badge</Badge>)}
        </Group> */}
  
        <Text className='!text-justify' lineClamp={5} size="sm" c="dimmed">
        {props.desc}
        </Text>
  
        <Button  onClick={open} className='!bg-primaryColor !text-bgColor' color="blue" fullWidth mt="md" radius="md">
           show more
        </Button>
      </Card>

      <FullProjectModel opened={opened} close={close}
        title={props.title} 
        desc={props.desc} 
        image={props.image} 
        live={props.live} 
        link={props.link} 
        github={props.github} 
        technologies={props.technologies}/>
        </div>
      </>
    )
}

export default ProjectCard ;