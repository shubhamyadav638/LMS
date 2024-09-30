import axios from "axios";
import toast from "react-hot-toast";

const createApi = "/api/v1/create";
const checkmailApi = "/api/v1/checkMail";
const loginApi = "/api/v1/login";
const cardPostApi = "/api/v1/addCard";
const getAllCardsApi = "/api/v1/cards";
const deletecardApi = "/api/v1/deleteCard";
const updatecardApi = "/api/v1/updateCard";
const getAllUsersApi = "/api/v1";
const deleteUsersApi = "/api/v1/deleteAdmin";
const updateUsersApi = "/api/v1//updateUser";
const productsApi = "https://dummyjson.com/products";

async function create(formData) {
  try {
    const response = await axios.post(createApi, formData);
    return response.data;
  } catch (err) {
    // console.error(err);
  }
}

// checkmail..................

export async function checkmail(formData) {
  try {
    const response = await axios.post(checkmailApi, {
      email: formData.get("email"),
    });
    if (response.status === 200) {
      return await create(formData);
    }
  } catch (e) {
    if (e.response && e.response.data.message == "email registered") {
      throw new Error(toast.error("email already exists !"));
    }
  }
}

// login ....................
export async function login(data) {
  try {
    const response = await axios.post(loginApi, data);
    if (response.data) {
      toast.success("Login successful");
      console.log(response.data);
      localStorage.setItem("token", response.data.token);
      return response.data;
    }
  } catch (e) {
    if (e.response.data.message === "Email not found")
      throw new Error(toast.error("Email not found"));

    if (e.response.data.message === "Invalid password")
      throw new Error(toast.error("Invalid password"));
  }
}

////! create card post .........................

export async function cardPost(formData) {
  try {
    const response = await axios.post(cardPostApi, formData);
    if (response.data) toast.success("Courses added successfully");
    return response.data;
  } catch (e) {
    throw new Error(e.message);
  }
}

// get all cards .........................
export async function getAllCards() {
  try {
    const response = await axios.get(getAllCardsApi);
    return response.data.cards;
  } catch (e) {
    throw new Error(e.message);
  }
}

/// card delete api .............

export async function deleteCard(id) {
  try {
    const response = await axios.delete(`${deletecardApi}/${id}`);
    if (response) {
      toast.success("Card deleted successfully");
      return response.data;
    }
  } catch (e) {
    throw new Error(e.message);
  }
}

// update card..............api............

export async function updateCard({ id, formData }) {
  try {
    const response = await axios.put(`${updatecardApi}/${id}`, formData);
    if (response) {
      toast.success("Card updated successfully");
      return response.data;
    }
  } catch (e) {
    throw new Error(e.message);
  }
}

// get all users.............api............

export async function getAllUsers() {
  try {
    const response = await axios.get(getAllUsersApi);
    return response.data.data;
  } catch (e) {
    throw new Error(e.message);
  }
}

//// deleteUsersApi...............

export async function deleteUser(id) {
  try {
    const response = await axios.delete(`${deleteUsersApi}/${id}`);
    if (response) {
      toast.success("User deleted successfully");
      return response.data.data;
    }
  } catch (e) {
    throw new Error(e.message);
  }
}

//updateUsersApi....................

export async function updateUser({ id, formData }) {
  try {
    const response = await axios.put(`${updateUsersApi}/${id}`, formData);
    if (response) {
      toast.success("user updated successfully");
      return response.data;
    }
  } catch (e) {
    throw new Error(e.message);
  }
}

/// productsApi........................
export async function products() {
  try {
    const response = await axios.get(productsApi);
    return response.data.products;
  } catch (e) {
    throw new Error(e.message);
  }
}
