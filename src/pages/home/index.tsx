import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = (): JSX.Element => {
  const data = useSelector<any>((state) => state);
  console.log(data);
  return (
    <>
      <h1>Welcome</h1>
      <Link to="/contacts">Contacts|</Link>
      <Link to="/contact/new">Create|</Link>
      <Link to="/contact/56">Show|</Link>
      <Link to="/contact/56/edit">Edit</Link>
    </>
  );
};

export default Home;
