import React from 'react'

const Testomonial = ({userData}) => {
    return (
        <div>
            <section id='testimonial' className=" py-16 bg-gray-100">
                <div className="container mx-auto">
                    <h2 className="font-extrabold text-5xl text-center mb-8">Testimonials</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 rounded-md">
                        {userData.testimonials?.map(testimonial => (
                            <div key={testimonial._id} className="testimonial-card p-6 bg-white rounded-lg shadow-lg">
                                <img src={testimonial.image.url} alt={testimonial.name} className="h-12 w-12 rounded-full mb-4" />
                                <h3 className="text-lg font-semibold text-[#343D68]">{testimonial.name}</h3>
                                <p className="text-gray-600 mb-4">{testimonial.review}</p>
                                <p className="text-sm font-semibold text-[#343D68]">{testimonial.position}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testomonial
