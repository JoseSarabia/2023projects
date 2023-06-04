import React , {useState}  from "react"
import app from "./app.css"


function App() {

  const [contact, setContact] = useState(
    {
      firstName: "Jose",
      lastName: "Showmake",
      phone: "+1 (345) 333-4433",
      email: "joe@gmail.com",
      isFavorite: false
    }
  )


  let starIcon = contact.isFavorite ? "star-filled.png"  :  "star-empty.png"

  function toggleFavorite() {
    setContact(prevContact => ({
      ...prevContact, 
      isFavorite: !prevContact.isFavorite
    }))
  }


  return(
    <main>
    <article className="card">
        <img src="https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" className="card--image" />
        <div className="card--info">
            <img 
                src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0cZz7dPV_f5_b6FuQN1jl6NcDCfWRobb2ow&usqp=CAU${starIcon}`} 
                className="card--favorite"
                onClick={toggleFavorite}
            />
            <h2 className="card--name">
                {contact.firstName} {contact.lastName}
            </h2>
            <p className="card--contact">{contact.phone}</p>
            <p className="card--contact">{contact.email}</p>
        </div>
        
    </article>
</main>
  )
}

export default App