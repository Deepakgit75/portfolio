import React from 'react'

const Skills = ({userData}) => {
    return (
        <div>
            <section id='skills' className="skills bg-gray-100 py-16">
                <div className="container mx-auto">
                    <h2 className="font-extrabold text-5xl text-center mb-8">Skills</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {userData.skills?.map(skill => (
                            <div key={skill._id} className="flex items-center justify-center p-4 rounded-lg shadow-lg bg-white hover:scale-105 transition-all ease-linear">
                                <img src={skill.image.url} alt={skill.name} className="h-12 w-12 mr-4 hover:scale-105 transition-all ease-in-out" />
                                <div>
                                    <p className="font-semibold text-lg">{skill.name}</p>
                                    <div className="flex items-center">
                                        <div className="h-3 bg-gray-300 rounded-full w-32 mr-2">
                                            <div className="h-full bg-green-500 rounded-full" style={{ width: skill.percentage }}></div>
                                        </div>
                                        <p>{skill.percentage}%</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Skills
