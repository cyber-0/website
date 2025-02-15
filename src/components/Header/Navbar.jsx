import Link from "next/link";

export default function Navbar() {
  return (<>
    <div className="fixed navbar backdrop-blur-sm	 shadow-lg w-full z-10 top-0">
      <div className="navbar-start">
        <Link className="btn btn-ghost normal-case text-xl" href="/">
          <img src="https://cdn.discordapp.com/attachments/1175794130199257129/1178383881267839098/dijibn.png?ex=6575f282&is=65637d82&hm=c97e5d6975c53bbb5ed54be9189d568d32d3bb7746897176fb275f8ece7fabcf&" className="w-36" alt="dijicorebanner" loading="lazy" />
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
