import Card from "./Card"
export default function Box(){
    return (
        <div className="w-80 mx-auto" >
            {/* title */}
            <div className="font-bold pt-4 border-b border-black">
                <h3>Breakfast</h3>
            </div>
            <div className="mt-4 flex justify-between">
                <div className="ml-2 border border-blue-500 shadow-lg rounded-md">
                    <Card/>
                </div>
                <div className="ml-2 border border-blue-500 shadow-lg rounded-md">
                    <Card/>
                </div>

            </div>
        </div>
    )
}