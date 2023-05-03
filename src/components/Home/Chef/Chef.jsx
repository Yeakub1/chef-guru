import React, { useEffect, useState } from "react";
// import { Card, Container } from "react-bootstrap";
// import frist from "../../../assets/team-img-2-4.jpg";
// import second from "../../../assets/team-img-2-2.jpg";
// import third from "../../../assets/team-img-2-3.jpg";
// import four from "../../../assets/photo-4a.jpg";
// import five from "../../../assets/team-img-2-1.jpg";
// import six from "../../../assets/photo-1a1.jpg";
// import { AiFillLike } from "react-icons/ai";
import { useLoaderData } from "react-router-dom";
import ChefData from "../ChefData/ChefData";

const Chef = () => {
    const [servicesData, setServicesData] = useState([]);

    useEffect(() => {
      fetch("http://localhost:5000/card/")
        .then((response) => response.json())
        .then((data) => setServicesData(data));
    }, []);
  console.log(servicesData);
  return (
    <div className="">
      <h2 className="text-center mb-5 mt-5">Chef Team</h2>
      {servicesData.map((chef) => (
        <ChefData key={chef._id} chef={chef}></ChefData>
      ))}
    </div>
    // <Container className=" ">
    //   <h2 className="text-center mb-5 mt-5">Chef Team</h2>
    //   <div className=" row justify-content-between">
    //     <div className="col-md-4 mb-5">
    //       <Card>
    //         <Card.Img variant="top" src={frist} />
    //         <Card.Body className="text-center">
    //           <Card.Title>Aaron Bond</Card.Title>
    //           <Card.Text>7 Years Experience</Card.Text>
    //           <Card.Text>Recipe Items 22</Card.Text>
    //           <Card.Text>
    //             <AiFillLike /> 206
    //           </Card.Text>
    //           <button className="px-3 bg-warning rounded-pill text-white py-2 border-0 mb-4 font-weight-bold ">
    //             <Link to={`/news/`} className="text-decoration-none">Chef Details</Link>
    //           </button>
    //         </Card.Body>
    //       </Card>
    //     </div>
    //     <div className="col-md-4">
    //       <Card>
    //         <Card.Img variant="top" src={second} />
    //         <Card.Body className="text-center">
    //           <Card.Title>Emma Isabella</Card.Title>
    //           <Card.Text>5 Years Experience</Card.Text>
    //           <Card.Text>Recipe Items 18</Card.Text>
    //           <Card.Text>
    //             <AiFillLike /> 146
    //           </Card.Text>
    //           <button className="px-3 bg-warning rounded-pill text-white py-2 border-0 mb-4 font-weight-bold">
    //             Chef Details
    //           </button>
    //         </Card.Body>
    //       </Card>
    //     </div>
    //     <div className="col-md-4">
    //       <Card>
    //         <Card.Img variant="top" src={third} />
    //         <Card.Body className="text-center">
    //           <Card.Title>Peter Parker</Card.Title>
    //           <Card.Text>4 Years Experience</Card.Text>
    //           <Card.Text>Recipe Items 21</Card.Text>
    //           <Card.Text>
    //             <AiFillLike /> 236
    //           </Card.Text>
    //           <button className="px-3 bg-warning rounded-pill text-white py-2 border-0 mb-4 font-weight-bold">
    //             Chef Details
    //           </button>
    //         </Card.Body>
    //       </Card>
    //     </div>
    //     <div className="col-md-4">
    //       <Card>
    //         <Card.Img variant="top" className="hover-zoom" src={four} />
    //         <Card.Body className="text-center">
    //           <Card.Title>Vivi Marian</Card.Title>
    //           <Card.Text>8 Years Experience</Card.Text>
    //           <Card.Text>Recipe Items 17</Card.Text>
    //           <Card.Text>
    //             <AiFillLike /> 326
    //           </Card.Text>
    //           <button className="px-3 bg-warning rounded-pill text-white py-2 border-0 mb-4 font-weight-bold">
    //             Chef Details
    //           </button>
    //         </Card.Body>
    //       </Card>
    //     </div>
    //     <div className="col-md-4">
    //       <Card>
    //         <Card.Img variant="top" src={five} />
    //         <Card.Body className="text-center">
    //           <Card.Title>Jerzzy Lamot</Card.Title>
    //           <Card.Text>6 Years Experience</Card.Text>
    //           <Card.Text>Recipe Items 19</Card.Text>
    //           <Card.Text>
    //             <AiFillLike /> 268
    //           </Card.Text>
    //           <button className="px-3 bg-warning rounded-pill text-white py-2 border-0 mb-4 font-weight-bold">
    //             Chef Details
    //           </button>
    //         </Card.Body>
    //       </Card>
    //     </div>
    //     <div className="col-md-4">
    //       <Card>
    //         <Card.Img variant="top" src={six} />
    //         <Card.Body className="text-center">
    //           <Card.Title>Henry Jack</Card.Title>
    //           <Card.Text>3 Years Experience</Card.Text>
    //           <Card.Text>Recipe Items 14</Card.Text>
    //           <Card.Text>
    //             <AiFillLike /> 124
    //           </Card.Text>
    //           <button className="px-3 bg-warning rounded-pill text-white py-2 border-0 mb-4 font-weight-bold">
    //             Chef Details
    //           </button>
    //         </Card.Body>
    //       </Card>
    //     </div>
    //   </div>
    // </Container>
  );
};

export default Chef;
