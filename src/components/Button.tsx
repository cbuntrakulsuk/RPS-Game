interface Props {
  children: string;
  styles: string;
  onClick: () => void;
}

const Button = ({ children, styles, onClick }: Props) => {
  return (
    <button className={styles} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
