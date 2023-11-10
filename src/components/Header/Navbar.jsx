import Link from "next/link";

export default function Navbar() {
  return (<>
    <div className="fixed navbar backdrop-blur-sm	 shadow-lg w-full z-10 top-0">
      <div className="navbar-start">
        <Link className="btn btn-ghost normal-case text-xl" href="/">
          <img src="/banner.png" className="w-36" alt="iumprojectbanner" loading="lazy" />
        </Link>
      </div>
      <div className="navbar-end px-8">
        <div className="flex items-center space-x-2">
          <Link href="https://bbb.iumproject.com/" target="_blank" rel="noreferrer" className="btn btn-ghost btn-sm btn-square">
            <img src="https://cdn.discordapp.com/emojis/1109072338303078400.webp?size=96&quality=lossless" alt="bbb" className="w-6 h-6" />
          </Link>
          <Link href="https://polymart.iumproject.com/" target="_blank" rel="noreferrer" className="btn btn-ghost btn-sm btn-square">
            <img src="https://cdn.discordapp.com/emojis/1109072376198594591.webp?size=96&quality=lossless" alt="bbb" className="w-6 h-6" />
          </Link>
          <Link href="https://discord.iumproject.com/" target="_blank" rel="noreferrer" className="btn btn-ghost btn-sm btn-square">
            <i className="fab fa-discord text-blue-500 text-lg"></i>
          </Link>
        </div>
      </div>
    </div>
  </>)
}