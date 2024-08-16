
const BalanceIncome = () => {
  return (
    <div className="p-5 rounded-2xl flex-1 w-full lg:w-[800px] mb-3">
    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="flex gap-1 bg-white rounded-2xl mt-4 w-full md:w-1/2 h-48">
        <div className="flex justify-between flex-col w-full">
          <div className="flex justify-start mx-5 py-3 flex-col">
            <h1 className="font-bold">Total balance</h1>
          </div>
          <h1 className="font-extrabold size-8 mx-5 text-3xl mb-2">$1400</h1>
        </div>
        <div className="flex justify-end mx-5">
          <div className="py-6 bg-white rounded-lg p-5 flex items-center justify-center"></div>
        </div>
      </div>

      <div className="flex gap-1 bg-white rounded-2xl mt-4 w-full md:w-1/2 h-48">
        <div className="flex justify-between flex-col w-full">
          <div className="flex justify-start mx-5 py-3 flex-col">
            <h1 className="font-bold">Income</h1>
          </div>
          <h1 className="font-extrabold size-8 mx-5 text-3xl mb-2">$1400</h1>
        </div>
        <div className="flex justify-end mx-5">
          <div className="py-6 bg-white rounded-lg p-5 flex items-center justify-center"></div>
        </div>
      </div>        
     
    </div>
  </div>
  )
}

export default BalanceIncome
