import { useState, useEffect } from "react";
import Button from "./components/button/Btn";


const MyList = () => {
    const [deleteUrl, setDeleteUrl] = useState('')
    const [tasks, setTasks] = useState([])

    const handleDone = async (task) => {
        try {
            
            await fetch(`http://localhost:8000/tasks/${task.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    
                },
                body: JSON.stringify({ title: task.title,
                description: task.description,
                priority: task.priority,
                isDone: true, })    
            
                
            }).then(()=>{
                
                
                setTasks(prev=>prev.map(item=>{
                    if(item.id !== task.id) return item;
                    return{
                        ...item,
                        isDone:true
                    }
                }))
            })
            
        } catch (error) {
            console.log(error)
        }

    }

    const handleDelete = async (id) => {


        try {
            
            await fetch(`http://localhost:8000/tasks/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                
            }).then(()=>{
                alert("task deleted successfully")
                setTasks(prev=>prev.filter(item=>item.id !== id))
            })
            
        } catch (error) {
            console.log(error)
        }
  
        

        
        

    }
    
    useEffect(() => {
        const abortCont = new AbortController();
        fetch("http://localhost:8000/tasks", { signal: abortCont.signal })
            .then(res => {
                if (!res.ok) { // error coming back from server
                    throw Error('could not fetch the data for that resource');
                }
                return res.json();
            })
            .then(data => {
                setTasks(data)

                

            })
            .catch(err => {

            })


        // abort the fetch


        return () => abortCont.abort();






    }, [])


    return ( 
    <div className="mylist">
            {tasks.map(task=> (
                task.isDone === false ? (
                    <div className="Task-Box">
                    {task.priority ==="Urgent" && <label className="Priority-Label-Urgent">{task.priority}</label>}
                    {task.priority ==="Important" && <label className="Priority-Label-Important">{task.priority}</label>}                
                    <div className="Task-Tools-Box">
                        <label className="Task-Title">{task.title}</label>                        
                        <Button onClick={()=>handleDone(task)} variant="done" text="Done"  />
                        <Button onClick={()=>handleDelete(task.id)} variant="remove" text="Remove" /> 
                     
                    
                    

                    </div>
                </div>
                ) : (
                    <div className="Task-Box-Done">
                    {task.priority ==="Urgent" && <label className="Priority-Label-Urgent">{task.priority}</label>}
                    {task.priority ==="Important" && <label className="Priority-Label-Important">{task.priority}</label>}                
                    <div className="Task-Tools-Box">
                        <label className="Task-Title">{task.title}</label>                        
                        
                        <Button onClick={()=>handleDelete(task.id)} variant="remove" text="Remove" /> 
                     
                    
                    

                    </div>
                </div>
                )
                

                

            ))}
        
        
        
          
    </div>
     );
}
 
export default MyList;