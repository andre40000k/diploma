import { Link } from "react-router-dom";
import { Button } from "../../components/common";

const Home = () => {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3x1 mb-4"> Main page</h1>
        <div className="flex gap-2">
          <Button variant="primary">
            <Link to="/auth/login">Login</Link>
          </Button>
          <Button variant="secondary">
            <Link to="/auth/register">Sing up</Link>
          </Button>
        </div>
      </div>
    );
};

export default Home;