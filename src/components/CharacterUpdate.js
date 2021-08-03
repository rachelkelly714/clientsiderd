import React, {useState} from 'react'; 

const CharacterUpdate = (props) => {
    const [editDesc, setEditDesc] = useState(props.characterToUpdate.description);
    const [editDef, setEditDef] = useState(props.characterToUpdate.definition);
    const [editRes, setEditRes] = useState(props.characterToUpdate.result);
    
    return(
        <div>
          
        This is Character Update
    </div>
)


}

export default CharacterUpdate;