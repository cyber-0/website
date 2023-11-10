/**
 *
<button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>open modal</button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click the button below to close</p>
    <div className="modal-action">
      <form method="dialog">
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
 */

export default function ProjectCard(
    {
        name, description, website, discord, banner, logo
    }
) {
    return (
        <>
            <div data-aos="fade-up">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure>
                        <img src={banner} alt="banner" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {name}
                        </h2>
                        <p>
                            {description}
                        </p>
                        <div className="card-actions justify-end space-x-1">
                            <button className="btn btn-primary" onClick={() => document?.getElementById(name)?.showModal()}>View</button>
                            <a href={website} target="_blank" className="btn btn-primary" rel="noreferrer">
                                <div className="flex items-center space-x-2">
                                    <span>Visit</span> <i className="fas fa-external-link-alt"></i>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <dialog id={name} className="modal">
                <div className="modal-box">
                    <div className="flex justify-between items-center">
                        <h3 className="font-bold text-lg">{name}</h3>
                        <img src={logo} alt="logo" className="w-12 h-12" />
                    </div>
                    <p className="py-4">
                        {description}
                    </p>
                    <div className="flex items-center space-x-2 mt-12">
                        <a href={discord} target="_blank" rel="noreferrer" className="btn btn-primary">
                            <span>Discord</span> <i className="fab fa-discord"></i>
                        </a>
                        <a href={website} target="_blank" rel="noreferrer" className="btn btn-primary">
                            <span>Visit</span> <i className="fas fa-external-link-alt"></i>
                        </a>
                    </div>
                    <div className="modal-action -mt-12">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>)
}