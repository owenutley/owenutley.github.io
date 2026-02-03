import faceImg from "../../assets/face-char.png";
import "./Home.css";

function Home() {
    return (
        <main>
            <h1>Welcome to the Home Page</h1>
            <img src={faceImg} alt="Profile Face" className="profile-face"/>
        </main>
    );
}

export default Home;