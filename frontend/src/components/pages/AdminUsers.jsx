import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserThunk, getUserThunk } from "../redux/admin.clice";
import { useNavigate, Link } from "react-router-dom";

function AdminUsers() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const result = useSelector((state) => state.admin.users);
  // console.log(result);

  const token = localStorage.getItem("token");
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);

  useEffect(() => {
    dispatch(getUserThunk());
  }, []);

  async function handledelete(id) {
    try {
      await dispatch(deleteUserThunk(id)).unwrap();
      dispatch(getUserThunk());
    } catch (e) {
      throw new Error(e.message);
    }
  }

  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        <thead>
          <tr>
            <th className="hidden md:table-cell">Sno.</th>
            <th>Profile</th>
            <th>Fname</th>
            <th>Lname</th>
            <th>Email</th>
            <th className="hidden lg:table-cell">Contact</th>
            <th className="hidden lg:table-cell">Address</th>
            <th className="hidden lg:table-cell">City</th>
            <th className="hidden lg:table-cell">Zipcode</th>
            <th className="hidden xl:table-cell">Dob</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {result && result.length > 0 ? (
            result.map((res, index) => (
              <tr key={index}>
                <td className="hidden md:table-cell">{index + 1}</td>
                <td>
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src={`${res.file}`}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </td>
                <td>{res.fname}</td>
                <td>{res.lname}</td>
                <td>{res.email}</td>
                <td className="hidden lg:table-cell">{res.mobile}</td>
                <td className="hidden lg:table-cell">{res.address}</td>
                <td className="hidden lg:table-cell">{res.city}</td>
                <td className="hidden lg:table-cell">{res.zipPostalCode}</td>
                <td className="hidden xl:table-cell">{res.dob}</td>
                <td>
                  <Link to={`/updateAdmin/${res._id}`}>
                    <button className="btn btn-success btn-sm"> Edit</button>{" "}
                  </Link>
                  &nbsp;
                  <button
                    className="btn btn-error btn-sm"
                    onClick={() => handledelete(res._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <div>No users available</div>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default AdminUsers;
