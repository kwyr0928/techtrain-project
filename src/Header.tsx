import { useNavigate } from "react-router-dom";

function Header() {
const navigate = useNavigate()
const handleNew = () => {
  navigate('/thread/new')
  }
 

  return (
    <div className="comp-Header">
      <header>
        <h1>掲示板</h1>
        <a href="" onClick={handleNew}>スレッドをたてる</a>
      </header>
    </div>
  );
}

export default Header;
