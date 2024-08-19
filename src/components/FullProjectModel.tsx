import {
  Badge,
  Indicator,
  Modal,
  Image,
  Text,
  Group,
  Button,
} from "@mantine/core";
const FullProjectModel = (props: any) => {
  return (
    <Modal.Root
      size="65%"
      className="!rounded-xl"
      opened={props.opened}
      onClose={props.close}
    >
      <Modal.Overlay />
      <Modal.Content className="!rounded-3xl ">
        <Modal.Header className="!bg-bgColor !border-primaryColor !border-2 !rounded-tl-3xl !rounded-tr-3xl !border-b-0">
          <Modal.Title className="text-4xl text-white flex gap-4 items-center font-mono font-bold ">
            {props.title}{" "}
            {props.live === true && (
              <Badge
                className="flex items-center gap-1"
                size="lg"
                variant="outline"
                color="pink"
                rightSection={
                  <Indicator
                    color="red"
                    position="middle-end"
                    size={9}
                    processing
                  ></Indicator>
                }
              >
                live
              </Badge>
            )}
          </Modal.Title>
          <Modal.CloseButton
            size="md"
            iconSize="30px"
            className="bg-bgColor !text-red-500"
          />
        </Modal.Header>
        <Modal.Body className="!bg-bgColor  !pt-4 !border-primaryColor !border-2 !rounded-bl-3xl !rounded-br-3xl !border-t-0 ">
          <Image
            className="!rounded-lg !shadow-[0_0_5px_0_#64FFDA]"
            src={props.image}
            alt={props.image}
          />

          <Text className="!text-justify font-mono" size="lg" c="dimmed">
            {props.desc}
          </Text>

          <Group mt="md" justify="space-between">
            <a href={props.github} target="__blank" className="!w-[48%]">
          
              <Button
            
                variant="outline"
                size="lg"
                color="#64FFDA"
                fullWidth
                mt="md"
                radius="md"
              >
                View Code
              </Button>
            </a>

            <a href={props.link}target="__blank" className="!w-[48%]">
              <Button
                className="!bg-primaryColor !text-bgColor "
                  variant="outline"
                  size="lg"
               color="#64FFDA"
                fullWidth
                mt="md"
                radius="md"
              >
                View Live App
              </Button>
            </a>
          </Group>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
};

export default FullProjectModel;
