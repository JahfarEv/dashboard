
const YourCard = () => {
  return (
    <div className="flex items-start bg-white py-6 gap-3 rounded-2xl justify-between">
      <div className="w-2/3 ml-3">
        <h1 className="my-1 font-bold">Your card</h1>
        <span className="bg-blue-200 rounded-full p-1 mb-3">Premium</span>
        <div className="flex gap-3 items-center bg-black p-5 rounded-2xl mt-4 justify-between">
            <div className="w-full">
            <h1 className="text-white mb-5 font-bold">$3984</h1>
            <h5 className="text-white">***5648</h5>
            </div>
            <div className="w-full">
            <h1 className="text-green-500 mb-5 font-bold">VISA</h1>
            <h5 className="text-white">12/26</h5>
            </div>
        </div>
      </div >
      <div className="w-1/3 flex flex-col justify-between">
      <div className="mb-4 flex justify-end mx-2">icon</div>

      <div className="flex bg-gray-100 py-5 rounded-l-lg justify-between mt-8">
      <div className="w-full text-black">
            <h1 className="mb-5 font-bold flex justify-center">$3984</h1>
            <h5 className="flex justify-center">***5648</h5>
            </div>
      </div>

      </div>
    </div>
  )
}

export default YourCard
