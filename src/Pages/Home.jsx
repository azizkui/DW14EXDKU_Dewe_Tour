import React, { useState } from "react";
import { Button, Modal, Form, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Styles/Home.css";

// IMAGES IMPORT DESTINATION
import destination1 from "../images/destination1.png";
import destination2 from "../images/destination2.png";
import destination3 from "../images/destination3.png";
import destination4 from "../images/destination4.png";
import destination5 from "../images/destination5.png";
import destination6 from "../images/destination6.png";

// IMAGES IMPORT ABILITY
import icon from "../icon-images/Icon.png";
import guarantee from "../icon-images/guarantee.png";
import agent from "../icon-images/agent.png";
import heart from "../icon-images/heart.png";
import support from "../icon-images/support.png";
const card_contains = [
  {
    id: "1",
    title: "Best Price Guarantee",
    desc: "A small river named Duren flows by their place and supplies ",
    images: guarantee,
  },
  {
    id: "2",
    title: "Travellers Love Us",
    desc: "A small river named Duren flows by their place and supplies ",
    images: agent,
  },
  {
    id: "3",
    title: "Best Travel Agent",
    desc: "A small river named Duren flows by their place and supplies ",
    images: heart,
  },
  {
    id: "4",
    title: "Our Dedicated Support",
    desc: "A small river named Duren flows by their place and supplies ",
    images: support,
  },
];

const destination = [
  {
    id: "1",
    title_des: "6D/4N Fun Tassie Vacation ...",
    rating: "12/15",
    price: "IDR. 12,398,000",
    place: "Australia",
    images_des: destination1,
  },
  {
    id: "2",
    title_des: "6D/4N Exciting Summer in ...",
    rating: "14/15",
    price: "IDR. 10,288,000",
    place: " South Korea ",
    images_des: destination2,
  },
  {
    id: "3",
    title_des: "8D/6N Wonderful Autum ... ",
    rating: "10/15",
    price: "IDR. 28,999,000 ",
    place: "Japan",
    images_des: destination3,
  },
  {
    id: "4",
    title_des: "4D/3N Overland Jakarta B...",
    rating: "8/10",
    price: "IDR. 3,188,000",
    place: "Indonesia",
    images_des: destination4,
  },
  {
    id: "5",
    title_des: "4D/3N Labuan Bajo Delight",
    rating: "14/15",
    price: "IDR. 10,488,000",
    place: "Indonesia",
    images_des: destination5,
  },
  {
    id: "6",
    title_des: "5D/4N Magic Tokyo Fun",
    rating: "10/15",
    price: "IDR. 11,188,000",
    place: "Japan",
    images_des: destination6,
  },
];

function Home() {
  return (
    <div className="background-back">
      <div className="background-top">
        <Header></Header>
        <Content></Content>
        &nbsp;
        <Footer></Footer>
      </div>
    </div>
  );
}

// function Login() {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   return (
//     <div>
//       <Button className="login" variant="light" onClick={handleShow}>
//         Login
//       </Button>{" "}
//       {/* Modal Login */}
//       <Modal size="sm" show={show} onHide={handleClose}>
//         <Modal.Body>
//           <Form>
//             <div className="modal-login-title">
//               <h1>Login</h1>
//             </div>
//             <Form.Group controlId="formBasicEmail">
//               <Form.Label className="text-email">Email</Form.Label>
//               <Form.Control
//                 className="size-text-email"
//                 type="email"
//                 placeholder="Enter email"
//               />
//             </Form.Group>
//             <Form.Group controlId="formBasicPassword">
//               <Form.Label className="text-password">Password</Form.Label>
//               <Form.Control type="password" placeholder="Password" />
//             </Form.Group>
//             <Col sm={12}>
//               <Button
//                 variant="warning"
//                 type="submit"
//                 className="btn-login"
//                 block
//               >
//                 Login
//               </Button>
//             </Col>
//             <Form.Text className="text-muted center-text-account">
//               Don't have an account? ? Clik Here !!!
//             </Form.Text>
//           </Form>
//         </Modal.Body>
//       </Modal>
//     </div>
//   );
// }
// function Register() {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   return (
//     <div>
//       <Button className="register" variant="warning" onClick={handleShow}>
//         Register
//       </Button>{" "}
//       <Modal show={show} onHide={handleClose}>
//         <Modal.Body>
//           <Form>
//             <div className="modal-login-title">
//               <h1>Register</h1>
//             </div>
//             <Form.Group controlId="formBasicEmail">
//               <Form.Label className="text-fullname">Full Name</Form.Label>
//               <Form.Control
//                 className="size-text-email"
//                 type="email"
//                 placeholder="Enter email"
//               />
//             </Form.Group>
//             <Form.Group controlId="formBasicEmail">
//               <Form.Label className="text-email">Email</Form.Label>
//               <Form.Control
//                 className="size-text-email"
//                 type="email"
//                 placeholder="Enter email"
//               />
//             </Form.Group>
//             <Form.Group controlId="formBasicPassword">
//               <Form.Label className="text-password">Password</Form.Label>
//               <Form.Control type="password" placeholder="Password" />
//             </Form.Group>
//             <Form.Group controlId="formBasicPassword">
//               <Form.Label className="text-password">Phone</Form.Label>
//               <Form.Control type="text" placeholder="Password" />
//             </Form.Group>
//             <Form.Group controlId="exampleForm.ControlTextarea1">
//               <Form.Label className="text-address">Address</Form.Label>
//               <Form.Control as="textarea" rows="5" />
//             </Form.Group>
//             <Col>
//               <Button
//                 variant="warning"
//                 type="submit"
//                 className="btn-login"
//                 block
//               >
//                 Login
//               </Button>
//             </Col>
//           </Form>
//         </Modal.Body>
//       </Modal>
//     </div>
//   );
// }
function Header() {
  return (
    <div className="parrent-header">
      <div className="header">
        <img
          className="logo-app"
          src={icon}
          width="189px"
          height="68px"
          alt=""
        />
        <div className="btn-action">
          {/* <Login></Login>
          <Register></Register> */}
        </div>
      </div>
    </div>
  );
}
export function Content() {
  return (
    <div>
      <div className="title-position">
        <div className="title-web">
          &nbsp;
          <div className="explore">Explore</div>
          <div className="yact">your amazing city together</div>
        </div>
      </div>
      <div className="parrents-se">
        <div className="parrent-search-engine">
          <div className="text-search">Find great places to holliday</div>
          <div className="action-search-engine">
            <Form.Control type="email" placeholder="Enter Your Destination" />
            <button className="btn-input-text">
              <div className="search-text">Search</div>
            </button>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gridGap: "1rem",
          justifyItems: "center",
        }}
      >
        {card_contains.map((card) => (
          <div className="box1">
            <img className="logo-position-1" src={card.images} alt="" />
            <div className="text-in-box-1">{card.title}</div>
            <div className="desc-in-box-1">{card.desc}</div>
          </div>
        ))}
      </div>{" "}
      <div className="group-tour">Group Tour </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridGap: "1rem",
          justifyItems: "center",
        }}
      >
        {/* Content Group Tour 1*/}
        {destination.map((destinations) => (
          <div className="bg-group-tour-content">
            <div className="img-group-tour-content">
              <img
                src={destinations.images_des}
                width="328px"
                height="241px"
                alt=""
              />
            </div>
            <div className="bg-rating-group-tour-content"></div>
            <div className="rating-group-tour-content">
              {destinations.rating}
            </div>
            <div className="container-text-destination">
              <div className="title-group-tour-content">
                {destinations.title_des}
              </div>
              <div className="flex-price-and-place">
                <p className="price-group-tour-content">
                  {destinations.price}{" "}
                </p>
                <p className="place-group-tour-content">{destinations.place}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
function Footer() {
  return (
    <div className="footer">
      Copyright @ 2020 Dewe Tour - Your Name - NIS. All Rights reserved
    </div>
  );
}

export default Home;
