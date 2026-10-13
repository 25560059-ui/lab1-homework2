{\rtf1\ansi\ansicpg1252\cocoartf2709
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 use blog_db;\
db.posts.insertMany([\
  \{\
    title: "L\uc0\u7853 p tr\'ecnh Backend v\u7899 i Node.js v\'e0 Express",\
    category: "Tech",\
    views: 150,\
    author: \{\
      name: "Nguy\uc0\u7877 n V\u259 n A",\
      email: "anguyen@example.com"\
    \},\
    tags: ["nodejs", "express", "backend"],\
    comments: [\
      \{\
        user: "Tr\uc0\u7847 n B",\
        content: "B\'e0i vi\uc0\u7871 t r\u7845 t hay v\'e0 chi ti\u7871 t!",\
        created_at: new Date("2026-03-01T08:00:00Z")\
      \},\
      \{\
        user: "L\'ea C",\
        content: "C\uc0\u7843 m \u417 n b\u7841 n \u273 \'e3 chia s\u7867 .",\
        created_at: new Date("2026-03-02T10:30:00Z")\
      \}\
    ]\
  \},\
  \{\
    title: "H\uc0\u432 \u7899 ng d\u7851 n h\u7885 c MongoDB Atlas cho ng\u432 \u7901 i m\u7899 i",\
    category: "Tech",\
    views: 85,\
    author: \{\
      name: "Tr\uc0\u7847 n Th\u7883  B",\
      email: "btran@example.com"\
    \},\
    tags: ["mongodb", "database", "nosql"],\
    comments: [\
      \{\
        user: "Nguy\uc0\u7877 n D",\
        content: "Mongodb Atlas x\'e0i r\uc0\u7845 t ti\u7879 n.",\
        created_at: new Date("2026-03-05T14:20:00Z")\
      \}\
    ]\
  \},\
  \{\
    title: "Kinh nghi\uc0\u7879 m du l\u7883 ch \u272 \'e0 L\u7841 t t\u7921  t\'fac",\
    category: "Life",\
    views: 200,\
    author: \{\
      name: "Ph\uc0\u7841 m V\u259 n C",\
      email: "cpham@example.com"\
    \},\
    tags: ["travel", "nodejs", "lifestyle"],\
    comments: [\
      \{\
        user: "Ho\'e0ng E",\
        content: "C\uc0\u7843 nh \u273 \u7865 p l\u7855 m m\u7885 i ng\u432 \u7901 i!",\
        created_at: new Date("2026-03-08T09:15:00Z")\
      \}\
    ]\
  \}\
]);\
\
// -------------------------------------------------------------\
// Query 1: T\'ecm c\'e1c b\'e0i vi\uc0\u7871 t thu\u7897 c category 'Tech' V\'c0 c\'f3 l\u432 \u7907 t xem >= 100\
db.posts.find(\{\
  category: "Tech",\
  views: \{ $gte: 100 \}\
\});\
\
// -------------------------------------------------------------\
// Query 2: T\'ecm t\uc0\u7845 t c\u7843  c\'e1c b\'e0i vi\u7871 t \u273 \u432 \u7907 c g\u7855 n tag 'nodejs'\
db.posts.find(\{\
  tags: "nodejs"\
\});\
\
// -------------------------------------------------------------\
// Update: Th\'eam 1 comment m\uc0\u7899 i ($push) V\'c0 t\u259 ng l\u432 \u7907 t xem th\'eam 1 ($inc) cho b\'e0i vi\u7871 t c\u7909  th\u7875 \
db.posts.updateOne(\
  \{ title: "L\uc0\u7853 p tr\'ecnh Backend v\u7899 i Node.js v\'e0 Express" \},\
  \{\
    $push: \{\
      comments: \{\
        user: "\uc0\u272 \u7895  F",\
        content: "Th\uc0\u7855 c m\u7855 c b\'e0i vi\u7871 t n\'e0y \u7903  \u273 o\u7841 n k\u7871 t n\u7889 i DB!",\
        created_at: new Date()\
      \}\
    \},\
    $inc: \{ views: 1 \}\
  \}\
);\
\
// Ki\uc0\u7875 m tra l\u7841 i k\u7871 t qu\u7843  b\'e0i vi\u7871 t v\u7915 a update\
db.posts.find(\{ title: "L\uc0\u7853 p tr\'ecnh Backend v\u7899 i Node.js v\'e0 Express" \});\
\
// -------------------------------------------------------------\
// Aggregation: T\'ednh t\uc0\u7893 ng s\u7889  l\u432 \u7907 t xem (totalViews) v\'e0 t\u7893 ng s\u7889  b\'e0i vi\u7871 t (totalPosts) theo danh m\u7909 c (category)\
db.posts.aggregate([\
  \{\
    $group: \{\
      _id: "$category",\
      totalViews: \{ $sum: "$views" \},\
      totalPosts: \{ $sum: 1 \}\
    \}\
  \}\
]);}