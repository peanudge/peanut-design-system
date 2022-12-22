/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import { Fragment, PropsWithChildren } from "react";
import Button from "src/Button/Button";
import ButtonGroup from "src/ButtonGroup/ButtonGroup";
import { useTransition, animated } from "@react-spring/web";

export type DialogProps = {
  visible: boolean;
  title?: string;
  description?: string;
  hideButtons?: boolean;
  cancellable?: boolean;
  cancelText?: string;
  confirmText?: string;
  onCancel?: () => void;
  onConfirm?: () => void;
};

const Dialog: React.FC<PropsWithChildren<DialogProps>> = ({
  visible,
  title,
  description,
  hideButtons,
  cancellable,
  cancelText = "취소",
  confirmText = "확인",
  children,
  onCancel,
  onConfirm,
}) => {
  const fadeTransition = useTransition(visible, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });
  const slideUpTransition = useTransition(visible, {
    from: {
      transform: `translateY(200px) scale(0.8)`,
      opacity: 0,
    },
    enter: {
      transform: `translateY(0px) scale(1)`,
      opacity: 1,
    },
    leave: {
      transform: `translateY(200px) scale(0.8)`,
      opacity: 0,
    },
    config: {
      tension: 200,
      friction: 15
    }
  });

  return (
    <Fragment>
      {fadeTransition((style, item) =>
        item ? (
          <animated.div css={[fullscreen, darkLayer]} style={style} />
        ) : null
      )}

      {slideUpTransition((style, item) =>
        item ? (
          <animated.div css={[fullscreen, whiteBoxWrapper]} style={style}>
            <div css={whiteBox}>
              {title && <h3>{title}</h3>}
              {description && <p>{description}</p>}
              {children}
              {!hideButtons && (
                <ButtonGroup css={{ marginTop: "3rem" }} rightAlign>
                  {cancellable && (
                    <Button theme="tertiary" onClick={onCancel}>
                      {cancelText}
                    </Button>
                  )}
                  <Button onClick={onConfirm}>{confirmText}</Button>
                </ButtonGroup>
              )}
            </div>
          </animated.div>
        ) : null
      )}
    </Fragment>
  );
};

const fullscreen = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const darkLayer = css`
  z-index: 10;
  background: rgba(0, 0, 0, 0.5);
`;

const whiteBoxWrapper = css`
  z-index: 15;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const whiteBox = css`
  box-sizing: border-box;
  border-radius: 4px;
  width: 25rem;
  background: white;
  box-shadow: 0px 4px 8px 8px rgba(0, 0, 0, 0.05);
  padding: 2rem;

  h3 {
    font-size: 1.5rem;
    color: #343a40;
    margin-top: 0;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.125rem;
    margin: 0;
    color: #868e96;
  }
`;

export default Dialog;
