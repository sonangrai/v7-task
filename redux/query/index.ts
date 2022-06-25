import axios from "axios";

const apiUrl = "https://authgql.herokuapp.com";
const apiUrlLocal = "http://localhost:4000";

//Login Api of GQL
export const loginApi = async (data) => {
  const res = await axios.post(
    apiUrlLocal,
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
