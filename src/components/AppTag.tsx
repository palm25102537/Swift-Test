import { FC } from "react";

interface Props {
  text: string | React.ReactNode;
}

const AppTag: FC<Props> = ({ text }) => {
  return (
    <>
      <div className="absolute bottom-0 bg-lime text-white tag">{text}</div>
    </>
  );
};

export default AppTag;
