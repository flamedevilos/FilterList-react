import React from "react";

export const TableData = ({ contactTable }) => {
  return (
    <>
      {" "}
      <table className="table table-hover table-modifie">
        <thead>
          <tr>
            <th>id</th>
            <th>First name</th>
            <th>Last Last</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {contactTable.map((contact) => (
            <tr>
              <th scope="row" key={contact.id}>
                {contact.id}
              </th>
              <td>{contact.first_name}</td>
              <td>{contact.last_name}</td>
              <td>{contact.email}</td>
              <td>{contact.Phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
