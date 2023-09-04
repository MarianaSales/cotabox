import { gql, useQuery } from "@apollo/client"
import "./styles.css";
import { PieChart } from "../Chart/PieChart";


type User = {
    id: string;
    name: string;
    lastname: string,
    participation: string
}

export const GET_USER = gql`
query {
  users{
    id,
    name,
    lastname,
    participation
  }
}`

export function Table() {
    const { data } = useQuery<{ users: User[] }>(GET_USER)

    return (
        <div className="container">
            <div className="table-container">
                <table >
                    <thead>
                        <tr>
                            <th> </th>
                            <th>Nome</th>
                            <th>Sobrenome</th>
                            <th>Participação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.lastname}</td>
                                <td>{user.participation} %</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="chart-container">
                {data?.users && data.users.length > 0 && (
                    <PieChart data={data.users} />
                )}
            </div>
        </div>
    );
}
