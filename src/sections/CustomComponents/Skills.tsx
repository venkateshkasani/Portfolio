
export default function Skills() {
    const skills = ["React", "Next.js","TypeScript", "TailwindCSS","Nest.js","Express.js","MongoDB","PostgreSQL","GSAP","Reactflow","Solidity","Java"]
  return (
      <section className="flex flex-col items-center px-5 md:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-5xl text-slate-600 mb-10 pt-5">Tech stack</h2>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-5">
              {skills.map((skill, index) => (
              <SkillItem name={skill} key={index} />
          ))}
          </div>
    </section>
  )
}

export const SkillItem = ({name}:{name:string}) => {
    return (
        <span className="flex items-center m-1 justify-center px-4 py-2 rounded-full w-fit bg-slate-900">
            <p className="text-xs">{name}</p>
       </span>
    )
}
