import { useState } from "react";
import Button from "./components/button/Btn";


const AddTask = () => {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [priority, setPriority] = useState('')
    const [isDone, setIsDone] = useState(false)
    



    const handleSubmit = async (e) =>{
        e.preventDefault()
        
        const myFormData = new FormData(e.target);

        const formDataObj = Object.fromEntries(myFormData.entries());
        
        
        const data = { ...formDataObj, isDone}
        
        
        try {
            const response = await fetch('http://localhost:8000/tasks/', {
                method: 'POST',
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(data)
            })
            
            alert("your task added successfully")
            window.location.reload()

        } catch (err) {

        }
        
        


        


        
        
    }
    return ( 
        <div className="Add-Task-Box">
            <form onSubmit={handleSubmit}>
                <div className="Task-Info-Box">
                    
                    
                    
                    <input className="Task-Title-Input"
                        id="title"
                        name="title"
                        placeholder="Task Title"
                         type="text"
                         required
                         value={title}
                         onChange={(e)=>setTitle(e.target.value)}  /><br />
                    
                    
                    <textarea
                         className="Task-Desc-Textarea" 
                         name="description" id="description" 
                         cols="40" 
                         rows="20"
                         value={desc}
                         onChange={(e)=>setDesc(e.target.value)}
                         placeholder="please enter your task description here">
                       
                    </textarea> <br />
                
                    

                    <br />
                    <div className="Priority-Radio-Box">
                    <div className="Priority-Item">
                        <input
                         type="radio"
                         id="Urgent"
                         name="priority"
                         value="Urgent"
                          
                         onChange={(e)=>setPriority(e.target.value)}
                         className="Priority-Input"
                          />
                        <label htmlFor="Urgent" className="Priority-Label" >Urgent</label>
                    </div>

                    <div className="Priority-Item">
                        <input
                         type="radio"
                         id="important"
                         name="priority"
                         value="Important"
                          
                         onChange={(e)=>setPriority(e.target.value)}
                         className="Priority-Input"
                          />
                        <label htmlFor="important" className="Priority-Label" >Important</label>
                    </div>

                    <div className="Priority-Item">
                        <input
                         type="radio"
                         id="none"
                         name="priority"
                         value="" 
                          
                         onChange={(e)=>setPriority(e.target.value)}
                         className="Priority-Input"
                          />
                        <label htmlFor="none" className="Priority-Label" >None</label>
                    </div>



                    </div>
                    <Button variant = "submit" text="submit" />
                   
                
                
                
                    

                </div>
            </form>
           
            
        </div>
     );
}
 
export default AddTask;