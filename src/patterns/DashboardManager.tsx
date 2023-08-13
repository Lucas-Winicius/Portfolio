import EmptyDashboard from "@/components/EmptyDashboard";
import { useSearchParams } from "next/navigation";
import ViewProjects from "./ViewProjects";
import ViewPosts from "./ViewPosts";

function DashboardManager() {
  const mode = useSearchParams().get("mode");

  if (mode == "projects") return <ViewProjects />;
  if (mode == "posts") return <ViewPosts />;
  if (mode == "technologies") return <h1>TECNOLOGIAS</h1>;

  return <EmptyDashboard/>
}

export default DashboardManager;
