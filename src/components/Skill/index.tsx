import AppStar from "@Components/AppStar";
import { SkillDataType } from "@Services/tools/mappers";
import _ from "lodash";
import Image from "next/image";

type RepositoriesProps = {
  skills: SkillDataType[];
};

const Skill = ({ skills }: RepositoriesProps) => {
  return (
    <section id="repositories">
      <div className="wrapper">
        <h1 className="repositories-title">My Skills</h1>

        <div className="repositories-container">
          {skills?.map((skill) => (
            <div className="repository-card" key={skill.id}>
              <div className="repository-card-top">
                <a className="repository-title" title={`${skill.name}`}>
                  {_.capitalize(skill.name)}
                </a>
                <p className="repository-description">
                  <Image
                    src={skill?.image}
                    width={50}
                    height={50}
                    alt={skill?.name}
                  />
                </p>
                <div className="d-flex content-center">
                  <span>Stars: </span>
                  <AppStar
                    name="rating"
                    numberOfStar={5}
                    star={skill?.star}
                    color="yellow"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
