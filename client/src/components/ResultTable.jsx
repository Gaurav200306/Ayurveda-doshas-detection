import React, { useEffect, useState } from 'react'
// import { getServerData } from '../helper/helper'

export default function ResultTable() {

//     const [data, setData] = useState([])

//     useEffect(() => {
//         getServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/result`, (res) => {
//             setData(res)
//         })
//     })

  return (
    <div>
        <table>
            <thead className='table-header'>
                <tr className='table-row'>
                    <td>Name</td>
                    <td>Vata</td>
                    <td>Pita</td>
                    <td>Kapha</td>
                </tr>
            </thead>
            <tbody>
                <tr className='table-body'>
                    <td>Gaurav</td>
                    <td>28%</td>
                    <td>22%</td>
                    <td>50%</td>
                </tr>
                {/* { !data ?? <div>No Data Found </div>}
                {
                    data.map((v, i) => (
                        
                        <tr className='table-body' key={i}>
                            <td>{v?.username || ''}</td>
                            <td>{v?.attempts || 0}</td>
                            <td>{v?.points || 0}</td>
                            <td>{v?.achived || ""}</td>
                        </tr>
                    ))
                }
                 */}
            </tbody>
        </table>
    </div>
  )
}