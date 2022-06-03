
// import userEvent from "@testing-library/user-event";
import { useState, useEffect } from "react"
// import { useParams } from "react-router-dom";

// https://stackoverflow.com/questions/61614857/react-select-trigger-onchange-when-value-changes

const Home = () => {

    const [footy, setFooty] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    // const [selectComp, setSelectComp] = useState([]);

    useEffect(() => {
        fetch("https://www.scorebat.com/video-api/v3/")
        .then(res => {
            return res.json();
        })
        .then((data) => {
            const newdata = Array.from(data.response);
            setFooty(newdata);
            setIsLoading(false);        
        })
    }, []);

    function refetch() {
        fetch("https://www.scorebat.com/video-api/v3/")
        .then(res => {
            return res.json();
        })
        .then((data) => {
            const newdata = Array.from(data.response);
            setFooty(newdata);
            setIsLoading(false);        
        })
    };
      
    const competitions = footy.map(a => a.competition); 
    // console.log(competitions);
    const uniqueArray = [...new Set(competitions)];
   // console.log(uniqueArray);
    // return uniqueArray
    const handleSelect=(e)=>{
        // console.log(e.target.value);
        const selectCompArray = footy.filter(selection => selection.competition == e.target.value);
        // console.log(selectCompArray);
        if (e.target.value === "Choose competition") {
            refetch();
            // console.log("Test");
        }
        setFooty(selectCompArray);
    }

    return (
        <>
    <div className="footy">
        <select onChange={handleSelect}>
            <option>Choose competition</option>
            {/* {fruits.map((fruit) => <option value={fruit.value}>{fruit.label}</option>)} */}
        {uniqueArray.map((comp) => <option key={comp} value={comp}>{comp}</option>
        )}
        </select>
    </div>
    <div className="footy">    
        {isLoading && <div><h2>Loading...</h2></div>}
        {footy && footy.map((entry) => (
            <>   
            <article>         
            <img src={entry.thumbnail}/>
            <p><strong>Match: </strong><br />{entry.title}
            <br /><strong>Competition: <br/></strong>{entry.competition}
            <br /><strong>Video: </strong><a href={entry.matchviewUrl} target="_blank" rel="noreferrer">Watch Highlights</a></p>
            <strong>Date: </strong>{entry.date}
            </article>
            </>
        ))}
    </div>
    </>
    );

}
 
 
export default Home;
<div className="home"></div>