export const TeamCard = ({
    name,
    nickname,
    title,
    image,
    website,
    discord,
    instagram,
    linkedin
}) => {
    return (
        <div className="flex" data-aos="fade-up">
            <img
                className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                src={image ? image : "/logo.png"}
                alt={name}
            />
            <div className="flex flex-col justify-center">
                <p className="text-lg font-bold">{name} ({nickname})</p>
                <p className="text-sm text-primary">{title}</p>
                <div className="flex items-center mt-2">
                    {discord && (
                        <a
                            href={"https://discord.com/channels/@me/"+discord}
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-ghost btn-sm btn-square"
                        >
                            <i className="fab fa-discord text-blue-500"></i>
                        </a>
                    )}
                    {instagram && (
                        <a
                            href={instagram}
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-ghost btn-sm btn-square"
                        >
                            <i className="fab fa-instagram text-pink-500"></i>
                        </a>
                    )}
                    {linkedin && (
                        <a
                            href={linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-ghost btn-sm btn-square"
                        >
                            <i className="fab fa-linkedin text-blue-500"></i>
                        </a>
                    )}
                    {website && (
                        <a
                            href={website}
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-ghost btn-sm btn-square"
                        >
                            <i className="fas fa-globe"></i>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};