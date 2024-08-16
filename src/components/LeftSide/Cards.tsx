import BalanceIncome from "./BalanceIncome"
import Currency from "./Currency"
import Market from "./Market"

const Cards = () => {
  return (
    <div>
        <BalanceIncome/>
        <Currency/>
        <div className="flex flex-col sm:flex-row gap-5 max-md:w-[2/3]]">
      <Market/>
      </div>
    </div>
  )
}

export default Cards
