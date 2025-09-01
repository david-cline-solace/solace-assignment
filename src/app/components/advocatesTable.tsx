"use client";

import React from "react";
import { Advocate } from "../clientApi/advocates";

export default function AdvocatesTable(props: { advocates: Advocate[] }) {
  return (
    <div role="table" className="grid padded-divs grid-cols-[auto_auto_auto_8rem_auto_8rem_auto]">
      <div className="grid-header">First Name</div>
      <div className="grid-header">Last Name</div>
      <div className="grid-header">City</div>
      <div className="grid-header">Degree</div>
      <div className="grid-header">Specialties</div>
      <div className="grid-header">Years of Experience</div>
      <div className="grid-header">Phone Number</div>

      {props.advocates?.map((advocate, i) => {
        return <React.Fragment key={"advocate" + i}>
          <div>{advocate.firstName}</div>
          <div>{advocate.lastName}</div>
          <div>{advocate.city}</div>
          <div>{advocate.degree}</div>
          <div>
            <ul>
              {advocate.specialties?.map((s, j) => (
                <li key={"specialty_row_" + j}>{s}</li>
              ))}
            </ul>
          </div>
          <div>{advocate.yearsOfExperience}</div>
          <div>{advocate.phoneNumber}</div>
        </React.Fragment>
      })}
    </div>
  );
}
