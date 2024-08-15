import { ReactNode } from "react";

interface Props{
    children: ReactNode;
}
const Content:React.FC<Props> = ({children}) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default Content
