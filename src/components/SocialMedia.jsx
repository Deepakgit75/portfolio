import React from 'react'

const SocialMedia = ({ userData }) => {
    return (
        <div>
            <section id='social' className="social-media py-16 bg-gray-100">
                <div className="container mx-auto">
                    <h2 className="font-extrabold text-5xl text-center mb-8">Social Media</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
                        {userData.social_handles?.map(handle => (
                            <div key={handle._id} className=" flex items-center justify-center p-4 bg-white rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
                                <img src={handle.image.url} alt={handle.platform} className="h-12 w-12 mr-2" />
                                <a href={handle.url} className="text-lg font-semibold text-slate-700  hover:text-blue-700 transition-colors">{handle.platform}</a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SocialMedia
