// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User',
    email: 'user@nextmail.com',
    password: '123456',
  },
];

const customers = [
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    name: 'Evil Rabbit',
    email: 'evil@rabbit.com',
    image_url: '/customers/evil-rabbit.png',
  },
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Delba de Oliveira',
    email: 'delba@oliveira.com',
    image_url: '/customers/delba-de-oliveira.png',
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    name: 'Lee Robinson',
    email: 'lee@robinson.com',
    image_url: '/customers/lee-robinson.png',
  },
  {
    id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    name: 'Michael Novotny',
    email: 'michael@novotny.com',
    image_url: '/customers/michael-novotny.png',
  },
  {
    id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
    name: 'Amy Burns',
    email: 'amy@burns.com',
    image_url: '/customers/amy-burns.png',
  },
  {
    id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    name: 'Balazs Orban',
    email: 'balazs@orban.com',
    image_url: '/customers/balazs-orban.png',
  },
];

const invoices = [
  {
    customer_id: customers[0].id,
    amount: 15795,
    status: 'pending',
    date: '2022-12-06',
  },
  {
    customer_id: customers[1].id,
    amount: 20348,
    status: 'pending',
    date: '2022-11-14',
  },
  {
    customer_id: customers[2].id,
    amount: 7850,
    status: 'paid',
    date: '2023-01-10',
  },
  {
    customer_id: customers[3].id,
    amount: 42900,
    status: 'overdue',
    date: '2023-02-18',
  },
  {
    customer_id: customers[4].id,
    amount: 14250,
    status: 'paid',
    date: '2023-03-22',
  },
  {
    customer_id: customers[5].id,
    amount: 31895,
    status: 'pending',
    date: '2023-04-15',
  },
  {
    customer_id: customers[0].id,
    amount: 27500,
    status: 'overdue',
    date: '2023-05-07',
  },
  {
    customer_id: customers[1].id,
    amount: 9650,
    status: 'paid',
    date: '2023-06-30',
  },
  {
    customer_id: customers[2].id,
    amount: 18400,
    status: 'pending',
    date: '2023-07-25',
  },
  {
    customer_id: customers[3].id,
    amount: 23075,
    status: 'overdue',
    date: '2023-08-12',
  },
  {
    customer_id: customers[4].id,
    amount: 5050,
    status: 'paid',
    date: '2023-09-05',
  },
  {
    customer_id: customers[5].id,
    amount: 15000,
    status: 'pending',
    date: '2023-10-10',
  },
  {
    customer_id: customers[0].id,
    amount: 27850,
    status: 'overdue',
    date: '2023-11-20',
  },
  {
    customer_id: customers[1].id,
    amount: 19450,
    status: 'paid',
    date: '2023-12-04',
  },
  {
    customer_id: customers[2].id,
    amount: 37500,
    status: 'pending',
    date: '2024-01-17',
  },
  {
    customer_id: customers[3].id,
    amount: 8200,
    status: 'paid',
    date: '2024-02-09',
  },
  {
    customer_id: customers[4].id,
    amount: 26700,
    status: 'overdue',
    date: '2024-03-03',
  },
  {
    customer_id: customers[5].id,
    amount: 12895,
    status: 'pending',
    date: '2024-04-22',
  },
  {
    customer_id: customers[0].id,
    amount: 49000,
    status: 'overdue',
    date: '2024-05-11',
  },
  {
    customer_id: customers[1].id,
    amount: 16750,
    status: 'paid',
    date: '2024-06-27',
  },
  {
    customer_id: customers[2].id,
    amount: 29800,
    status: 'pending',
    date: '2024-07-19',
  },
  {
    customer_id: customers[3].id,
    amount: 41500,
    status: 'overdue',
    date: '2024-08-08',
  },
];


const revenue = [
  { month: 'Jan', revenue: 2000 },
  { month: 'Feb', revenue: 1800 },
  { month: 'Mar', revenue: 2200 },
  { month: 'Apr', revenue: 2500 },
  { month: 'May', revenue: 2300 },
  { month: 'Jun', revenue: 3200 },
  { month: 'Jul', revenue: 3500 },
  { month: 'Aug', revenue: 3700 },
  { month: 'Sep', revenue: 2500 },
  { month: 'Oct', revenue: 2800 },
  { month: 'Nov', revenue: 3000 },
  { month: 'Dec', revenue: 4800 },
];

export { users, customers, invoices, revenue };
