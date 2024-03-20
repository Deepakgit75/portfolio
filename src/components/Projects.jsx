import React from 'react'

const Projects = ({userData}) => {
    return (
        <div className='pt-10'>
            <section id='projects' className=" projects mt-16">
                <div className="container mx-auto">
                    <h2 className="text-5xl font-extrabold mb-8">Projects</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {userData.projects?.map(project => (
                            <div key={project._id} className="relative overflow-hidden rounded-lg shadow-lg">
                                <img
                                    src={project.image.url}
                                    alt={project.title}
                                    className="w-full h-auto object-cover object-center"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity opacity-0 hover:opacity-100">
                                    <div className="absolute inset-0 flex top-1 left-1  opacity-0 hover:opacity-100">
                                        <h3 className="text-white text-4xl font-semibold">{project.title}</h3>
                                    </div>
                                    <div className="absolute bottom-0 left-0 p-4">
                                        <p className="text-white">{project.description}</p>
                                    </div>
                                    <ul className="absolute bottom-0 right-0 p-4 font-bold text-lg text-white">
                                        {project.techStack?.map(tech => (
                                            <li key={tech}>{tech}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Projects
