/** @jsxImportSource @emotion/react */
// import { boolean, radios, text, withKnobs } from "@storybook/addon-knobs";
import ButtonGroup from "./ButtonGroup";
import Button from "../Button/Button"
import { ComponentStory } from "@storybook/react";

export default {
    title: "components|ButtonGroup",
    component: ButtonGroup, 
};
  
export const buttonGroup: ComponentStory<typeof ButtonGroup> = (args) => {
      return <ButtonGroup {...args}>
        <Button theme="tertiary">취소</Button>
    </ButtonGroup>
}

buttonGroup.args = {
  direction: 'row',
  rightAlign: false,
  gap: '0.5rem'
}

buttonGroup.story = {
    name: "Default"
}

export const rightAlign = () => {
    return (
        <ButtonGroup rightAlign>
          <Button theme="tertiary">취소</Button>
          <Button>확인</Button>
        </ButtonGroup>
      );
}


export const column = () => {
    return (
      <ButtonGroup direction="column">
        <Button>CLICK ME</Button>
        <Button>CLICK ME</Button>
      </ButtonGroup>
    );
  };
  
  export const customGap = () => {
    return (
      <ButtonGroup gap="1rem">
        <Button theme="tertiary">취소</Button>
        <Button>확인</Button>
      </ButtonGroup>
    );
  };
  
  export const customGapColumn = () => {
    return (
      <ButtonGroup direction="column" gap="1rem">
        <Button>CLICK ME</Button>
        <Button>CLICK ME</Button>
      </ButtonGroup>
    );
  };