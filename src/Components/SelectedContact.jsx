import { useEffect } from "react"
import { useState } from "react"

export default function SelectedContact({selectedContactId, setSelectedContactId}) {
    const [contact, setContact] = useState(null)
    useEffect(()=>{
        async function singleContact () {
            try {
                const API2 = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`)

                const response = await API2.json()
                setContact(response)
            } catch (error) {
                console.log(error)
            }

        }
    singleContact()
    },[])

    return (
        <div className="singleContact">
            {contact && ( <div>
            <p>{contact.name}</p>
            <p>{contact.username}</p>
            <p>{contact.email}</p>
            <p>{contact.address.street} {contact.address.suite}, {contact.address.city} {contact.address.zipcode}</p>
            <p>{contact.phone}</p>
            <p>{contact.website}</p>
            <button onClick = {() => {setSelectedContactId (null)}}>Go Back</button>
    </div>
    )}
        </div>
    )
}