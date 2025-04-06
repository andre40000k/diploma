import { Link } from "react-router-dom";
import { Button } from "../../components/common";

const Home = () => {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-4xl mb-4"> Main page</h1>
        <div className="flex gap-2">
          <Button as={Link} to="/auth/login" variant="primary">
            Login
          </Button>
          <Button as={Link} to="/auth/register" variant="secondary">
            Sing up
          </Button>
        </div>
      </div>
    );
};

export default Home;