import { Link, useNavigate } from "react-router-dom";


const ErrorPage = () => {
    const navigate = useNavigate()
    return (
        <div className="bg-cover min-h-screen bg-[url('https://i.postimg.cc/hjBB0mCn/404-error-page-examples-best.webp')] bg-no-repeat">
            <div className="flex justify-evenly pt-6">
                <button onClick={()=> navigate(-1)} className="btn btn-ghost bg-white hover:bg-[#b1b1b1]">Back</button> 
                <Link to='/'><button className="btn btn-success text-white">Back to Home</button></Link>
            </div>
        </div>
    );
};

ErrorPage.propTypes = {
    
};

export default ErrorPage;