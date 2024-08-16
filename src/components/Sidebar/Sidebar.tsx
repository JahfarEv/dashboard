import { links } from "../../Icons";
import LinkItem from "./LinkItem";

const Sidebar = () => {
  return (
    <aside className="fixed top-3 left-3 z-40 h-screen pt-20 bg-black border-r border-gray-200 rounded-3xl text-white hidden md:block">
      <div className="h-full px-3 pb-4 overflow-y-auto flex justify-between">
        <ul className="space-y-2 font-medium">
          {
            links.map((link,index)=> (
              <LinkItem key={index} {...link}/>
            ))
          }
        </ul>

      </div>
    </aside>
  );
};

export default Sidebar;
