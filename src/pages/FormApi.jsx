import react,{useEffect,useState} from "react";
import "../assets/css/style.css"

function FormApi(){
    const[userData,setUserData] = useState({
        fname: "",
        sname: "",
        desig: "",
    });

    const[allData,setAllData] = useState([])

    const[localData,setLocalData] = useState([])

    useEffect(()=>{
        let getLocal =JSON.parse(localStorage.getItem("data")) 
        console.log(getLocal)
        setLocalData(getLocal);
    },[])

    function handleChange(e){
        let value = e.target.value;
        let name = e.target.name;
        setUserData((prev)=>({...prev,[name]: value}))
    }
    function handleSubmit(e){
        e.preventDefault();
        let newData = [...allData,userData]
        setAllData(newData)
        setUserData(
            {fname: "",
            sname: "",
            desig: "",
        }
        );    
        // console.log(userData);
        localStorage.setItem("data",JSON.stringify(allData));

    }
    console.log(allData);
    return(
        <>
            <div className="text-center formbox">             
                <form className="formP" onSubmit={handleSubmit}>
                    <h1>Form 2</h1>
                    <input type="text" name="fname" placeholder="Enter your Name" value={userData.fname} onChange={handleChange} />
                    <input type="text" name="sname" placeholder="Enter your Last Name" value={userData.sname} onChange={handleChange}/>
                    <input type="text" name="desig" placeholder="Enter your Designation" value={userData.desig} onChange={handleChange} />
                    <input type="submit" value="Send" />
                </form>
                <div className="dataBoxx">
                    {
                        localData.map((e)=>(
                            <>
                            <table className="dataTab">
                                <tr>
                                    <thead>
                                        <th>Name</th>
                                        <th>Surname</th>
                                        <th>Designation</th>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{e.fname}</td>
                                            <td>{e.sname}</td>
                                            <td>{e.desig}</td>
                                        </tr>
                                    </tbody>
                                </tr>
                            </table>

                                {/* <p>Name - {e.fname}</p>
                                <p>Surname - {e.sname}</p>
                                <p>Designation - {e.desig}</p> */}

                            </>
                            
                        ))
                    }
                </div>
                
            </div>
        </>
    )
}
export default FormApi;