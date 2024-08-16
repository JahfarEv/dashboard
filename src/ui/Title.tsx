import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const Title: React.FC<Props> = ({ children }) => {
  return <h2 className="font-bold text-gray-700 text-2xl">{children}</h2>;
};

export default Title;
