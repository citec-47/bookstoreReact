import { Link } from 'react-router-dom';

const MyLink = () => (
  <>
    <ul className="linkholder">
      <li className="mylinks"><Link to="/">Bookstore CMS</Link></li>
      <li className="mylinks"><Link to="/">Books</Link></li>
      <li className="mylinks"><Link to="/category">Categories</Link></li>
    </ul>
  </>
);

export default MyLink;
