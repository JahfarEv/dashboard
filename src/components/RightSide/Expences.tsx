import { Bar, BarChart } from "recharts";
interface DataItem {
  week: string;
  expence: number;
  color: any;
}

const Expences = () => {
  const data: DataItem[] = [
    { week: "week1", expence: 2000, color: "#fafafa" },
    { week: "week2", expence: 5000, color: "#82ca9d" },
    { week: "week3", expence: 8000, color: "#82ca9d" },
    { week: "week4", expence: 16000, color: "#FF0000" },
  ];
  return (
    <div className=" bg-white py-6 gap-3 rounded-2xl ">
      <div className="flex items-start justify-between">
        <h1 className="my-1 font-bold mx-2">Expense</h1>
        <span className="mb-4 flex justify-end mx-2 bg-green-300 rounded-3xl font-semibold px-1 text-sm">
          Week
        </span>
      </div>
      <div className="w-full flex items-center justify-center">
        <BarChart width={400} height={100} data={data} barSize={29}>
          <Bar dataKey="expence" fill="#FF0000" />
        </BarChart>
      </div>
    </div>
  );
};

export default Expences;
