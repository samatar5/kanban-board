import "./Sidebar.scss";

import { useBoardContext } from "../../context/BoardsContext";
import ProjectsLinks from "../ProjectsLinks/ProjectsLinks";

export default function Sidebar() {
  const { projects } = useBoardContext();

  return (
    <div className="sidebar">
      <p>All BOARDS ( {projects.length} )</p>
      <ProjectsLinks />
    </div>
  );
}
