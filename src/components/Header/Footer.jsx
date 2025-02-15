import Link from "next/link";

export default function Footer() {
    return (
        <div className="overflow-hidden border-t bg-base-400 border-base-200">
            <div className="container mx-auto">
                <footer className="footer p-10  text-base-content">
                    <aside>
                        <img src="https://cdn.discordapp.com/attachments/1083840135055032330/1178378886451560549/dijicoresembol.png?ex=6575eddb&is=656378db&hm=772a5d3ba65485529d1369f4287f0f09469461d30a1f27836df6c9d85fc701b2&" className="w-48" alt="logo" />

                        <div className="grid grid-flow-col gap-4 place-content-center">
                            <a href="https://bbb.dijicore.com/" target="_blank" rel="noreferrer" className="btn btn-ghost btn-sm btn-square">
                                <img src="https://cdn.discordapp.com/emojis/1109072338303078400.webp?size=96&quality=lossless" alt="bbb" className="w-4 h-4" />
                            </a>
                            <a href="https://polymart.dijicore.com/" target="_blank" rel="noreferrer" className="btn btn-ghost btn-sm btn-square">
                                <img src="https://cdn.discordapp.com/emojis/1109072376198594591.webp?size=96&quality=lossless" alt="bbb" className="w-4 h-4" />
                            </a>
                            <a href="https://discord.gg/xvkZ72htF7" target="_blank" rel="noreferrer" className="btn btn-ghost btn-sm btn-square">
                                <i className="fab fa-discord text-blue-500"></i>
                            </a>
                            <a href="https://github.com/dijicore" target="_blank" rel="noreferrer" className="btn btn-ghost btn-sm btn-square">
                                <i className="fab fa-github text-gray-500"></i>
                            </a>
                        </div>
                    </aside>
                    <nav>
                        <header className="footer-title">Website</header>
                        <Link className="hover:text-indigo-400 duration-700" href="/#team">Takımımız</Link>
                        <Link className="hover:text-indigo-400 duration-700" href="/#projects">Projelerimiz</Link>
                        <Link className="hover:text-indigo-400 duration-700" href={"/#products"}>Ürünlerimiz</Link>
                    </nav>
                    <nav>
                        <header className="footer-title">Legal</header>
                        <Link className="hover:text-indigo-400 duration-700" href="/tos">ToS</Link>
                    </nav>
                    <nav>
                        <header className="footer-title">İletişim</header>
                        <a className="hover:text-indigo-400 duration-700" href="mailto:contact@dijicore.com">
                            <i className="fas fa-envelope"></i>
                            <span className="ml-2">
                                Email
                            </span>
                        </a>
                        <a className="hover:text-indigo-400 duration-700" href="https://discord.gg/xvkZ72htF7">
                            <i className="fab fa-discord"></i>
                            <span className="ml-2">
                                Discord
                            </span>
                        </a>
                    </nav>
                </footer>
                <p className="text-center text-sm text-base-content hover:text-primary duration-500"><a href="https://discord.gg/xvkZ72htF7" target="_blank" rel="noreferrer">Discord sunucumuza katılmayı unutmayın!</a></p>
                <p className="text-center text-sm text-base-content py-2">© {new Date().getFullYear()} Dijicore Tüm Haklarını Saklı Tutar.</p>
            </div>
        </div>
    )
}
