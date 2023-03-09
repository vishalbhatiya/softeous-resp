import React from "react";
import {Link, Outlet } from "react-router-dom";

const layout = () => {
  return (
    <>
      <table style={{ height: "100vh" }}>
        <tbody>
          <tr>
            <td
              style={{
                width: "200px",
                backgroundColor: "red",
                verticalAlign: "top",
              }}
            >
              Side bar
              <ul>
                <li>
                  <Link to="/addemployee">Add Employee</Link>
                  </li>
                <li>Employee List</li>
              </ul>
            </td>
            <td style={{ width: "100vw", verticalAlign: "top" }}>
              <table style={{ width: "100%" }}>
                <tbody>
                  <tr>
                    <td style={{ backgroundColor: "yellow", height: "50px" }}>
                      Upper Header
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Outlet></Outlet>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default layout;
