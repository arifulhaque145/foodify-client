import MenuDetails from "../../pages/MenuDetails";

export default function MenuModal() {
  return (
    <div>
      <button
        className="btn"
        onClick={() => document.getElementById("menu").showModal()}
      >
        open modal
      </button>
      <dialog id="menu" className="modal">
        <div className="modal-box max-w-5xl">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <MenuDetails />
        </div>
      </dialog>
    </div>
  );
}
