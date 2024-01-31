import { Link } from "react-router-dom";
import PageNav from "../components/PageNav.jsx";

const HomePage = () => {
  return (
    <div>
      <PageNav />
      <h1>WorldWise</h1>
      <Link to="/app">Go to the app</Link>
    </div>
  );
};

export default HomePage;