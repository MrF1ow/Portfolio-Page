/* Local Imports */
import Experience from "./experience";
import SubSectionTitle from "../../../components/sub-section-title";

/*
 * ExperiencePanel Component
 *
 * This component is used to manage the experience panel.
 *
 * @param {string} title - The title of the experience panel.
 * @param {ExperiencePanelProps} data - The data to be displayed in the experience panel.
 *
 * @returns {JSX.Element} - The ExperiencePanel component.
 *
 * */
function ExperiencePanel({
  title,
  data,
}: ExperiencePanelProps): JSX.Element {
  return (
    <>
      <SubSectionTitle title={title} />
      <Experience data={data} />
    </>
  );
}

export default ExperiencePanel;
