import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <>
      <div className='d-flex align-items-center justify-content-center p-5' style={{ height: '100vh' }}>
        <Row>
          <Col md={12} sm={12} className='mt-5 mb-5'  style={{}}> 
           <div className=' align-items-center d-flex justify-content-center'>
              <div className='w-75'>
<div className=' align-items-center d-flex justify-content-center'>
                    <img src='https://cdni.iconscout.com/illustration/premium/thumb/todo-list-illustration-download-in-svg-png-gif-file-formats--completed-task-complete-tasks-completion-tasklist-business-management-pack-people-illustrations-4609476.png?f=webp' className='img-fluid ' alt="" />
  
</div>    
               
                <div className='d-grid'> <Link to={'/home'} className='btn btn-primary mt-3'>View Todos</Link></div>
              </div>
           </div>
             </Col>
         
        </Row>


      </div>
    </>
  )
}

export default Landing