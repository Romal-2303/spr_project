import DefaultLayout from "@/components/DefaultLayout/DefaultLayout";
import Homepage from "@/components/Homepage/Homepage";
import Image from "next/image";

function page() {
  return (
    <DefaultLayout>
      <Homepage />
    </DefaultLayout>
  );
}

export default page;
