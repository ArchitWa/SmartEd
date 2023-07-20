export default function ChatBubble(props) {
    if (props.start == "true") {
        return (
            <div className="flex">
                <img src={props.pfp} className="w-[3.2rem] h-[3.2rem] mt-[5rem] border-2 border-crystal ml-2 rounded-full"></img>
                <div class="w-[30rem] ml-4 -mt-[1rem] ">
                    <div class="bg-white rounded-r-xl rounded-t-xl  text-xl h-[5rem] shadow-full">
                        <h4 className="relative mt-[2rem] text-black font-extralight pl-3 pt-3">{props.msg}</h4>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="flex justify-end mr-2">
                <div class=" mr-2 -mt-[0rem] text-end ">
                    <div class="bg-zaffre-100 rounded-l-xl rounded-t-xl  text-xl h-[4rem] shadow-full">
                        <h4 className="relative mt-[2rem] font-extralight text-black px-3 pt-2">{props.msg}</h4>
                    </div>
                </div>
                <img src={props.pfp} className="w-[3.2rem] h-[3.2rem] mt-[5rem] border-2 border-crystal ml-2 rounded-full"></img>
            </div>
        )
    }

}