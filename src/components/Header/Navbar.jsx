import Link from "next/link";

export default function Navbar() {
  return (<>
    <div className="fixed navbar backdrop-blur-sm	 shadow-lg w-full z-10 top-0">
      <div className="navbar-start">
        <Link className="btn btn-ghost normal-case text-xl" href="/">
          <img src="https://cdn.discordapp.com/attachments/1083840135055032330/1178376131498475640/wE9SyGQXkbQ4wAAAABJRU5ErkJggg.png?ex=6575eb4a&is=6563764a&hm=de77f90c9f2cf1c1df068ec009a99b586d62406f740295ba3d1b96d3c5a8aaca&" className="w-36" alt="dijicorebanner" loading="lazy" />
        </Link>
      </div>
      <div className="navbar-end px-8">
        <div className="flex items-center space-x-2">
          <Link href="https://bbb.iumproject.com/" target="_blank" rel="noreferrer" className="btn btn-ghost btn-sm btn-square">
            <img src="https://cdn.discordapp.com/emojis/1109072338303078400.webp?size=96&quality=lossless" alt="bbb" className="w-6 h-6" />
          </Link>
          <Link href="https://instagram.com/dijicore" target="_blank" rel="noreferrer" className="btn btn-ghost btn-sm btn-square">
            <img src="https://cdn.discordapp.com/emojis/1112381164980797470.webp?size=128&quality=lossless" alt="bbb" className="w-6 h-6" />
          </Link>
          <Link href="https://discord.gg/xvkZ72htF7" target="_blank" rel="noreferrer" className="btn btn-ghost btn-sm btn-square">
            <i className="fab fa-discord text-blue-500 text-lg"></i>
          </Link>
        </div>
      </div>
    </div>
  </>)
}
