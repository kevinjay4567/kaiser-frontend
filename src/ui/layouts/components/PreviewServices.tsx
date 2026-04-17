
const services = [
    {
        title: "Corte Clásico",
        description: "Corte a tijera o máquina con acabado perfecto y estilo personalizado.",
        price: "$250",
        duration: "30 min",
    },
    {
        title: "Barba & Afeitado",
        description: "Perfilado de barba con navaja caliente y toalla húmeda.",
        price: "$180",
        duration: "25 min",
    },
    {
        title: "Corte + Barba",
        description: "El combo completo para un look impecable de pies a cabeza.",
        price: "$380",
        duration: "50 min",
    },
    {
        title: "Corte Degradado",
        description: "Fade profesional con transiciones perfectas y diseño libre.",
        price: "$300",
        duration: "40 min",
    },
];

const PreviewServices = () => {
    return (
        <section id="servicios" className="py-24 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-primary font-body text-sm tracking-[0.3em]">
                        NUESTROS SERVICIOS
                    </span>
                    <h2 className="font-heading text-5xl font-bold mt-3">
                        Titulo atractivo para servicios
                    </h2>
                </div>

                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
                    {services.map((service, index) => (
                        <div className="card bg-base-100 w-70 shadow-sm mb-2">

                            <figure>
                                <img
                                    src="https://i.pinimg.com/736x/82/9a/51/829a518ac6e0c3000a99355b8907ba91.jpg"
                                    alt="Shoes"
                                     className="size-80 w-100" />
                            </figure>
                            <div className="card-body" key={index}>
                                <h2 className="card-title">{service.title}</h2>
                                <p>{service.description}</p>
                                <div className="card-actions justify-end pt-2">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default PreviewServices;
