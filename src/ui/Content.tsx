import { ReactNode } from "react";

interface Props{
    children: ReactNode;
}
const Content:React.FC<Props> = ({children}) => {
  return (
    <div className="flex-1 flex flex-col gap-5">
      {children}
    </div>
  )
}

export default Content
