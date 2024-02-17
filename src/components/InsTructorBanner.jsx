import React from "react";


const InsTructorBanner = ({ instructor, teamMember, num, about }) => {
  return (
    <div className="breadcrumbs section-padding bg-[url('../images/all-img/bred.png')] bg-cover bg-center bg-no-repeat">
      <div className="container text-center">
        <h2>{about} Instructor</h2>
        <nav>
          <ol className="flex items-center justify-center space-x-3">
            <li className="breadcrumb-item">
              <a href="index.html">Pages </a>
            </li>
            <li className="breadcrumb-item">-</li>
            <li className="text-primary">
              {instructor} {teamMember} {num}
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default InsTructorBanner;
