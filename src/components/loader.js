import "../../src/app/globals.css"

export default function Loader({loading}) {
    return (
        <div
            className={`min-h-screen w-screen ${
                loading ? "absolute" : "hidden"
            } bg-[#0000008d] overflow-hidden`}
        >
            <span className="loader"></span>
        </div>
    );
}
