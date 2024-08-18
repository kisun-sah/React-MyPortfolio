import { Card, Image, Text, Badge, Button, Group, Indicator } from '@mantine/core';

const ProjectCard = (props:any) => {
    return (
        <Card className=' !bg-bgColor mb-5 cursor-pointer hover:!scale-[1.02] hover:!shadow-[0_0_10px_0_#64FFDA]  !border-[#2f7b88] !border-2 !w-1/4' shadow="lg" padding="sm" radius="lg" withBorder>
        <Card.Section className='p-3'>
          <Image
          className='rounded-xl !shadow-[0_0_5px_1_#64FFDA]'
            src={props.image}

            alt="props.image"
          />
        </Card.Section>
  
        <Group justify="space-between" mt="md" mb="xs">
  
          <Text className='!text-2xl gap-2 !font-bold !text-white flex items-center' >{props.title} {props.live ===true &&
             <Badge variant='outline' color="pink" rightSection={ <Indicator color="red" position='middle-end' size={7} processing ></Indicator>}>live</Badge> }
             </Text>

        </Group>
  
        <Text className='!text-justify' lineClamp={5} size="sm" c="dimmed">
        {props.desc}
        </Text>
  
        <Button color="blue" fullWidth mt="md" radius="md">
           show more
        </Button>
      </Card>
    )
}

export default ProjectCard ;