import React from 'react'

const Services = ({userData}) => {
    return (
        <div>
            <section id='services' className="w-full flex flex-col">
                <div className="container ">
                    <h2 className="text-5xl font-extrabold p-4">Services</h2>
                    <div>
                        {userData.services?.map((service, index) => (
                            <div key={service._id} className={`flex mt-8 justify-between ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                                <div className="flex flex-col justify-center items-start gap-4 p-6 ">
                                    <h3 className="font-extrabold text-3xl">{service.name}</h3>
                                    <p className="text-justify text-gray-800">{service.desc}</p>
                                    <p className="font-bold text-2xl text-green-500">{service.charge}</p>
                                </div>
                                <div className="p-0 m-8 shadow-lg shadow-slate-900 rounded-md overflow-hidden">
                                    <img src={service.image.url} alt={service.name} className="w-full h-auto object-cover object-center " />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services
