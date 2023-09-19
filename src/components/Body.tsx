// // import React, { useState, useEffect } from "react";

// // const Body = () => {
// //   const [userData, setUserData] = useState<any[]>([]);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     fetch("http://localhost:8082/users/get")
// //       .then((response) => {
// //         if (!response.ok) {
// //           console.log("error");
// //           throw new Error("Network response was not ok");
// //         }
// //         return response.json();
// //       })
// //       .then((data) => {
// //         console.log("data", data);
// //         setUserData(data);
// //       })
// //       .catch((err) => {
// //         setError(err);
// //       });
// //   }, []);
// //   console.log(userData);
// //   return (
// //     <div>
// //       <h2>User Data</h2>
// //       {userData.length > 0 ? (
// //         <ul>
// //           {userData.map((user) => (
// //             <li key={user.id}>
// //               <p>ID: {user.id}</p>
// //               <p>Username: {user.name}</p>
// //               <p>Email: {user.email}</p>
// //             </li>
// //           ))}
// //         </ul>
// //       ) : (
// //         <p>No user data available</p>
// //       )}
// //     </div>
// //   );
// // };


// // export default Body;

// import React, { useState, useEffect } from "react";

// const Body = () => {
//   const [userData, setUserData] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch("http://localhost:8082/users/get")
//       .then((response) => {
//         if (!response.ok) {
//           console.log("error");
//           throw new Error("Network response was not ok");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         console.log("data", data);
//         setUserData(data);
//       })
//       .catch((err) => {
//         setError(err);
//       });
//   }, []);
//   console.log(userData);

//   return (
//     <div className="center-container">
//       <h2>User Data</h2>
//       {userData.length > 0 ? (
//         <ul>
//           {userData.map((user) => (
//             <li key={user.id}>
//               <p>ID: {user.id}</p>
//               <p>Username: {user.name}</p>
//               <p>Email: {user.email}</p>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No user data available</p>
//       )}
//       <style jsx>{`
//         .center-container {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: center;
//           height: 50vh  ;
//           text-align: center;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Body;
