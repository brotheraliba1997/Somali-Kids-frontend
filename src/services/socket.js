import { io } from "socket.io-client";

// import handleIDB from '../utils/handle-indexed-db'

// const getUserInfo = () =>
//   new Promise((resolve) => {
//     try {
//       resolve(handleIDB.getVal({ model: 'Auth', _id: 'userData' }))
//     } catch (err) {
//       console.error(err)
//       resolve({})
//     }
//   })
// const userid = (await getUserInfo())?._id || ''
// const socket = socketIOClient.connect(BASE_URL)
const socket = io(process.env.NEXT_PUBLIC_API_BASE_Local, {
  //   query: { userId: driverId, userType: "Driver" },
  transports: ["polling"],
  // perMessageDeflate: false,
  // transports: ['websocket'],
  // transports: ['websocket', 'polling'],
  // withCredentials: true,
  // extraHeaders: {
  //   // pooling only
  //   userid,
  // },
  reconnection: true,
  reconnectionDelay: 1000,
  reconnectionDelayMax: 10000,
  reconnectionAttempts: Infinity,
  // reconnectionAttempts: 1,
});

export default socket;
