import { Link } from "react-router-dom";

const ViTable= (props) => {
    return(
        <table>
        <thead>
          <tr>
            { props.header.length > 0 &&
              props.header.map((user, index) => {
                return (
                  <th key={index}>{user.name}</th>
                )
              })
            }
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          { props.users.length > 0 && 
              props.users.map((user, index) => {
                return (
                  <tr key={index}>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.age}</td>
                    <td>{user.city}</td>
                    <td>
                    <Link className="detailyo" to={`/Pages/detail/${user.id}`} >Detailus</Link>
                    <Link className="blue" to={`/UserManagement/EditUser/${user.id}`} >Editus</Link>
                    <Link className="red" to={`/UserManagement/UserDelete/${user.id}`} >Deletus</Link>
                    </td>
                  </tr>
                )
              })
            }
          { props.users.length === 0 && 
          <tr>
            <td colSpan={4}>No records found lol.</td>
          </tr>
          }
        </tbody>
      </table>
  );
}  
  


export default ViTable;