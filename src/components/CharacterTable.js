import React from 'react';
import { Table, Button } from 'reactstrap';

const CharacterTable = (props) => {
    const deleteCharacter = (character) => {
        fetch(`http://localhost:5000/login/${character.id}`, {
            method: 'DELETE',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization' : props.token
            })
        })
        .then(() => props.fetchWorkouts())
    }

    const characterMapper = () =>{
        return props.characters.map((character, index) => {
            return(
                <tr key={index}>
                    <th scope="row">{character.id}</th>
                    <td>{character.alignment}</td>
                    <td>{character.name}</td>
                        <td>{character.race}</td>
                        <td>
                            <Button color="warning" onclick={() => {props.editUpdateCharacter(character); props.updateOn()}}>Update</Button>
                            <Button color="danger" onClick={() => {deleteCharacter(character)}}>Delete</Button>
                        </td>
                </tr>
            )
        })
    }

return(
<div>

 <h3>Your Characters</h3>
 <hr/>
 <Table striped>
     <thead>
         <tr>
             <th>#</th>
             <th>Name</th>
             <th>Alignment</th>
             <th>Race</th>
         </tr>
     </thead>
     <tbody>
                   {characterMapper()}
     </tbody>
 </Table>
</div>

)
}

export default CharacterTable;

