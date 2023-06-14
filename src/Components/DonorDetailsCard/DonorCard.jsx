import React from 'react'
import * as Icon from 'react-bootstrap-icons';

function DonorCard({data}) {
  return (
    <div className='w-100 pb-2 mt-1 border rounded overflow-hidden '>
      <div className="row ps-2 w-100 ">
        <div className="col-3 d-flex align-items-center justify-content-center" style={{backgroundColor:'#FFEBEB'}}>
            <p className='m-0' style={{fontSize:'3rem'}}> {data?.bloodType} </p>
        </div>
        <div className="col-9 p-2">
            <p className='h4'>{data?.districtName}, {data?.stateName}</p>
            <p className='h6 text-secondary ms-2'>{data?.name}</p>
            <p className='h6'>PH: {data?.phoneNumber}, {data?.altPhonenumber}</p>
        </div>
      </div>
      <div className="w-100 d-flex justify-content-center gap-5 mt-2">
      <a href={`tel:${data.phoneNumber}` } className='text-decoration-none'>  <button className="btn d-flex align-items-center gap-2 " style={{backgroundColor:"#FFDAB9", color:'#000080'}}> <Icon.TelephoneFill></Icon.TelephoneFill> Call now</button></a>
      {data?.whatsAppNumber && <a className='text-decoration-none' href={`https://wa.me/+91${data.whatsAppNumber}/?text="Hello"`} target="_blank">  <button className="btn d-flex align-items-center gap-2" style={{backgroundColor:"#CCFFCC", color:'#000080'}}><Icon.Whatsapp color='#000080'></Icon.Whatsapp> Whatsapp</button></a>}
      </div>
    </div>
  )
}

export default DonorCard
// `whatsapp://send?abid=+91${data.whatsAppNumber}`