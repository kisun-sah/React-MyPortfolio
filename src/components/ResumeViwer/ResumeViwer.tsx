import { ActionIcon, Button, Modal, ScrollAreaAutosize, Tooltip } from "@mantine/core";
import {
  IconAdjustments,
  IconArrowBigDownLineFilled,
} from "@tabler/icons-react";
import { Document, Page } from "react-pdf";
import { Info } from "../../User";

const ResumeViwer = (props: any) => {
  return (
    <Modal.Root
      scrollAreaComponent={ScrollAreaAutosize}
      size="auto"
      className="!rounded-xl"
      opened={props.opened}
      onClose={props.close}
    >
      <Modal.Overlay />
      <Modal.Content className="!rounded-3xl ">
        <Modal.Header className="!bg-bgColor !border-primaryColor !border-2 !rounded-tl-3xl !rounded-tr-3xl !border-b-0">
          <Modal.Title className="text-4xl text-white flex gap-4 items-center font-mono font-bold ">
            Resume
          
            <Tooltip label="Download" color="#64FFDA"  className="!text-bgColor"  position="right" offset={5}>
                
        


            <ActionIcon 
            className="!text-primaryColor"
            component="a"
            href="./kisun001.pdf"
            download={Info.name}
            variant="outline" 
            color="#64FFDA" 
            aria-label="settings"
            >
              <IconArrowBigDownLineFilled />
            </ActionIcon>
            </Tooltip>
          </Modal.Title>
          <Modal.CloseButton
            size="md"
            iconSize="30px"
            className="bg-bgColor !text-red-500"
          />
        </Modal.Header>
        <Modal.Body className="!bg-bgColor  !pt-4 !border-primaryColor !border-2 !rounded-bl-3xl !rounded-br-3xl !border-t-0 ">
          <Document file="./kisun001.pdf">
            <Page
              pageNumber={1}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          </Document>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
};
export default ResumeViwer;
