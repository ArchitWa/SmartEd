export default function UserCard(props) {
    return (
        <div className={`h-[6rem] w-[90%] ml-[5%] rounded-lg bg-white shadow-full hover:animate-pulse ${props.first == "true" ? "mt-10 " : ""}`}>
            <div className="grid grid-cols-3 gap-x-2">
                <img src={props.pfp} className="w-[4.2rem] h-[4.2rem] border-2 border-crystal ml-2 rounded-full mt-3"></img>
                <div className="grid align-middle my-auto mt-6 -ml-[2rem]">
                    <h2 className="font-semibold first-letter:uppercase text-xl w-[20rem]">{props.name}</h2>
                    <h3 className="font-normal text-sm ">{props.lastMsg.length > 15 ? props.lastMsg.substring(0, 12) + "..." : props.lastMsg}</h3>
                </div>
                <h4 className="font-light font-sm ml-[2.5rem] mt-[4rem] w-[6rem]">{props.time}</h4>
            </div>
        </div>
    )
}