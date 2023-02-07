import Projects from "../components/Projects";
import Clients from "../components/Clients";
import AddClientModal from "../components/AddClientModal";
import AddProjectModal from "../components/AddProjectModal";

export default function Home() {
  return (
    <>
    <div className="d-flex gap-4 mb-4">
    <AddClientModal />
    <AddProjectModal />
    </div>
    <Projects />
    <hr />
    <Clients />
    </>
  );
}
