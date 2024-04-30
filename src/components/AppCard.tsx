import { FC, PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  onClick?: () => void;
}

const AppCard: FC<Props> = (props) => {
  const { children, onClick } = props;
  return (
    <>
      <div className="card" onClick={onClick}>
        {children}
      </div>
    </>
  );
};

export default AppCard;
