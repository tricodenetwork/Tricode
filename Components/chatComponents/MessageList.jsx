import { userArray } from "@/lib/constants/fakeUsers";
import { extractHoursAndMinutes } from "@/lib/utils/dateFunctions";
import Image from "next/image";

export default function MessageList() {
    return (<section className=" w-full h-full overflow-scroll ">{
        userArray.map((user, key) => (
            <div className="flex items-start gap-2 hover:bg-gray-100 p-2 rounded-sm" key={key+user.lastOnline}>
                <Image src={'/assets/icons/Ellipse.png'} alt="" width={34} height={34} className="w-[45px] h-[45px] rounded-full" />
                <div>
                    <div className="font-bold capitalize">{user.fullName}</div>
                    <p className="text-sm">{extractHoursAndMinutes(user.lastOnline)}</p>
                </div>
         </div>
      ))
  }</section>);
}
