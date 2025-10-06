import React from 'react';

const members = [
  {
    name: 'SRIDAR . J',
    dob: '09-10',
    chapter: 'BNI Agaram',
    joinDate: '01-10-2017',
    renewalDate: '01-10-2025',
    company: 'Rupwani Appliances',
    category: 'Retail, Appliances',
    mobile: '9894300678',
    altMobile: ''
  },
  {
    name: 'KARUNANITHI T.R',
    dob: '10-10',
    chapter: 'BNI Agaram',
    joinDate: '01-10-2017',
    renewalDate: '01-10-2025',
    company: 'ALAMMU CONSTRUCTION',
    category: 'Real Estate Services, Real Estate Development',
    mobile: '9500952910',
    altMobile: '9500952910'
  },
  {
    name: 'SANTHANAGOPAL V',
    dob: '11-10',
    chapter: 'BNI Agaram',
    joinDate: '01-10-2017',
    renewalDate: '01-10-2027',
    company: 'Quality Arcade',
    category: 'Retail, Tiles',
    mobile: '9841133441',
    altMobile: ''
  },
  {
    name: 'NAVEEN BAALAJI .N',
    dob: '12-10',
    chapter: 'BNI Agaram',
    joinDate: '01-07-2025',
    renewalDate: '01-07-2026',
    company: 'SRI LAKSHMI JEWELLERY',
    category: 'Retail, Fine Jewelry',
    mobile: '9894023456',
    altMobile: ''
  },
  {
    name: 'DR. ARJUN T SUNDARAM',
    dob: '13-10',
    chapter: 'BNI Agaram',
    joinDate: '01-10-2020',
    renewalDate: '01-10-2025',
    company: 'Auro Care Private Ltd',
    category: 'Health & Wellness, Doctor/Physician',
    mobile: '9047045660',
    altMobile: ''
  }
];

const MemberTable = () => {
  return (
    <div className="table-responsive">
      <table className="table table-striped  align-middle">
        <thead className="table-light text ">
          <tr >
            <td className='text-danger'>Name</td>
            <td className='text-danger'>DOB</td>
            <td className='text-danger'>Chapter</td>
            <td className='text-danger'>Join date</td>
            <td className='text-danger'>Renewal date</td>
            <td className='text-danger'> Company</td>
            <td className='text-danger'>Category</td>
            <td className='text-danger'>Mobile number</td>
            <td className='text-danger'>Alternative number</td>
          </tr>
        </thead>
        <tbody>
             <tr>
            <td><input type="text" className="form-control" placeholder="Enter name" /></td>
            <td><input type="text" className="form-control" placeholder="dd-mm" /></td>
            <td>
              <select className="form-select">
                <option>All</option>
                <option>BNI Agaram</option>
              </select>
            </td>
            <td><input type="date" className="form-control" /></td>
            <td><input type="date" className="form-control" /></td>
            <td><input type="text" className="form-control" placeholder="Enter company" /></td>
            <td><input type="text" className="form-control" placeholder="Enter category" /></td>
            <td><input type="text" className="form-control" placeholder="Enter number" /></td>
            <td><input type="text" className="form-control" placeholder="Enter alt number" /></td>
          </tr>
          {members.map((member, i) => (
            <tr key={i}>
              <td>{member.name}</td>
              <td>{member.dob}</td>
              <td>{member.chapter}</td>
              <td>{member.joinDate}</td>
              <td>{member.renewalDate}</td>
              <td>{member.company}</td>
              <td>{member.category}</td>
              <td>{member.mobile}</td>
              <td>{member.altMobile}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MemberTable;
