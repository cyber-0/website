import Link from "next/link";

export default function Footer() {
    return (
        <div className="overflow-hidden border-t bg-base-400 border-base-200">
            <div className="container mx-auto">
                <footer className="footer p-10  text-base-content">
                    <aside>
                        <img src="/banner.png" className="w-48" alt="logo" />

                        <div className="grid grid-flow-col gap-4 place-content-center">
                            <a href="https://bbb.iumproject.com/" target="_blank" rel="noreferrer" className="btn btn-ghost btn-sm btn-square">
                                <img src="https://cdn.discordapp.com/emojis/1109072338303078400.webp?size=96&quality=lossless" alt="bbb" className="w-4 h-4" />
                            </a>
                            <a href="https://polymart.iumproject.com/" target="_blank" rel="noreferrer" className="btn btn-ghost btn-sm btn-square">
                                <img src="https://cdn.discordapp.com/emojis/1109072376198594591.webp?size=96&quality=lossless" alt="bbb" className="w-4 h-4" />
                            </a>
                            <a href="https://discord.iumproject.com/" target="_blank" rel="noreferrer" className="btn btn-ghost btn-sm btn-square">
                                <i className="fab fa-discord text-blue-500"></i>
                            </a>
                            <a href="https://github.com/iumprojectt" target="_blank" rel="noreferrer" className="btn btn-ghost btn-sm btn-square">
                                <i className="fab fa-github text-gray-500"></i>
                            </a>
                        </div>
                    </aside>
                    <nav>
                        <header className="footer-title">Website</header>
                        <Link className="hover:text-indigo-400 duration-700" href="/#team">Our Team</Link>
                        <Link className="hover:text-indigo-400 duration-700" href="/#projects">Our Projects</Link>
                        <Link className="hover:text-indigo-400 duration-700" href={"/#products"}>Our Products</Link>
                    </nav>
                    <nav>
                        <header className="footer-title">Legal</header>
                        <Link className="hover:text-indigo-400 duration-700" href="/tos">ToS</Link>
                    </nav>
                    <nav>
                        <header className="footer-title">Contact</header>
                        <a className="hover:text-indigo-400 duration-700" href="mailto:contact@iumproject.com">
                            <i className="fas fa-envelope"></i>
                            <span className="ml-2">
                                Email
                            </span>
                        </a>
                        <a className="hover:text-indigo-400 duration-700" href="https://discord.iumproject.com">
                            <i className="fab fa-discord"></i>
                            <span className="ml-2">
                                Discord
                            </span>
                        </a>
                    </nav>
                </footer>
                <p className="text-center text-sm text-base-content hover:text-primary duration-500"><a href="https://github.com/iumprojectt/website" target="_blank" rel="noreferrer">This website is published as open source on github.</a></p>
                <p className="text-center text-sm text-base-content py-2">© {new Date().getFullYear()} iumproject.com. All rights reserved.</p>
            </div>
        </div>
    )
}