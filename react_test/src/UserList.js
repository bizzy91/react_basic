// import React from 'react';

// function UserList() {
//   // 랜더링할 배열
//   const users = [
//    {
//        id: 1,
//        username: 'bizzy1',
//        email: 'public.bizzy1@gmail.com'
//      },
//      {
//        id: 2,
//        username: 'bizzy2',
//        email: 'bizzy2@example.com'
//      },
//      {
//        id: 3,
//        username: 'bizzy3',
//        email: 'bizzy3@example.com'
//      }
//    ];
//   return (
//     <div>
//       <div>
//         <b>{users[0].username}</b> <span>({users[0].email})</span>
//       </div>
//       <div>
//         <b>{users[1].username}</b> <span>({users[1].email})</span>
//       </div>
//       <div>
//         <b>{users[2].username}</b> <span>({users[1].email})</span>
//       </div>
//     </div>
//   );
// }

// 위 코드의 컴포넌트 재사용 버전
import React from 'react';

function User({ user }) {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
    </div>
  );
}

function UserList() {
  const users = [
    {
      id: 1,
      username: 'bizzy1',
      email: 'public.bizzy1@gmail.com'
    },
    {
      id: 2,
      username: 'bizzy2',
      email: 'bizzy2@example.com'
    },
    {
      id: 3,
      username: 'bizzy3',
      email: 'bizzy3@example.com'
    }
  ];

  return (
    <div>
      <User user={users[0]} />
      <User user={users[1]} />
      <User user={users[2]} />
    </div>
  );
}
//   // 이렇게 고치면 안 된다. map(key, value 쌍의 배열)을 만들어주는 map() 함수의 value 와 key 를 지정해서 보내줘야 한다.
//   return (
//     <div>
//       {users.map(user => (
//         <User user={user} />
//       ))}
//     </div>
//   );
// }

// 위 코드의 개선 버전. map() 함수의 올바른 사용.
//   return (
//     <div>
//       {users.map(user => (
//         <User user={user} key={user.id} />
//       ))}
//     </div>
//   );
// }


export default UserList;