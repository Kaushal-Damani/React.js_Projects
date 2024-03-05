import { PenIcon, X } from "lucide-react";
import React, { useState } from "react";

export default function UserData() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    pass: "",
  });

  const [ArrData, setArrData] = useState([]);
  const [index, setIndex] = useState(null);
  const [isNew, setIsNew] = useState(true);

  const HandlerSubmit = () => {
    // console.log(userData);
    setArrData([...ArrData, userData]);
    setUserData({
      name: "",
      email: "",
      pass: "",
    });
  };

  const remove = (data) => {
    const row = ArrData.filter((i) => data != i);
    setArrData(row);
  };

  const Handlerupdate = (e, i) => {
    setUserData({ ...e });
    setIndex(i);
    setIsNew(false);
  };

  const updateBTN = () => {
    const updateData = [...ArrData];
    updateData[index] = userData;
    setArrData(updateData); // Update with updateData, not userData
    setUserData({
      name: "",
      email: "",
      pass: "",
    });
    setIsNew(true);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setUserData({ ...userData, name: e.target.value })}
      />
      <input
        type="text"
        name="email"
        placeholder="E-mail id"
        value={userData.email}
        onChange={(e) => setUserData({ ...userData, email: e.target.value })}
      />
      <input
        type="text"
        name="pass"
        placeholder="Password"
        value={userData.pass}
        onChange={(e) => setUserData({ ...userData, pass: e.target.value })}
      />

      {isNew ? (
        <button onClick={HandlerSubmit}>Submit</button>
      ) : (
        <button onClick={updateBTN}>Update</button>
      )}

      <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>
        {ArrData.map((e, i) => (
          <tbody>
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{e.name}</td>
              <td>{e.email}</td>
              <td>{e.pass}</td>
              <td>
                <X onClick={() => remove(e)} />
                <PenIcon onClick={() => Handlerupdate(e, i)} />
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </>
  );
}
