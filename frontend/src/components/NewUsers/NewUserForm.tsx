import { gql, useMutation } from "@apollo/client";
import { FormEvent, useState } from "react"
import { GET_USER } from "../Table/Table";
import "./styles.css";

const CREATE_USER = gql`
  mutation($name: String!, $lastname: String!, $participation: String!) {
    createUser(name: $name, lastname: $lastname, participation: $participation) {
      id
      name
      lastname
      participation
    }
  }
`;

export function NewUserForm() {
    const [name, setName] = useState('');
    const [lastname, setLastName] = useState('');
    const [participation, setParticipation] = useState('');
    const [createUser] = useMutation(CREATE_USER);

    async function handleCreateUser(event: FormEvent) {
        event.preventDefault();

        if (!name || !lastname) {
            return;
        }

        await createUser({
            variables: {
                name,
                lastname,
                participation
            },
            refetchQueries: [GET_USER]
        });

        setName('');
        setLastName('');
        setParticipation('')
    }

    return (
        <div>
            <form onSubmit={handleCreateUser}>
                <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="First name" />
                <input type="text" value={lastname} onChange={e => setLastName(e.target.value)} placeholder="Last name" />
                <input type="text" value={participation} onChange={e => setParticipation(e.target.value)} placeholder="Participation" />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}
