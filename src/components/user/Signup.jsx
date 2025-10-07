import React from 'react'
import Swal from 'sweetalert2';
const Signup = () => {
    const handleOnSubmit=(e)=>{
        e.preventDefault();
        Swal.fire({
            title: "form submitted",
            icon: "success",
        });
        
    }
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
                <div className="card shadow-lg">
                    <div className="card-header">
                        <h2 className='text-center'>Singup</h2>
                    </div>
                    <div className="card-body">
                        <form className='form' onSubmit={handleOnSubmit}>
                            <div className="form-group mb-3">
                                <label className='form-label'>Name</label>
                                <input type="text" className='form-control'/>
                            </div>
                            <div className="form-group mb-3">
                                <label className='form-label'>Email</label>
                                <input type="email" className='form-control'/>
                            </div>
                            <div className="form-group mb-3">
                                <label className='form-label'>Password</label>
                                <input type="password" className='form-control'/>
                            </div>
                            <button className="btn btn-success" type='submit'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup