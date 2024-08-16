import { RiFilterLine } from "react-icons/ri";
import Title from "../../ui/Title";
import { HiMiniBarsArrowUp } from "react-icons/hi2";
import { BsThreeDotsVertical } from "react-icons/bs";

const Market = () => {
  return (
    <div className="bg-white p-3 rounded-2xl flex-1">
      <div className="flex justify-between items-center">
        <Title>Currencies Market</Title>
        <div className="flex justify-center">
          <RiFilterLine className="rounded-full w-8 h-8" />
          <HiMiniBarsArrowUp className=" rounded-full w-8 h-8" />
        </div>
      </div>

      <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-4 py-2 md:px-6 md:py-3">Name</th>
            <th scope="col" className="px-4 py-2 md:px-6 md:py-3">Amount</th>
            <th scope="col" className="px-4 py-2 md:px-6 md:py-3">Date</th>
            <th scope="col" className="px-4 py-2 md:px-6 md:py-3">Status</th>
            <th scope="col" className="px-4 py-2 md:px-6 md:py-3"></th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-4 py-2 md:px-6 md:py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Apple MacBook Pro 17"
            </th>
            <td className="px-4 py-2 md:px-6 md:py-4">34000</td>
            <td className="px-4 py-2 md:px-6 md:py-4">14 Apr 2024</td>
            <td className="px-4 py-2 md:px-6 md:py-4">Paid</td>
            <td className="px-4 py-2 md:px-6 md:py-4">
              <BsThreeDotsVertical />
            </td>
          </tr>
          <tr className="bg-white dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-4 py-2 md:px-6 md:py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Apple MacBook Pro 17"
            </th>
            <td className="px-4 py-2 md:px-6 md:py-4">34000</td>
            <td className="px-4 py-2 md:px-6 md:py-4">14 Apr 2024</td>
            <td className="px-4 py-2 md:px-6 md:py-4">Paid</td>
            <td className="px-4 py-2 md:px-6 md:py-4">
              <BsThreeDotsVertical />
            </td>
          </tr>
          <tr className="bg-white dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-4 py-2 md:px-6 md:py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Apple MacBook Pro 17"
            </th>
            <td className="px-4 py-2 md:px-6 md:py-4">34000</td>
            <td className="px-4 py-2 md:px-6 md:py-4">14 Apr 2024</td>
            <td className="px-4 py-2 md:px-6 md:py-4">Paid</td>
            <td className="px-4 py-2 md:px-6 md:py-4">
              <BsThreeDotsVertical />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default Market;
