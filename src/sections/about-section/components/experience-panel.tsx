import Experience from "./experience";
import SubSectionTitle from "../../../components/sub-section-title";
import { ExperiencePanelProps } from "../../../types";

function ExperiencePanel({
  title,
  data,
}: { title: string } & ExperiencePanelProps): JSX.Element {
  return (
    <>
      <SubSectionTitle title={title} />
      <Experience data={data} />
    </>
  );
}

export default ExperiencePanel;
