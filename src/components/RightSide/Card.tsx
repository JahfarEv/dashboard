import Expences from "./Expences"
import QuickTransfer from "./QuickTransfer"
import YourCard from "./YourCard"

const Card = () => {
  return (
    <div className="px-2 py-4 mt-2 bg-gray-200 rounded-lg w-full md:w-[300px] xl:w-80 flex flex-col justify-between gap-4">
      <YourCard/>
      <QuickTransfer/>
      <Expences/>
    </div>
  )
}

export default Card
