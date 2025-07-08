import Tabs from '../components/tabs';
import {useState} from "react"

const ProfileSection = ({handleButtonClickFunction}) => {

    const[age, setAge] = useState("");
    const[email, setEmail] = useState("");

    // help
    function validateEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
        // Return true or false.
    }

    function handleFormSubmit(e){
        e.preventDefault();
        console.log(age, email);
        if(validateEmail(email)){
            localStorage.setItem('profile', JSON.stringify({age, email}));
            const a = localStorage.getItem("profile");
            console.log(`This is from local storage${JSON.parse(a)}`);
            handleButtonClickFunction('interests');
        } else {
            alert("Please enter email in correct format");
        }
    }

    return (
        <>
            <Tabs handleButtonClickFunction={handleButtonClickFunction}/>
            <div style={{border:'solid 1px black', padding:"12px", maxWidth:"650px"}}>
                <form style={{display:'flex', flexDirection:'column', gap:5}} onSubmit={handleFormSubmit}>
                    <label>Age</label>
                    <input onChange={(e) => setAge(e.target.value)} type='number' required/> 
                    {/* <input onChange={(e) => setAge(e.target.event/e.event.target)}/>  This is what I was doing */}
                    <label>Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} required/>
                    <button>Save & Next</button>
                </form>
            </div>
        </>
    )
}

export default ProfileSection;