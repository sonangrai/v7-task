import axios from "axios";

const apiUrl = "https://authgql.herokuapp.com";
const apiUrlLocal = "http://localhost:4000";

//Login Api of GQL
export const loginApi = async (data) => {
  const res = await axios.post(
    apiUrl,
    {
      query: `mutation login($email: String!,$password: String!) {
                    login(email: $email, password: $password){
                      username,
                      email
                    }
                  }`,
      variables: {
        email: data.email,
        password: data.password,
      },
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return res;
};

//Signup Api of GQL
export const signupApi = async (data) => {
  const res = await axios.post(
    apiUrl,
    {
      query: `mutation register($username: String!,$password: String!,$confirmPassword: String!, $email: String!) {
                    register(registerInput :{username: $username, password: $password, confirmPassword: $confirmPassword email: $email}){
                      username,
                      email
                    }
                  }`,
      variables: {
        username: data.username,
        password: data.password,
        confirmPassword: data.password,
        email: data.email,
      },
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return res;
};
