import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const Main: React.FC<Props> = ({children}) => {
  return <div className="text-gray-500 bg-gray-200 p-4 sm:ml-24 flex flex-col gap-2 md:flex-row transition-all duration-300 mt-[72px] rounded-lg w-[91%] mx-auto justify-between">
{children}</div>;
};

export default Main;
