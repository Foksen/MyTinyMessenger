import { Button, ButtonGroup } from "@chakra-ui/react";

export default function Home() {
  return (
    <ButtonGroup size="sm" variant="outline">
      <Button colorPalette="blue">Save</Button>
      <Button>Cancel</Button>
    </ButtonGroup>
  );
}
