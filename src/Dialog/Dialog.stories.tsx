/** @jsxImportSource @emotion/react */
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { css } from "@emotion/react";
import Dialog from "./Dialog";

export default {
  title: "components|Dialog",
  component: Dialog,
  parameters: {
    docs: {
      // NOTE: https://storybook.js.org/docs/react/writing-docs/docs-page#inline-stories-vs-iframe-stories
      inlineStories: false,
      iframeHeight: "500px",
    },
  },
} as ComponentMeta<typeof Dialog>;

const Template: ComponentStory<typeof Dialog> = (args) => <Dialog {...args} />;
export const dialog: ComponentStory<typeof Dialog> = Template.bind({});

dialog.args = {
  // TODO: Fill default args
  title: "결제 성공",
  description: "결제가 성공적으로 이루어졌습니다.",
  visible: true,
  confirmText: "확인",
  cancelText: "취소",
  cancellable: false,
};

dialog.story = {
  name: "Default",
};

export const cancellable = () => (
  <Dialog
    title="포스트 삭제"
    description="포스트를 정말로 삭제하시겠습니까?"
    visible={true}
    confirmText="삭제"
    cancellable
  />
);

export const customContent = () => (
  <Dialog visible={true} hideButtons>
    Custom Content
  </Dialog>
);
