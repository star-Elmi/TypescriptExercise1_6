interface User {
  name: string;
  isPermitted: boolean;
}

 const Users = (props: User) => {
  return (
    <div>
      {/* <h2>User: {props.name}</h2>

      {props.isPermitted ? (
        <p>Welcome isperum</p>
      ) : (
        <p>Welcome guest</p>
      )} */}

      <p>Welcome {props.isPermitted ? "isperitted" : "Guest"}</p>
    </div>
  );
};

export default Users;
