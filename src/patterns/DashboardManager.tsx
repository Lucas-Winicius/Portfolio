import EmptyDashboard from "@/components/EmptyDashboard";
import { useSearchParams } from "next/navigation";
import ViewProjects from "./ViewProjects";
import ViewPosts from "./ViewPosts";
import ViewTecs from "./ViewTecs";
import ViewMessages from "./ViewMessages";
import ViewAbout from "./ViewAbout";

function DashboardManager() {
  const mode = useSearchParams().get("mode");

  if (mode == "projects") return <ViewProjects />;
  if (mode == "posts") return <ViewPosts />;
  if (mode == "technologies") return <ViewTecs/>;
  if (mode == "messages") return <ViewMessages/>;
  if (mode == "about") return <ViewAbout/>;

  return <EmptyDashboard/>
}

export default DashboardManager;
