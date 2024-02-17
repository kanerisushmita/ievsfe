import React, { useEffect, useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import ReqMentorForm from "../Membership/screens/ReqMentorForm";
import PageBanner from "../PageBanner";
import { getAllMembers } from "../../apis/member";
import { useTable } from "react-table";
import { getAreaOfResearchById } from "../../apis/areaOfResearch";
import { Link } from "react-router-dom";

const Members = ({ data }) => {

    useEffect
    const columns = React.useMemo(
        () => [
          {
            Header: 'Title & Name',
            accessor: 'title & fullName',
            Cell: ({ row }) => {
              const title = row.original.title;
              const fullName = row.original.fullName;
              return `${title} ${fullName}`;
            },
          },
          {
            Header: 'Designation',
            accessor: 'designation',
          },
          {
            Header: 'Affiliation',
            accessor: 'affiliation',
          },
          {
            Header: 'Member Id',
            accessor: 'memberID',
          },
          {
            Header: 'Email',
            accessor: 'email',
          },
          {
            Header: 'Phone Number',
            accessor: 'phoneNumber',
          },
          {
            Header: 'Organization',
            accessor: 'org',
            Cell: ({ row }) => {
              const professionalQualification = row.original.professionalExperience;
              if (professionalQualification && professionalQualification.length > 0) {
                const lastOrg = professionalQualification[professionalQualification.length - 1].organizationName;
                return lastOrg;
              }
              return '';
            },
          },
          {
            Header: 'Area of Research',
            accessor: 'aor',
            Cell: ({ row }) => {
              const id = row.original.area_of_research?.area_of_research;
              return id;
            },
          },
          {
            Header: 'Member Type',
            accessor: 'memberType',
          },
        ],[]);

        const {
          getTableProps,
          getTableBodyProps,
          headerGroups,
          rows,
          prepareRow,
        } = useTable({ columns, data });
    
    
      return (
        <div style={{ overflowX: 'auto' }} className="container">
            {data.length? 
            (
                <table {...getTableProps()} style={{ border: 'solid 1px blue', width: '100%', minWidth: '600px' }}>
                <thead>
                  {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map(column => (
                        <th
                          {...column.getHeaderProps()}
                          style={{
                            borderBottom: 'solid 3px red',
                            background: 'aliceblue',
                            color: 'black',
                            fontWeight: 'bold',
                          }}
                        >
                          {column.render('Header')}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                  {rows.map(row => {
                    prepareRow(row);
                    return (
                      <tr {...row.getRowProps()}>
                        {row.cells.map(cell => {
                          return (
                            <td
                              {...cell.getCellProps()}
                              style={{
                                padding: '10px',
                                border: 'solid 1px gray',
                                background: 'papayawhip',
                              }}
                            >
                              {cell.render('Cell')}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )
        :
        (
            <div className="mini-title text-center">No Matches Yet</div>
        )}
        </div>
      );
    }

export default Members;
