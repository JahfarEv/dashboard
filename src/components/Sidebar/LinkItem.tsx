interface Props {
  href: string;
  icon: any;
}

const LinkItem = ({ href, icon: Icon }: Props) => {
  return (
    <li>
      <a href={href} className="flex items-center p-2 text-white rounded-lg hover:bg-gray-100 hover:text-black">
        <Icon />
      </a>
    </li>
  );
};

export default LinkItem;
