import styled from "styled-components";

const User = (authState) => {
  return (
    <UserSection>
      <h1>Hello! {authState.user.username}</h1>
    </UserSection>
  );
};

export default User;

//Styles
const UserSection = styled.div``;
