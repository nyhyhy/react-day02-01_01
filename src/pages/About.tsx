import { useNavigate } from "react-router-dom";
function About() {
    const navigate = useNavigate();
    return (
        <div>
            <h1>About</h1>
            <button
                className="mt-4 inline-flex items-center px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 active:scale-[.98] transition focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
                onClick={() => {
                    alert("Welcome 페이지로 이동!");
                    navigate("/welcome");
                }}
            >Welcome 페이지로 이동 
            </button>
        </div>
    );
}

export default About;