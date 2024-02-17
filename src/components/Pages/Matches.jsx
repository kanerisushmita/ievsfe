import React, { useEffect, useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import ReqMentorForm from "../Membership/screens/ReqMentorForm";
import PageBanner from "../PageBanner";
import { getAllMembers, loginMember } from "../../apis/member";
import { useTable } from "react-table";
import { Link } from "react-router-dom";

const Matches = ({ data, matched, reqBy, reqId,area }) => {
    // console.log("Matches data : ",data);


    useEffect
    const columns = React.useMemo(
        () => [
          {
            Header: 'Member Type',
            accessor: 'memberType',
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
            Header: 'Full Name',
            accessor: 'fullName',
          },
          {
            Header: 'Affiliation',
            accessor: 'affiliation',
          },
          {
            Header: 'Designation',
            accessor: 'designation',
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
            Header: 'Education',
            accessor: 'education',
            Cell: ({ row }) => {
              const education = row.original.educationQualifications;
              if (education && education.length > 0) {
                const lastDegree = education[education.length - 1].degree;
                return lastDegree;
              }
              return '';
            },
          },
          {
            Header: 'Available for Mentoring',
            accessor: 'availableForMentoring',
            Cell:({row})=>{
                return row.original.availableForMentoring?"Yes":"No";
            }
          },
          {
            Header: 'View Profile',
            accessor: 'viewProfile',
            Cell: ({ row }) => (
              <Link 
                to={`/matches_profile?member=${row.original.memberID}&reqFor=${row.original._id}&reqBy=${reqBy}&reqId=${reqId}&matched=${matched}&area=${area}`}
                target="_blank"
                className="btn px-8 py-[11px] bg-black text-white hover:bg-primary"
              >
                View Profile
              </Link>
            ),
          },
          {
            Header: 'Status',
            accessor: 'status',
            Cell:({row})=>{
              const id= row.original._id;
              for(let i=0;i<=matched.length-1;i++){
                if(matched[i] === id){
                  return "Matched";
                }
              }
              return "Open";
            }
          },
        ],
        []
      );

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

export default Matches;
