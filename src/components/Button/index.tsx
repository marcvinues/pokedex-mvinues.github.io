import "./style.scss";
interface BtnProps {
  disabled?: boolean;
  onClick: () => void;
  children: string;
}

export const Button = ({ disabled, onClick, children }: BtnProps) => (
  <button className="btn" disabled={disabled} onClick={onClick}>
    {children}
  </button>
);
