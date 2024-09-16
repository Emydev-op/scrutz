import { ExportIcon, PlusIcon } from "@/assets/icons";
import { Button } from "@/components/ui/button";
import { routes } from "@/utlis/routes";
import { Link } from "react-router-dom";

export default function Overview() {
  return (
    <div className="px-10 py-6 h-full">
      <div className="h-fit">
        <main className="flex justify-between items-center">
          <h3 className="capitalize font-bold text-2xl text-[var(--pry-color)]">
            overview
          </h3>
          <div className="">
            <Button className="text-[var(--pry-color)] bg-[var(--bg-color)] !py-3 px-7 shadow-none rounded hover:bg-[var(--bg-color)] hover:border-transparent hover:shadow ">
              <img src={ExportIcon} alt="" className="mr-2" /> Export
            </Button>
          </div>
        </main>
      </div>
      <section className="h-[95%] grid place-content-center">
        <div className="text-center space-y-8">
          <img
            src="/empty.png"
            alt=""
            className="w-[426px] h-[290px] mx-auto"
          />
          <p className="text-sm font-semibold">
            No activity yet. Create a new campaign to get started
          </p>
          <Link to={routes.ADD_CAMPAIGN} className="block w-fit mx-auto">
            <Button className="space-x-[10px] max-w-44 !py-[10px] w-full hover:border-transparent">
              <img src={PlusIcon} />
              New Campaign
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
