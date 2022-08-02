import type { NextPage } from 'next'
import { Table, Text } from '@mantine/core'

import Documents from '../components/Documents'
import { userData } from '../utils/userData'

const Home: NextPage = () => {

  const head:JSX.Element = (
    <tr>
      <th style={{width: '15vw'}}>Name</th>
      <th style={{width: '15vw'}}>City</th>
      <th style={{width: '15vw'}}>Salary</th>
      <th style={{width: '55vw'}}>Documents</th>
    </tr>
  )

  const rows:JSX.Element[] = userData.map((user, idx) => (
    <tr key={idx}>
      <td>{user.name}</td>
      <td>{user.symbol}</td>
      <td>{user.salary}</td>
      <td>
        <Documents docs={user.documents}/>
      </td>
    </tr>
  ))

  return (
    <>
      <Table striped highlightOnHover>
        <thead>
          {head}
        </thead>
        <tbody>
          {rows}
        </tbody>
      </Table>
    </>
  )
}

export default Home
