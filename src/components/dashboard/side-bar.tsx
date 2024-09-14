import { LogoIcon, PlusIcon, QuestionIcon } from "@/assets/icons";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Link, NavLink } from "react-router-dom";
import { sidenavPath } from "@/utlis/sidenav-path";
import { routes } from "@/utlis/routes";

export default function SideBar() {
  const textGradient =
    "bg-gradient-to-r blur-xs from-[var(--pry-color)] to-[var(--purple-color)] bg-clip-text text-transparent";
  return (
    <div className="bg-[--bg-color] w-[270px] flex flex-col relative ">
      <div className=" absolute top-0 w-full bg-[--bg-color] ">
        <div className="flex items-center justify-center gap-x-4 my-5">
          <img src={LogoIcon} className={cn("")} alt="icon" />
          <h2
            className={cn(
              textGradient,
              "font-bold text-[32px] text-center select-none"
            )}
          >
            Scrutz
          </h2>
        </div>
      </div>
      <div className="h-full ml-5 pr-7 mt-[108px] mb-[208px] custom-hover-scrollbar">
        <Link to={routes.ADD_CAMPAIGN} className="block mx-auto">
          <Button className="space-x-[10px] !py-[10px] w-full hover:border-transparent">
            <img src={PlusIcon} />
            New Campaign
          </Button>
        </Link>
        <div className="mt-9 space-y-4">
          {sidenavPath.map((path) => (
            <NavLink
              to={path.path}
              key={path.name}
              className={({ isActive }) =>
                cn([
                  "flex items-center py-2 gap-x-2 pl-5 text-sm font-semibold w-full rounded-tr rounded-br ",
                  isActive
                    ? "text-[var(--pry-color)] !fill-[var(--pry-color)] hover:text-[var(--pry-color)] bg-white"
                    : "text-[var(--text-color)] !fill-[var(--text-color)] !font-medium hover:bg-[var(--pry-hsl)] hover:text-[var(--text-color2)]",
                ])
              }
            >
              {path.icon}
              {path.name}
            </NavLink>
          ))}
        </div>
      </div>
      <div className="bg-[--bg-color] pb-4 pt-5 absolute bottom-0">
        <div className="bg-white rounded mx-6 group hover:scale-[1.0125] transition-transform ease-linear">
          <div className="text-center space-y-1 px-5 py-5">
            <img
              src={QuestionIcon}
              className={cn("mx-auto group-hover:animate-rotate-icon")}
              alt="need help icon"
            />
            <h5 className={cn(textGradient, "font-semibold text-sm")}>
              Need help?
            </h5>
            <p className="text-[var(--text-color)] text-xs font-medium text-center">
              We’re readily available to provide help
            </p>
            <Button
              className="font-semibold text-sm !px-6 !py-2 !mt-3 hover:text-[var(--pry-color)] hover:border-base/25 hover:bg-transparent"
              variant="outline"
            >
              Get help
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
