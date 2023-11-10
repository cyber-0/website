export default function ProductCard({
    name, description, type, bbb, polymart, discord, banner
}) {
    return (

        <div data-aos="fade-up">
            <div className="bg-base-100/70 p-4 rounded-lg shadow-lg cursor-pointer transition-all duration-300 mt-12">
                <img src={banner} alt="project" className="h-[10.5rem] w-full rounded-lg object-cover" />
                <div>
                    <h1 className="text-lg font-bold">
                        {name}
                    </h1>
                    <p className="text-sm text-primary">
                        {type}
                    </p>
                </div>
                <p className="text-sm text-">
                    {description}
                </p>
                <div className="flex items-center p-3">
                    <div className="flex items-center justify-center w-full">
                        {bbb && (
                            <a
                                href={bbb}
                                target="_blank"
                                rel="noreferrer"
                                className="btn btn-square btn-primary w-1/2"
                            >
                                <p className="text-sm">
                                    Buy on BBB
                                </p>
                            </a>
                        )}
                        {polymart && (
                            <a
                                href={polymart}
                                target="_blank"
                                rel="noreferrer"
                                className="btn btn-square btn-primary w-1/2"
                            >
                                <p className="text-sm">
                                    Buy on Polymart
                                </p>
                            </a>
                        )}
                        {discord && (
                            <a
                                href={discord}
                                target="_blank"
                                rel="noreferrer"
                                className="btn btn-square btn-primary w-1/2"
                            >
                                <p className="text-sm">
                                    Buy on Discord
                                </p>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}