import React, { useState } from 'react'
import Items from './Items'

export default function Cart() {

    const[num,setNum]=useState(0)

    const incNum=() =>{
        setNum(num + 1);

    };
    const decnum=() =>{
        if(num>0){
        setNum(num- 1);
        }
        else{
            setNum(0);
        }
    };
    
  return (
    <div>
          <nav className ="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-5">
            <a className="navbar-brand" href="#!">Home</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                    <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></li>
                    <li className="nav-item"><a className="nav-link" href="#!">About</a></li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                           
                        </ul>
                    </li>
                </ul>
              
            </div>
        </div>
    </nav>

    <header className="bg-dark py-5">
    <div className="container px-4 px-lg-5 my-5">
        <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Shop in style</h1>
            <p className="lead fw-normal text-white-50 mb-0">One stop for your Luxurious needs </p>
        </div>
    </div>
</header>
<form className="d-flex">
                    <button className="btn btn-outline-dark" type="submit">
                        <i className="bi-cart-fill me-1"></i>
                        Cart
                        <span className="badge bg-dark text-white ms-1 rounded-pill">{num}</span>
                    </button>
                    <button className="btn btn-outline-dark" type="submit" onClick={decnum}>
                        Remove from Cart
                    </button>
                    
                </form>

               


                <section class="py-5">
    <div class="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <div className="col mb-5">
                <div className="card h-100">
                   
                    <img className="card-img-top" src="https://i.pinimg.com/originals/19/2f/c5/192fc59601422b3312f4156c0eb84d5b.jpg" alt="..." />
                    
                    <div className="card-body p-4">
                        <div className="text-center">
                           
                            <h5 className="fw-bolder">Fancy Product</h5>

                            <div className ="d-flex justify-content-center small text-warning mb-2">
                                <div className ="bi-star-fill"></div>
                                <div className ="bi-star-fill"></div>
                                <div className ="bi-star-fill"></div>
                                <div className ="bi-star-fill"></div>
                                <div className ="bi bi-star-fill"></div>
                            </div>
                          
                            $600.00 
                        </div>
                    </div>
                   
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                       <div className="text-center"><button className="btn btn-outline-dark mt-auto" onClick={incNum}>Add to cart</button></div>
                    </div>
                </div>
            </div>

         
           
          
          
          <div className ="col mb-5">
                <div className ="card h-100">
                   
                    <div className ="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}} >Sale</div>
                 
                    <img className ="card-img-top" src="https://amsterdamvintagewatches.com/wp-content/uploads/2019/08/AVW-Rolex-Daytona-Money-Green-12-Extra-1024x1024.jpg" alt="..." />
                   
                    <div className ="card-body p-4">
                        <div className ="text-center">
                            
                            <h5 className ="fw-bolder">Special Item</h5>
                           
                            <div className ="d-flex justify-content-center small text-warning mb-2">
                                <div className ="bi-star-fill"></div>
                                <div className ="bi-star-fill"></div>
                                <div className ="bi-star-fill"></div>
                                <div className ="bi-star-fill"></div>
                                <div className ="bi-star-fill"></div>
                            </div>
                           
                            <span className ="text-muted text-decoration-line-through">$2000.00</span>
                            $1800.00
                        </div>
                    </div>
                    
                    <div className ="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className ="text-center"><button className ="btn btn-outline-dark mt-auto"  onClick={incNum}>Add to cart</button></div>
                    </div>
                </div>
            </div>
           

            </div>
             </div>
            </section>
    
                </div>

  )
}
