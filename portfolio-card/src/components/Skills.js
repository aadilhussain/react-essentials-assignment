import SkillBadge from "./SkillBadge";

function Skills({ skills }) {
    return (
        <>
            <h3>Skills</h3>

            <div className="skills">
                {skills.map((skill) => (
                    <SkillBadge
                        key={skill}
                        skill={skill}
                    />
                ))}
            </div>
        </>
    );
}

export default Skills;