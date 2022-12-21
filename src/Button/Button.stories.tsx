/** @jsxImportSource @emotion/react */
import Button from "./Button";
import ButtonGroup from "src/ButtonGroup/ButtonGroup";
import Icon from "src/Icon/Icon";
import { css } from "@emotion/react";
import {  ComponentStory, ComponentMeta } from "@storybook/react"

export default {
  title: "components|Button",
  component: Button,
} as ComponentMeta<typeof Button>;
 
export const button:ComponentStory<typeof Button> = (args) => <Button {...args} />

button.args = {
  children: "Click",
  theme: 'primary',
  size: 'medium', 
  disabled: false,
}

button.story = {
  name: "Default",
};

export const primaryButton = () => {
  return <Button>PRIMARY</Button>;
};
 

export const secondaryButton = () => {
  return <Button theme="secondary">SECONDARY</Button>;
};

export const tertiaryButton = () => {
  return <Button theme="tertiary">TERTIARY</Button>;
};

const buttonWrapper = css`
  .description {
    margin-bottom: 0.5rem;
  }
  & > div + div {
    margin-top: 2rem;
  }
`;

export const sizes = () => {
  return (
    <div css={buttonWrapper}>
      <div>
        <div className="description">Small</div>
        <Button size="small">BUTTON</Button>
      </div>
      <div>
        <div className="description">Medium</div>
        <Button size="medium">BUTTON</Button>
      </div>
      <div>
        <div className="description">Big</div>
        <Button size="big">BUTTON</Button>
      </div>
    </div>
  );
};

export const disabled = () => {
  return (
    <div css={buttonWrapper}>
      <div>
        <Button disabled>PRIMARY</Button>
      </div>
      <div>
        <Button disabled theme="secondary">
          SECONDARY
        </Button>
      </div>
      <div>
        <Button disabled theme="tertiary">
          TERTIARY
        </Button>
      </div>
    </div>
  );
};

export const customSized = () => {
  return (
    <div css={buttonWrapper}>
      <div>
        <Button width="20rem">CUSTOM WIDTH</Button>
      </div>
      <div>
        <Button width="100%">FULL WIDTH</Button>
      </div>
    </div>
  );
};

export const withIcon = () => {
  return (
    <div>
      <ButtonGroup>
        <Button size="small">
          <Icon icon="heart" />
          LIKE
        </Button>
        <Button>
          <Icon icon="heart" />
          LIKE
        </Button>
        <Button size="big">
          <Icon icon="heart" /> LIKE
        </Button>
      </ButtonGroup>
    </div>
  );
};
