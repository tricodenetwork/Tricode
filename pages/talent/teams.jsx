
import TalentLayout from "@/Components/layouts/TalentLayout";
import Image from "next/image";

function Teams() {

  return (
    <section className=" ">
       team
    </section>
  );
}


Teams.getLayout = function getLayout(page) {
    return <TalentLayout>{page}</TalentLayout>;
  };
export default Teams;