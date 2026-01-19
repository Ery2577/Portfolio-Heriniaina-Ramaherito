
export default function Contact() {
    const socialLinks = [
        {
            name: "Gmail",
            value: "heriniainaramaherito@gmail.com",
            href: "mailto: heriniainaramaherito@gmail.com",
            color: "hover:text-red-500"
        },
        {
            name: "LinkedIn",
            value: "Heriniaina Ramaherito",
            href: "https://www.linkedin.com/in/heriniaina-ramaherito-b71025373/",      
            color: "hover:text-blue-600"
        },
        {
            name: "GitHub",
            value: "Ery2577",
            href: "https://github.com/Ery2577",  
            color: "hover:text-gray-400"
        },
        {
            name: "WhatsApp",
            value: "+261 34 44 099 44",
            href: "https://wa.me/261344409944",  
            color: "hover:text-green-500"
        }
    ];

    return (
        <section id="contact" className="py-16 px-4 max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">CONTACT ME</h2>
                <p className="text-gray-600">
                   I am ready for different exchanges and collaborations in your company. 
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {socialLinks.map((link, index) => (
                    <a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center p-4 border rounded-lg transition-all duration-300 hover:shadow-md ${link.color} group`}
                    >
                        <div className="mr-4"> </div>
                        <div className="flex-1">
                            <h3 className="font-semibold">{link.name}</h3>
                            <p className="text-sm text-gray-500">{link.value}</p>
                        </div>
                       
                    </a>
                ))}
            </div>

            <div className="mt-12 text-center">
                <p className="text-sm text-gray-400">
                    Located in Antananarivo - Madagascar • Available for telecommuting
                </p>
            </div>
        </section>
    );
}