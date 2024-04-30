import { Button } from "antd";
import AppTag from "../AppTag";
import { FC } from "react";

interface Props {
  clickLeft?: () => void;
  clickRight?: () => void;
  clickUp?: () => void;
  clickDown?: () => void;
}

const ButtonControlLayout: FC<Props> = ({
  clickUp,
  clickDown,
  clickLeft,
  clickRight,
}) => {
  return (
    <div className="d-flex flex-wrap items-center justify-center gap-5 mt-10">
      <Button
        size="large"
        className="d-flex items-center justify-center flex-wrap basis-200"
        onClick={clickLeft ? () => clickLeft : undefined}
      >
        <span className="arrow trans-left"></span>
        <AppTag text="Move Shape" />
      </Button>
      <Button
        size="large"
        className="d-flex items-center justify-center"
        onClick={clickUp ? () => clickUp : undefined}
      >
        <span className="arrow"></span>
        <AppTag text="Move Position" />
      </Button>
      <Button
        size="large"
        className="d-flex items-center justify-center"
        onClick={clickDown ? () => clickDown : undefined}
      >
        <span className="arrow trans-down"></span>
        <AppTag text="Move Position" />
      </Button>
      <Button
        size="large"
        className="d-flex items-center justify-center"
        onClick={clickRight ? () => clickRight : undefined}
      >
        <span className="arrow trans-right"></span>
        <AppTag text="Move Shape" />
      </Button>
    </div>
  );
};

export default ButtonControlLayout;
