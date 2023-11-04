import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  styles: string;
  onClick: () => any;
}

const Button = ({ children, styles, onClick }: Props) => {
  return (
    <button className={styles} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
