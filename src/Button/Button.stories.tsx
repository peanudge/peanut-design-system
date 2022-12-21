/** @jsxImportSource @emotion/react */
import Button from "./Button";
import ButtonGroup from "src/ButtonGroup/ButtonGroup";
import Icon from "src/Icon/Icon";
import { css } from "@emotion/react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "components|Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const button = Template.bind({});

button.args = {
  children: "Click", 
};

button.story = {
  name: "Default",
};

export const primaryButton = Template.bind({});

primaryButton.args = {
  children: "Primary",
  theme: "primary",
};

export const secondaryButton = Template.bind({});

secondaryButton.args = {
  children: "SECONDARY",
  theme: "secondary",
};

export const tertiaryButton = Template.bind({});

tertiaryButton.args = {
  children: "TERTIARY",
  theme: "tertiary",
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
